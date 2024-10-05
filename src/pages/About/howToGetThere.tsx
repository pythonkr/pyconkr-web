import Page from "components/common/Page"
import React from "react"
import styled from "styled-components"

import useTranslation from "utils/hooks/useTranslation"

const KAKAO_MAP_URL = "https://map.kakao.com/link/map/1946823368"
const NAVER_MAP_URL = "https://naver.me/Goz5cKSr"
const GOOGLE_MAP_URL = "https://maps.app.goo.gl/qRXkmreZREg85mZQ9"
const GOOGLE_MAP_IFRAME_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.3933816324757!2d127.0569611758607!3d37.28580957211265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5bf02a41fe89%3A0x25839c89f9f29081!2z7IiY7JuQ7Luo67Kk7IWY7IS87YSw!5e0!3m2!1sko!2skr!4v1728124272853!5m2!1sko!2skr"

const BusNumbers = [
  "5-3",
  "11",
  "19",
  "20",
  "20-1",
  "20-2",
  "32-4",
  "201",
  "670",
  "720-3",
  "999",
]

type MapInfoStateType = {
  mapType: 'kakao' | 'google'
}

export const HowToGetThere: React.FC = () => {
  const kakaoMapRef = React.useRef<HTMLDivElement>(null)
  const t = useTranslation()
  const [state, setState] = React.useState<MapInfoStateType>({ mapType: 'kakao' })

  const selectMap = (mapType: MapInfoStateType['mapType']) => setState(prevState => ({ ...prevState, mapType }))

  React.useEffect(() => {
    if (!(window.kakao && window.kakao.maps && kakaoMapRef.current)) return

    const content = `<a href="${KAKAO_MAP_URL}"><div style="width:250px;text-align:center;">${t("수원컨벤션센터")}</div></a>`
    const position = new window.kakao.maps.LatLng(37.285818093062026, 127.05950558082746)
    const map = new window.kakao.maps.Map(kakaoMapRef.current, { center: position, level: 3 })
    new kakao.maps.InfoWindow({ content }).open(map, new kakao.maps.Marker({ map, position }))
  })

  const flexBoxStyle: React.CSSProperties = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
  const columnFlexBoxStyle: React.CSSProperties = { ...flexBoxStyle, flexDirection: 'column' }
  const mapStyle: React.CSSProperties = { border: 0, width: "100%", height: "450px" }

  return <Page>
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      <h1>{t("장소 안내")}</h1>
      <h2>{t("수원컨벤션센터")}</h2>
      <div>
        <div style={{ ...flexBoxStyle }}>
          <MapSelectTabBtn className={state.mapType === "kakao" ? "active" : ""} onClick={() => selectMap('kakao')}>{t("카카오맵")}</MapSelectTabBtn>
          <MapSelectTabBtn className={state.mapType === "google" ? "active" : ""} onClick={() => selectMap('google')}>{t("구글 지도")}</MapSelectTabBtn>
        </div>

        <div style={{ ...columnFlexBoxStyle, display: state.mapType === 'kakao' ? 'flex' : 'none' }}>
          <div ref={kakaoMapRef} style={mapStyle}></div>
          <FullWidthAnchorBtn href={KAKAO_MAP_URL}><button className="kakao">{t("카카오맵에서 열기")}</button></FullWidthAnchorBtn>
          <FullWidthAnchorBtn href={NAVER_MAP_URL}><button className="naver">{t("네이버 지도에서 열기")}</button></FullWidthAnchorBtn>
        </div>
        <div style={{ ...columnFlexBoxStyle, display: state.mapType === 'google' ? 'flex' : 'none' }}>
          <iframe title="map" src={GOOGLE_MAP_IFRAME_SRC} style={mapStyle} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <FullWidthAnchorBtn href={GOOGLE_MAP_URL}><button className="google">{t("구글 지도에서 열기")}</button></FullWidthAnchorBtn>
        </div>
        <br />
        <ul>
          <li>{t("도로명 주소 : 16514, 경기도 수원시 영통구 광교중앙로 140(하동)")}</li>
          <li>{t("지번 주소 : 16514, 경기도 수원시 영통구 하동 864-10")}</li>
        </ul>
      </div>

      <hr />

      <h3>{t("대중교통")}</h3>
      <TransportInfoDetails open>
        <summary>{`${t("지하철")} (${t("광교중앙역")})`}</summary>
        <div>
          <img
            src="/images/place/suwon_subway.png"
            alt="수원컨벤션센터 근처 지하철 노선도"
            style={{ width: '100%', borderRadius: '0.5rem' }}
          />
          <div>
            <kbd className="subway-gwanggyojungang">{t("신분당선 「광교중앙역」")}</kbd> {t("4번 출구에서 도보 10분")}
          </div>
        </div>
      </TransportInfoDetails>
      <TransportInfoDetails>
        <summary>{t("버스")}</summary>
        <div>
          <img
            src="/images/place/suwon_bus.png"
            alt="수원컨벤션센터 근처 버스 노선도"
            style={{ width: '100%', borderRadius: '0.5rem' }}
          />
          <hr />
          <h5>{t("광역급행버스 「광교중앙·아주대환승센터」 하차 시")}</h5>

          {t("서울역")} <kbd className="widearea-express">M5115</kbd><kbd className="widearea-express">M5121</kbd> / {t("강남역")} <kbd className="widearea-express">M5422</kbd><br />
          → {t("「광교중앙·아주대환승센터」 하차")}<br />
          → <kbd className="subway-gwanggyojungang">{t("신분당선 「광교중앙역」")}</kbd> {t("4번 출구에서 도보 10분")}

          <hr />

          <h5>{t("시내버스 「수원컨벤션센터·롯데아울렛」 하차 시")}</h5>
          {BusNumbers.map((v, i) => <kbd className="city" key={i}>{v}</kbd>)}<br />
          → {t("수원컨벤션센터·롯데아울렛 하차")}
        </div>
      </TransportInfoDetails>
      <TransportInfoDetails>
        <summary>{t("공항 리무진")}</summary>
        <div>
          <h5>{t("인천공항 「한국민속촌」행")}</h5>
          <kbd style={{ backgroundColor: 'rgb(131, 165, 206)' }}>8877</kbd> {t("리무진 버스")} (60~80{t("분")})<br />
          → {t("수원컨벤션센터·광교갤러리아 백화점 하차")}

          <AirportBusDetails>
            <summary>{t("노선 세부정보")}</summary>
            <div>
              <table>
                <tr>
                  <td>{t("운행시간")}</td>
                  <td>
                    {t("(공항행) 첫차 04:35, 막차 19:05")}<br />
                    {t("(수원행) 첫차 T1 05:50, T2 05:30, 막차 T1 22:20, T2 22:00")}
                  </td>
                </tr>
                <tr>
                  <td>{t("소요시간")}</td>
                  <td>
                    {t("75분 (73km)")}<br />
                    {t("30분 ~ 110분 배차 간격")}
                  </td>
                </tr>
                <tr>
                  <td>{t("노선정보")}</td>
                  <td>
                    {t("제2터미널")} ↔ {t("제1터미널")} ↔ <b>{t("수원컨벤션센터·광교갤러리아 백화점")}</b> ↔ {t("흥덕지구입구 ↔ 신갈(용인) ↔ 한국민속촌")}
                  </td>
                </tr>
                <tr>
                  <td>{t("요금")}</td>
                  <td>9,000{t("원")}</td>
                </tr>
                <tr>
                  <td>{t("탑승위치")}</td>
                  <td>
                    {t("(제1터미널) 1층 7번 게이트")}<br />
                    {t("(제2터미널) 교통센터 지하 1층 40번 게이트")}
                  </td>
                </tr>
              </table>
            </div>
          </AirportBusDetails>

          <hr />

          <h5>{t("김포공항 「동수원」행")}</h5>
          <kbd style={{ backgroundColor: 'rgba(211, 0, 2, 1)', color: '#fff' }}>4300</kbd> {t("시외버스")} (80{t("분")})<br />
          → {t("동수원 하차")}<br />
          → {t("(택시 10분 또는 버스 30분)")}


          <AirportBusDetails>
            <summary>{t("노선 세부정보")}</summary>
            <div>
              <table>
                <tr>
                  <td>{t("운행시간")}</td>
                  <td>
                    {t("(공항행) 첫차 05:05, 막차 20:20")}<br />
                    {t("(수원행) 첫차 06:50, 막차 22:25")}
                  </td>
                </tr>
                <tr>
                  <td>{t("소요시간")}</td>
                  <td>
                    80{t("분")}<br />
                    {t("(일반) 15분 ~ 30분 배차 간격 / (급행) 60분 ~ 130분 배차 간격")}
                  </td>
                </tr>
                <tr>
                  <td>{t("노선정보")}</td>
                  <td>
                    ({t("일반")}) <b>{t("동수원")}</b> ↔ {t("한일타운 ↔ 의왕(고천) ↔ 호계사거리 ↔ 안양(범계) ↔ 관악역 ↔ 김포공항")}<br />
                    ({t("급행")}) <b>{t("동수원")}</b> ↔ {t("수원역 ↔ 서수원터미널 ↔ 김포공항")}
                  </td>
                </tr>
                <tr>
                  <td>{t("요금")}</td>
                  <td>6,000{t("원")}</td>
                </tr>
                <tr>
                  <td>{t("탑승위치")}</td>
                  <td>
                    {t("(국제선) 2층 1번")}<br />
                    {t("(국내선) 11-4번")}
                  </td>
                </tr>
              </table>
            </div>
          </AirportBusDetails>
        </div>
      </TransportInfoDetails>

      <hr />

      <h3>{t("주차 안내")}</h3>
      <h6>{t("주차장 주차요금표")}</h6>

      <table>
        <thead>
          <tr>
            <th rowSpan={2}>{t("구분")}</th>
            <th colSpan={3}>{t("1회 주차요금")}</th>
          </tr>
          <tr>
            <th>{t("최초 30분까지")}</th>
            <th>{t("30분 초과 후 (10분마다)")}</th>
            <th>{t("1일")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("승용 및 승합")}</td>
            <td>900{t("원")}</td>
            <td>400{t("원")}</td>
            <td>9,500{t("원")}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>{t("※수원시주차장조례 1급지 적용")}</td>
          </tr>
        </tfoot>
      </table>
      <ul>
        <li>{t("위 표는 2024년 10월 5일 기준 수원컨벤션센터 홈페이지에 게시된 지하주차장 요금표입니다.")}</li>
        <li><b>{t("카드결제만 가능합니다. (신용/체크/교통/삼성페이)")}</b></li>
        <li>{t("15인승 이상 25인승 미만 승합자동차, 2.5톤 이상 4.5톤 미만 화물자동차 또는 크기가 이에 준하는 차량은 지하주차장 이용이 불가합니다.")}</li>
        <li>{t("출구 정산 기준 20분 이내 회차시간은 무료입니다. (※ 경과 시 20분을 포함한 정상요금 부과)")}</li>
        <li>{t("주차요금 감면 등의 자세한 내용은")} <a href={t("https://www.scc.or.kr/parking-2/")} style={{ color: 'rgb(254, 189, 153)' }}>{t("수원컨벤션센터 주차안내 페이지")}</a>{t("를 참고해주세요.")}</li>
      </ul>
    </div>
  </Page>
}

const MapSelectTabBtn = styled.button`
  flex-grow: 1;
  padding: 0.25rem;

  border: none;
  background-color: rgba(255, 255, 255, 0.05);
  font-weight: lighter;

  border-radius: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.3);
    font-weight: bold;
  }
`

const FullWidthAnchorBtn = styled.a`
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0.5rem;

    font-size: 0.75rem;
    font-weight: bold;
    border: none;
    border-radius: unset;

    &.kakao {
      background-color: #FEE500;
      color: #191919;
    }

    &.naver {
      background-color: #04C75B;
      color: #FFF;
    }

    &.google {
      background-color: #4285F4;
      color: #FFF;
    }
  }
`

const TransportInfoDetails = styled.details`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #CCC;
  border-radius: 0.25rem;

  color: var(--pico-color);

  summary {
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    margin: 0.5rem 0;
    font-size: 0.875rem;

    line-height: 1.75;

    h5 {
      margin: 0.5rem 0;
    }

    kbd {
      margin: 0 0.1rem;
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;

      font-weight: 500;

      &.subway-gwanggyojungang {
        background-color: rgba(211, 17, 69, 0.75);
        color: #FFFFFF;
      }

      &.city {
        background: #18BF74;
      }

      &.widearea-express {
        background: #00BFFF;
      }
    }
  }

  &[open] {
    background: rgba(176, 168, 254, 0.1);

    summary {
      color: rgb(176, 168, 254);

      &:not([role]):not(:focus) {
        color: rgb(176, 168, 254);
      }
    }
  }

`

const AirportBusDetails = styled.details`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #CCC;
  border-radius: 0.25rem;

  summary {
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    margin: 0;
    font-size: 0.75rem;

    table {
      margin: 0;
      width: 100%;

      tr {
        padding: 0.25rem 0;

        b {
          color: rgb(176, 168, 254);
        }
      }
    }
  }
`
