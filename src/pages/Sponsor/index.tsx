import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import styled from "styled-components";
import Page from "components/common/Page";
import useIsMobile from "utils/hooks/useIsMobile";

const SponsorPage = () => {
  const isMobile = useIsMobile();
  return (
    <Page title="후원하기">
      <Container>
        <Vertical>
          <img className="sponsor-logo" src="/images/sponsor_logo_lg.png" alt="sponsor_logo" />
          <span className="medium-text peach-puzz">2024.05.27 - 2024.07.31</span>
          <Vertical style={{ paddingTop: "5rem" }}>
            <Button>후원하기</Button>
            <Button>후원사 가이드 다운로드</Button>
            <span className="medium-text white">
              후원 관련 문의:{" "}
              <a className="purple" href="mailto:sponsor@pycon.kr">
                sponsor@pycon.kr
              </a>
            </span>
          </Vertical>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <img className="finale-img" src="/images/finale2023_lg.png" alt="finale2023_lg" />
          <H1>파이콘 한국 후원의 의미</H1>
          <H3>파이콘 한국은?</H3>
          <H6>
            파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리 개발자 대상 행사로 오픈소스 프로그래밍
            언어인 파이썬의 저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다.
          </H6>
          <H3>비영리 행사</H3>
          <H6>
            파이콘 한국의 발표자 및 튜토리얼 진행자를 포함, 자원봉사자와 준비위원회 담당자 등 모든
            인원이 금전적 이득 없이 행사를 준비하고 운영해 나갑니다.
          </H6>
          <H3>커뮤니티에 기여</H3>
          <H6>
            이에 파이콘 한국에의 후원은 국내 오픈소스 커뮤니티와 파이썬 커뮤니티에 대한 가장 좋은
            기여 방법이며 여러 우수한 개발자들과의 만남을 가지실 수 있는 기회입니다.
          </H6>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <img
            className="mobile-slogan"
            src="/images/introduceSlogan.png"
            alt="introduceSlogan.png"
          />
          <H1>2024 파이콘 한국</H1>
          <H6 style={{ marginBottom: "2rem" }}>
            2014년, 한국에서 첫 파이콘이 열린 이후로 파이써니스타들은 파이콘이라는 만남의 장에
            파이썬이라는 하나의 공통점으로 뭉쳐 각자의 순간들을 나누고, 새로운 순간들을 함께
            만들어왔습니다. 여러분의 소중한 순간이 모여 파이콘은 점점 성장해올 수 있었고, 어느덧
            10번째 파이콘 한국을 앞두고 있습니다. 파이썬과 행복했던 순간들, 파이썬이기에 가능했던
            순간들, 여러분이 소중한 순간순간들을 가지고 모여 함께 새로운 순간들을 만들어 내길
            바랍니다.
          </H6>
          <Button>지난 파이콘 보러가기</Button>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>후원사 신청 절차</H1>
          <Grid>
            <GuideCard>
              <H3>01</H3>
              <H3>후원사 신청</H3>
              <H6>
                본 페이지 상단의 ‘후원사로 참여하기' 버튼을 통해 후원에 필요한 정보를 입력해주세요.
                입력해주신 정보는 내부 검토를 거치며, 일부 항목의 경우수정을 요청드릴 수 있습니다.
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>02</H3>
              <H3>전자 계약서 서명</H3>
              <H6>
                후원사 신청서에 대한 검토가 완료되면 후원사 계약을 위한 전자 계약서가 발송됩니다.
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>03</H3>
              <H3>후원금 입금</H3>
              <H6>
                계약서 서명을 완료하신 이후 2주 이내로 후원금 입금을 요청드립니다. 하단에 표기된
                후원 금액은 부가세가 포함되지 않은 금액으로, 부가세 10%를 가산하여 입금해주셔야
                합니다.
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>04</H3>
              <H3>후원사 확정</H3>
              <H6>
                후원 금액이 정상적으로 입금된 것이 확인된 즉시, 파이콘 한국 2024의 후원사로
                확정됩니다.
              </H6>
            </GuideCard>
          </Grid>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>후원사 혜택</H1>
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            scrollbar={true}
            spaceBetween={20}
            modules={[Scrollbar]}
            loop={true}
          >
            <SwiperSlide>
              <BenefitCard>
                <H3>후원사 부스</H3>
                <H6>
                  후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등
                  다양한 행사를 진행할 수 있습니다.
                </H6>
                <BenefitImage src="/images/sponsor/booth.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>후원사 세션</H3>
                <H6>
                  파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서
                  이야기 할 수 있습니다.
                </H6>
                <BenefitImage src="/images/sponsor/session.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>로고 노출</H3>
                <H6>
                  파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속
                  보관, 유지되어 지속적으로 로고가 노출됩니다.
                </H6>
                <BenefitImage src="/images/sponsor/display_logo.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>홍보 영상</H3>
                <H6>
                  파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을
                  송출합니다.
                </H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>티켓 지원</H3>
                <H6>
                  파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별
                  상이합니다.
                </H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>증정품 지급</H3>
                <H6>파이콘 한국에서 후원사의 굿즈 등 소정의 증정품을 전달할 수 있습니다.</H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>후원 증서</H3>
                <H6>후원에 대한 감사의 마음을 담아 파이콘 한국 후원인증서를 드립니다.</H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>네트워킹 공간</H3>
                <H6>참가자들과 자유롭게 네트워킹 할 수 있는 공간을 제공합니다.</H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
          </Swiper>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>후원사 등급 안내</H1>
          <SponsorTable>
            <table>
              <thead>
                <td></td>
                <td>키스톤</td>
                <td>다이아몬드</td>
                <td>플래티넘</td>
              </thead>
              <tbody>
                <tr>
                  <td>후원금</td>
                  <td>20,000,000원</td>
                  <td>10,000,000원</td>
                  <td>6,000,000원</td>
                </tr>
                <tr>
                  <td>티켓 지원</td>
                  <td>20매</td>
                  <td>15매</td>
                  <td>5매</td>
                </tr>
                <tr>
                  <td>부스</td>
                  <td>5칸</td>
                  <td>3칸</td>
                  <td>1칸</td>
                </tr>
                <tr>
                  <td>테이블</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>후원사 세션</td>
                  <td>1세션</td>
                  <td>1세션</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>홍보 영상</td>
                  <td>2회</td>
                  <td>1회</td>
                  <td>2회</td>
                </tr>
                <tr>
                  <td>로고 노출 위치</td>
                  <td>
                    네임택(티켓) 스트랩 <br />
                    현수막
                    <br />
                    스탠딩 배너
                    <br />
                    웹사이트
                  </td>
                  <td>
                    현수막
                    <br />
                    스탠딩 배너
                    <br />
                    웹사이트
                  </td>
                  <td>
                    현수막
                    <br />
                    스탠딩 배너
                    <br />
                    웹사이트
                  </td>
                </tr>
              </tbody>
            </table>
          </SponsorTable>
          <SponsorTable>
            <table>
              <thead>
                <td></td>
                <td>골드</td>
                <td>스타트업</td>
                <td>커뮤니티</td>
                <td>출판사</td>
              </thead>
              <tbody>
                <tr>
                  <td>후원금</td>
                  <td>3,000,000원</td>
                  <td>1,000,000원</td>
                  <td>300,000원</td>
                  <td>도서 60권 이상</td>
                </tr>
                <tr>
                  <td>티켓 지원</td>
                  <td>3매</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>부스</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>테이블</td>
                  <td>1칸</td>
                  <td>1칸</td>
                  <td>1칸</td>
                  <td>1칸</td>
                </tr>
                <tr>
                  <td>후원사 세션</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>홍보 영상</td>
                  <td>1회</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>로고 노출 위치</td>
                  <td>
                    현수막
                    <br />
                    스탠딩 배너
                    <br />
                    웹사이트
                  </td>
                  <td>
                    현수막
                    <br />
                    스탠딩 배너
                    <br />
                    웹사이트
                  </td>
                  <td>
                    현수막
                    <br />
                    웹사이트
                  </td>
                  <td>
                    현수막
                    <br />
                    스탠딩 배너
                    <br />
                    웹사이트
                  </td>
                </tr>
              </tbody>
            </table>
          </SponsorTable>
          <SponsorTable>
            <H3>전 등급 공통</H3>
            <ul>
              <li>SNS 홍보</li>
              <li>증정품 지급</li>
              <li>후원 증서</li>
            </ul>
          </SponsorTable>
          <Caution>
            <ul>
              <li>표기된 금액은 부가세가 포함되지 않은 금액이며, 부가세는 10% 입니다.</li>
              <li>추후 일부 내용이 변경될 수 있습니다.</li>
              <li>
                스타트업 스폰서십은 사내에서 파이썬을 사용하고, 설립 3년 이하, 사내 인원 30인 이하인
                곳에 한합니다.
              </li>
              <li>커뮤니티 스폰서십은 비영리 단체에 한해 후원이 가능합니다.</li>
              <li>출판사 후원의 경우, 파이썬 관련 도서 출판 기록이 필요합니다.</li>
              <li>
                후원 가능 여부나 기타 문의사항은 언제든지{" "}
                <a className="purple" href="mailto:sponsor@pycon.kr">
                  sponsor@pycon.kr
                </a>
                로 문의 주시기 바랍니다.
              </li>
            </ul>
          </Caution>
        </Vertical>
      </Container>
    </Page>
  );
};

export default SponsorPage;

const H1 = styled.h1`
  margin-top: 3rem;
  font-size: 40px;
  color: #b0a8fe;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 24px;
  }
`;

const H3 = styled.h3`
  margin-top: 1.5rem;
  font-size: 24px;
  color: #b0a8fe;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 16px;
  }
`;

const H6 = styled.h6`
  margin-top: 1rem;
  font-size: 16px;
  text-align: center;
  color: #ebebeb;
  line-height: 24px;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 17rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: #b0a8fe;
  color: #141414;
  font-size: 16px;
`;

const Grid = styled.div`
  display: grid;
  width: 85%;
  grid-gap: 1.5rem;
  margin-top: 2.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GuideCard = styled.div`
  border: 1px solid #b0a8fe;
  border-radius: 1rem;
  text-align: start;
  padding: 0 1rem;

  & > h3:first-child {
    margin-top: 1rem;
  }

  & > h3 {
    margin: 0.5rem 0;
  }

  & > h6 {
    text-align: start;
    padding-bottom: 3rem;
  }
`;

const SponsorTable = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #b0a8fe;
  border-radius: 1rem;
  margin-top: 2rem;

  @media only screen and (max-width: 810px) {
    width: 90%;
    margin: 2rem 1rem 0 1rem;
  }

  & > h3 {
    text-align: start;
    padding-left: 2rem;
  }

  & > ul {
    padding-left: 1.5rem;
    padding-bottom: 0.5rem;

    & > li {
      list-style: disc;
      text-align: start;
      color: #b0a8fe;
      font-size: 16px;
    }
  }

  & > table {
    background: tansparent;
    border-collapse: collapse;
    border-style: hidden;

    & > thead > td {
      text-align: center;
      background: #b0a8fe;
      color: #141414;

      @media only screen and (max-width: 810px) {
        font-size: 12px;
      }

      &:first-child {
        border-top-left-radius: 0.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
      }
    }

    & > tbody > tr > td {
      @media only screen and (max-width: 810px) {
        font-size: 10px;
      }

      border-bottom: 1px solid #b0a8fe;
      padding: 1rem 0;
      text-align: center;
      background: #141414;
      color: #b0a8fe;
    }
  }
`;

const BenefitCard = styled.div`
  border: 1px solid #b0a8fe;
  border-radius: 1rem;
  text-align: start;
  width: 100%;

  & > h6,
  h3 {
    padding: 0 1rem;
    text-align: start;
  }

  & > img {
    padding: 0;
    border-radius: 0;
  }

  @media only screen and (max-width: 810px) {
    width: 90%;
    margin: 0 1rem;
  }
`;

const BenefitImage = styled.img`
  border-bottom-left-radius: 1rem !important;
  border-bottom-right-radius: 1rem !important;
`;

const Caution = styled.div`
  width: 100%;

  & > ul {
    margin-left: 1.5rem;
    display: block;
    padding-top: 1rem;

    @media only screen and (max-width: 810px) {
      width: 85%;
      margin-left: 2rem;
    }

    & > li {
      list-style: disc;
      text-align: start;
      font-size: 16px;

      @media only screen and (max-width: 810px) {
        font-size: 12px;
      }
    }
  }
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  width: 100%;

  &:nth-child(even) {
    background-color: #141414;
  }
`;
