import { wrap } from '@suspensive/react'
import React from "react"
import * as R from 'remeda'
import styled from 'styled-components'

import Page from "components/common/Page"
import { APIPretalxSessions } from 'models/api/session'
import { useNavigate } from 'react-router'
import { useListSessionsQuery } from 'utils/hooks/useAPI'
import useTranslation from "utils/hooks/useTranslation"

const ENABLE_DETAILS = false

const TD_HEIGHT = 2.5
const TD_WIDTH = 12.5
const TD_WIDTH_MOBILE = 20

type TimeTableData = {
  [date: string]: {
    [time: string]: {
      [room: string]: {
        rowSpan: number
        session: APIPretalxSessions[0]
      } | undefined
    }
  }
}

const getDateStr = (date: Date) => date.toISOString().split('T')[0]
const getDetailedDateStr = (date: Date) => date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
const getPaddedTime = (time: Date) => `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`

const getRoomName = (room: { [key: string]: string }) => Object.values(room)[0] ?? '알 수 없음'
const getRooms = (data: APIPretalxSessions) => {
  const rooms: Set<string> = new Set()
  data.forEach((session) => (session.slot?.room) && rooms.add(getRoomName(session.slot.room)))
  return Array.from(rooms)
}

const getConfStartEndTimePerDay: (data: APIPretalxSessions) => { [date: string]: { start: Date; end: Date } } = (data) => {
  const result: { [date: string]: { start: Date; end: Date } } = {}

  data.forEach((session) => {
    if (session.slot?.start && session.slot?.end) {
      const startTime = new Date(session.slot.start)
      const endTime = new Date(session.slot.end)
      const date = getDateStr(startTime)

      if (!result[date]) {
        result[date] = { start: startTime, end: endTime }
      } else {
        if (startTime < result[date].start) result[date].start = startTime
        if (endTime > result[date].end) result[date].end = endTime
      }
    }
  })

  return result
}

const getEveryTenMinutesArr = (start: Date, end: Date) => {
  let time = new Date(start)
  const arr = []

  while (time <= end) {
    arr.push(time)
    time = new Date(new Date(time).setMinutes(time.getMinutes() + 10))
  }
  return arr
}

const getTimeTableData: (data: APIPretalxSessions) => TimeTableData = (data) => {
  // Initialize timeTableData structure
  const timeTableData: TimeTableData = Object.entries(getConfStartEndTimePerDay(data)).reduce(
    (acc, [date, { start, end }]) => ({
      ...acc,
      [date]: getEveryTenMinutesArr(start, end).reduce((acc, time) => ({ ...acc, [getPaddedTime(time)]: {} }), {}),
    }), {}
  )

  // Fill timeTableData with session data
  data.forEach((session) => {
    if (session.slot?.start && session.slot?.end) {
      const start = new Date(session.slot.start)
      const durationMin = (new Date(session.slot.end).getTime() - start.getTime()) / 1000 / 60
      timeTableData[getDateStr(start)][getPaddedTime(start)][getRoomName(session.slot.room)] = { rowSpan: durationMin / 10, session }
    }
  })

  return timeTableData
}

const SessionColumn: React.FC<{ rowSpan: number, colSpan?: number, session: APIPretalxSessions[0] }> = ({ rowSpan, colSpan, session }) => {
  const navigate = useNavigate()
  const clickable = ENABLE_DETAILS && R.isArray(session.speakers) && !R.isEmpty(session.speakers)
  return <td rowSpan={rowSpan} colSpan={colSpan}>
    <SessionBox onClick={() => clickable && navigate(`/session/${session.code}`)} className={clickable ? 'clickable' : ''}>
      <h6>{session.title}</h6>
      <SessionSpeakerContainer>
        {session.speakers.map((speaker) => <kbd key={speaker.code}>{speaker.name}</kbd>)}
      </SessionSpeakerContainer>
    </SessionBox>
  </td>
}

export const SessionTimeTablePage: React.FC = () => {
  const t = useTranslation()

  const SessionTimeTable = wrap
    .ErrorBoundary({ fallback: <h4>{t("세션 목록을 불러오는 중 에러가 발생했습니다.")}</h4> })
    .Suspense({ fallback: <h4>{t("세션 목록을 불러오는 중 입니다.")}</h4> })
    .on(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useEffect(() => window.scrollTo(0, 0), [])
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate = useNavigate()
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [confDate, setConfDate] = React.useState('')
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useListSessionsQuery()

      const timeTableData = getTimeTableData(data)
      const dates = Object.keys(timeTableData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      const rooms: { [room: string]: number } = getRooms(data).reduce((acc, room) => ({ ...acc, [room]: 0 }), {})
      const roomCount = Object.keys(rooms).length
      const sortedRoomList = Object.keys(rooms).sort()

      const selectedDate = confDate || dates[0]
      const selectedTableData = timeTableData[selectedDate]

      let breakCount = 0
      return <>
        <hr />
        <SessionDateTabContainer>
          {
            dates.map(
              (date, i) => <button key={date} onClick={() => setConfDate(date)} className={selectedDate === date ? 'selected' : ''}>
                <h3>Day {i + 1}</h3>
                <h6><small>{t(getDetailedDateStr(new Date(date)))}</small></h6>
              </button>
            )
          }
        </SessionDateTabContainer>
        <hr />
        <SessionTableContainer>
          <SessionTable>
            <thead>
              <th></th>
              {sortedRoomList.map((room) => <th key={room}>{t(room)}</th>)}
            </thead>
            <tbody>
              <tr><td colSpan={roomCount + 1}></td></tr>
              {
                Object.entries(selectedTableData).map(([time, roomData], i, a) => {
                  const hasSession = Object.values(rooms).some((c) => c >= 1) || Object.values(roomData).some((room) => room !== undefined)

                  if (!hasSession) {
                    if (breakCount > 1) {
                      breakCount--
                      return <tr></tr>
                    } else {
                      // 지금부터 다음 세션이 존재하기 전까지의 휴식 시간을 계산합니다.
                      breakCount = 1
                      for (let bi = i + 1; bi < a.length; bi++) {
                        if (Object.values(a[bi][1]).some((room) => room !== undefined)) break
                        breakCount += 1
                      }

                      // I really hate this, but I can't think of a better way to do this.
                      const height = TD_HEIGHT * breakCount / (breakCount <= 2 ? 1 : 3)
                      return <tr>
                        <td style={{ height: `${height}rem`, transform: `translateY(-${height / 2}rem)` }}>{time}</td>
                        <td colSpan={roomCount + 1} rowSpan={breakCount} style={{ height: `${height}rem` }}>
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            {i !== a.length - 1 && <small style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{t('휴식')}</small>}
                          </div>
                        </td>
                      </tr>
                    }
                  }

                  // 만약 세션 타입이 아닌 발표가 존재하는 경우, 해당 줄에서는 colSpan이 roomCount인 column을 생성합니다.
                  const nonSessionTypeData = Object.values(roomData).find((room) => room !== undefined && room.session.submission_type.en !== 'Session')
                  if (nonSessionTypeData) {
                    Object.keys(rooms).forEach((room) => rooms[room] = nonSessionTypeData.rowSpan - 1)
                    return <tr>
                      <td>{time}</td>
                      <SessionColumn rowSpan={nonSessionTypeData.rowSpan} colSpan={roomCount} session={nonSessionTypeData.session} />
                    </tr>
                  }

                  return <tr>
                    <td>{time}</td>
                    {
                      sortedRoomList.map((room) => {
                        const roomDatum = roomData[room]
                        if (roomDatum === undefined) {
                          // 진행 중인 세션이 없는 경우, 해당 줄에서는 해당 room의 빈 column을 생성합니다.
                          if (rooms[room] <= 0) return <td></td>
                          // 진행 중인 세션이 있는 경우, 이번 줄에서는 해당 세션들만큼 column을 생성하지 않습니다.
                          rooms[room] -= 1
                          return null
                        }
                        // 세션이 여러 줄에 걸쳐있는 경우, n-1 줄만큼 해당 room에 column을 생성하지 않도록 합니다.
                        if (roomDatum.rowSpan > 1) rooms[room] = roomDatum.rowSpan - 1
                        return <SessionColumn key={room} rowSpan={roomDatum.rowSpan} session={roomDatum.session} />
                      })
                    }
                  </tr>
                })
              }
            </tbody>
          </SessionTable>
        </SessionTableContainer>
      </>
    })

  return (
    <Page>
      <h1>{t("세션 시간표")}</h1>
      <hr />
      <h6 style={{ paddingLeft: '1rem' }}>* {t('발표 목록은 발표자 사정에 따라 변동될 수 있습니다.')}</h6>
      <SessionTimeTable />
    </Page>
  )
}

const SessionDateTabContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  button {
    background-color: unset;
    color: rgba(255, 255, 255, 0.5);
    border: unset;

    &.selected {
      color: rgba(255, 255, 255, 1);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: inherit;
  }
`

const SessionTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const SessionTable = styled.table`
  width: 100%;
  max-width: 60rem;

  * {
    background-color: unset;
    text-align: center;
    margin: 0;
    padding: 0;
    border: unset;
  }

  tbody > th {
    border: unset;
  }

  tr:first-child td {
    border-top: unset;
    transform: unset;
    height: ${TD_HEIGHT / 2}rem;
  }

  td {
    height: ${TD_HEIGHT}rem;
  }

  td:first-child {
    border-top: unset;
    transform: translateY(-${TD_HEIGHT / 2}rem);
    width: 1.5rem;

    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
  }

  td:not(:first-child) {
    width: ${TD_WIDTH}vw;
    max-width: ${TD_WIDTH}vw;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  small {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 810px) {
    td:not(:first-child) {
      width: ${TD_WIDTH_MOBILE}vw;
      max-width: ${TD_WIDTH_MOBILE}vw;
    }
  }
`

const SessionBox = styled.div`
  height: 100%;
  margin: 0.25rem;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(176, 168, 254, 0.3);
  border-radius: 0.5rem;

  background-color: rgba(176, 168, 254, 0.1);
  font-size: 1rem;
  transition: all 0.25s ease;

  &.clickable {
    cursor: pointer;
  }

  h6 {
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
    transition: all 0.25s ease;
  }

  kbd {
    background-color: rgba(222, 240, 128, 0.5);
    padding: 0.1rem 0.25rem;
    margin: 0.5rem 0.25rem 0 0.25rem;
    border-radius: 0.25rem;

    color: black;
    font-size: 0.6rem;
    transition: all 0.25s ease;
  }

  &:hover {
    border: 1px solid rgba(176, 168, 254, 0.75);
    background-color: rgba(176, 168, 254, 0.25);
    transition: all 0.25s ease;

    h6 {
      color: rgba(255, 255, 255, 1);
      transition: all 0.25s ease;
    }

    kbd {
      background-color: rgba(222, 240, 128, 0.75);
      transition: all 0.25s ease;
    }
  }

  @media only screen and (max-width: 810px) {
    font-size: 0.75rem;
    margin: 0.1rem;
    padding: 0.1rem;

    h6 {
      font-size: 0.666rem;
    }

    kbd {
      font-size: 0.45rem;
      margin: 0.25rem 0.1rem;
    }
  }
`

const SessionSpeakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
