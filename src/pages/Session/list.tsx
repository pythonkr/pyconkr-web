import { wrap } from '@suspensive/react'
import React from "react"
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { SloganShort } from 'assets/icons'
import { FallbackImg } from 'components/common/FallbackImg'
import Page from "components/common/Page"
import { APIPretalxSessions } from 'models/api/session'
import { useListSessionsQuery } from 'utils/hooks/useAPI'
import useTranslation from "utils/hooks/useTranslation"

const SessionItem: React.FC<{ session: APIPretalxSessions[0] }> = ({ session }) => {
  const t = useTranslation()
  const navigate = useNavigate()

  return <SessionItemEl>
    <SessionItemImgContainer>
      <FallbackImg src={session.image || ''} alt={session.title} errorFallback={<SloganShort />} />
    </SessionItemImgContainer>
    <SessionItemInfoContainer>
      <h3 onClick={() => navigate(`/session/${session.code}`)}>{session.title}</h3>
      <h6>{session.abstract}</h6>
      <SessionSpeakerContainer>by {session.speakers.map((speaker) => <kbd key={speaker.code}>{speaker.name}</kbd>)}</SessionSpeakerContainer>
      <SmallTagContainer>
        {session.tags.map(tag => <SmallTag key={tag}>{tag}</SmallTag>)}
        {session.do_not_record && <SmallTag>{t('녹화 불가')}</SmallTag>}
      </SmallTagContainer>
    </SessionItemInfoContainer>
  </SessionItemEl>
}

export const SessionListPage = () => {
  const t = useTranslation()

  const SessionList = wrap
    .ErrorBoundary({ fallback: <h4>{t("세션 목록을 불러오는 중 에러가 발생했습니다.")}</h4> })
    .Suspense({ fallback: <h4>{t("세션 목록을 불러오는 중 입니다.")}</h4> })
    .on(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useListSessionsQuery()
      return <>{data.map((session) => <SessionItem key={session.code} session={session} />)}</>
    })

  return (
    <Page>
      <h1>{t("세션 목록")}</h1>
      <hr />
      <h6 style={{ paddingLeft: '1rem' }}>* {t('발표 목록은 발표자 사정에 따라 변동될 수 있습니다.')}</h6>
      <SessionList />
    </Page>
  )
}

const SessionItemEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;

  color: var(--pico-h6-color);

  border-top: 1px solid var(--pico-muted-border-color);
  border-bottom: 1px solid var(--pico-muted-border-color);

  @media only screen and (max-width: 809px) {
    padding: 0rem;
    gap: 0.5rem;
  }
`

const SessionItemImgContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin: 0.75rem;
  flex-shrink: 0;
  flex-grow: 0;

  border-radius: 50%;
  border: 1px solid var(--pico-muted-border-color);

  * {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }

  @media only screen and (max-width: 809px) {
    width: 5rem;
    height: 5rem;
    margin: 0.25rem;
  }
`

const SessionItemInfoContainer = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  flex-grow: 1;

  h3 {
    color: #FEBD99;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  h6 {
    color: var(--pico-h3-color);
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 809px) {
    h3 {
      font-size: 1.5rem;
    }

    h6 {
      font-size: 0.8rem;
    }
  }
`

const SessionSpeakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  color: var(--pico-h6-color);

  img {
    width: 0.75rem;
    height: 0.75rem;
    min-width: 0.75rem;
    min-height: 0.75rem;
    max-width: 0.75rem;
    max-height: 0.75rem;
    border-radius: 50%;
    background-color: #f0f0f0;
  }

  kbd {
    background-color: #def080;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;

    font-size: 0.75rem;
  }
`

const SmallTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.25rem 0;
  gap: 0.25rem;
`

const SmallTag = styled.kbd`
  background-color: #b0a8fe;
  padding: 0.1rem 0.25rem;
  border-radius: 0.25rem;
  font-family: var(--pico-font-family);

  font-size: 0.75rem;
`
