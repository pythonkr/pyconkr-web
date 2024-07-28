import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import styled from "styled-components";
import Page from "components/common/Page";
import useIsMobile from "utils/hooks/useIsMobile";
import Collapse from "components/common/Collapse";
import SponsorTable from "./SponsorTable";

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
          <H6 style={{ width: "50%" }}>
            파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리 개발자 대상 행사로 오픈소스 프로그래밍
            언어인 파이썬의 저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다.
          </H6>
          <H3>비영리 행사</H3>
          <H6 style={{ width: "50%" }}>
            파이콘 한국의 발표자 및 튜토리얼 진행자를 포함, 자원봉사자와 준비위원회 담당자 등 모든
            인원이 금전적 이득 없이 행사를 준비하고 운영해 나갑니다.
          </H6>
          <H3>커뮤니티에 기여</H3>
          <H6 style={{ width: "50%" }}>
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
          <SponsorRatingTable>
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
          </SponsorRatingTable>
          <SponsorRatingTable>
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
          </SponsorRatingTable>
          <SponsorRatingTable>
            <H3>전 등급 공통</H3>
            <ul>
              <li>SNS 홍보</li>
              <li>증정품 지급</li>
              <li>후원 증서</li>
            </ul>
          </SponsorRatingTable>
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
      <Container>
        <Vertical>
          <H1>FAQ</H1>
          <Vertical>
            <H3>후원사 신청</H3>
            <Faq>
              <Collapse
                order={1}
                header="후원사 신청시 여러 후원 등급에 중복 신청도 가능한가요?"
                content="아니요, 중복 신청은 불가능합니다. 후원사 선정은 입금순으로 이루어지기 때문에 후원하고자 하시는 등급에 빠르게 신청하시는 걸 추천드립니다. 일부 후원 등급의 경우에는 후원사의 수가 정해져있기 때문에 조기 마감될 수 있습니다. 해당 후원 등급의 잔여 후원사 수는 추후 후원사 페이지에서 확인하실 수 있습니다."
              />
              <Collapse
                order={2}
                header="후원사 선정 방법이 궁금합니다. 선착순인가요?"
                content="후원사 등록 과정이 정상적으로 등록되었다는 가정 하에 선착순으로 이뤄집니다."
              />
              <Collapse
                order={3}
                header="후원사 등록이 정상적으로 진행되었는지 확인 방법이 있나요?"
                content="입금이 완료되면 입금 확인 메일과 함께 정식 후원사 확정 메일을 보내드립니다."
              />
            </Faq>
          </Vertical>
          <Vertical>
            <H3>후원금</H3>
            <Faq>
              <Collapse
                order={1}
                header="후원금은 어디에 쓰이나요?"
                content="행사 운영비로 사용되게 됩니다. 장소대여비, 부스 운영비, 각종 프로그램 진행비, 해외 스피커 항공료 및 호텔, 스피커와 운영팀 식사, 비디오녹화, 기념 티셔츠 등의 제작에 사용됩니다."
              />
              <Collapse
                order={2}
                header="세금 계산서 발행이 가능한가요?"
                content="네, 사단법인 파이썬사용자모임 명의로 세금계산서 발행이 가능합니다."
              />
              <Collapse
                order={3}
                header="해당 금액은 VAT가 포함된 금액인가요?"
                content="해당 금액은 부가세가 포함되지 않은 금액이며, 해당 항목들에 대해서도 전자 세금계산서 발급될 예정입니다."
              />
            </Faq>
          </Vertical>
          <Vertical>
            <H3>등급 & 부스</H3>
            <Faq>
              <Collapse
                order={1}
                header="부스 위치는 어떻게 결정되나요?"
                content="준비위에서 신청순으로 배정합니다. 이후 후원사들 간에 협의하여 바꾸시는 것은 가능합니다. 바꾸신 경우에는 준비위에 알려주시기 바랍니다."
              />
              <Collapse
                order={2}
                header="부스 운영 인력은 컨퍼런스 티켓이 필요한가요?"
                content="부스 운영 인력은 티켓이 필요하지 않으며 별도의 식별 가능한 표식을 제공해 드릴 예정입니다. 다만 부스 운영 인력은 컨퍼런스와 세션 등을 참가할 수 없습니다."
              />
              <Collapse
                order={3}
                header="부스 운영 인력에도 제한이 있나요?"
                content="아니요, 별도의 인원 제한은 없습니다. 다만 동시에 부스에 있는 운영 인력의 수를 준비위와 미리 협의하셔야 합니다."
              />
              <Collapse
                order={4}
                header="부스에서 제공할 수 있는 물품에 제한이 있나요?"
                content="아니요, 행동강령을 위반하지 않는 물품이라면 제한이 없습니다. 일반적으로는 티셔츠, 리딤코드, 문구류, 뱃지, 스티커 등을 제공합니다."
              />
              <Collapse
                order={5}
                header="후원사 세션의 발표자도 컨퍼런스 티켓을 구매해야 하나요?"
                content="네, 모든 참가자는 컨퍼런스 티켓을 소지하셔야 합니다. 후원사에게 혜택으로 제공되는 컨퍼런스 티켓을 활용하실 수 있습니다."
              />
              <Collapse
                order={6}
                header="홍보영상은 어느 시점에 노출되는 건가요?"
                content="후원사 홍보영상은 세션 중간 중간 여유 시간에 노출 됩니다."
              />
            </Faq>
          </Vertical>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>후원사 목록</H1>
          <SponsorList>
            <SponsorTable
              max={3}
              levelName="Keystone"
              sponsors={[{ name: "PyCon", image: "/images/introduceSlogan.png" }]}
            />
            <SponsorTable
              max={4}
              levelName="Diamond"
              sponsors={[{ name: "PyCon", image: "/images/introduceSlogan.png" }]}
            />
            <SponsorTable
              max={4}
              levelName="Platinum"
              sponsors={[
                { name: "PyCon", image: "/images/introduceSlogan.png" },
                { name: "PyCon", image: "/images/introduceSlogan.png" },
              ]}
            />
            <SponsorTable
              max={4}
              levelName="Gold"
              sponsors={[{ name: "PyCon", image: "/images/introduceSlogan.png" }]}
            />
            <SponsorTable
              max={4}
              levelName="Startup"
              sponsors={[{ name: "PyCon", image: "/images/introduceSlogan.png" }]}
            />
            <SponsorTable
              max={4}
              levelName="Community"
              sponsors={[{ name: "PyCon", image: "/images/introduceSlogan.png" }]}
            />
            <SponsorTable
              max={4}
              levelName="Publisher"
              sponsors={[{ name: "PyCon", image: "/images/introduceSlogan.png" }]}
            />
          </SponsorList>
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

const SponsorList = styled.div`
  & > div + div {
    margin-top: 2rem;
  }
`;

const Faq = styled.table`
  border: 1px solid #b0a8fe;
  border-right: none;
  border-left: none;
  border-collapse: collapse;

  @media only screen and (max-width: 810px) {
    width: 90%;
  }
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

const SponsorRatingTable = styled.div`
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
  margin-bottom: 2rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 100%;

  &:nth-child(even) {
    background-color: #141414;
  }
`;
