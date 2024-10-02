import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import styled from "styled-components";
import Page from "components/common/Page";
import useIsMobile from "utils/hooks/useIsMobile";
import Collapse from "components/common/Collapse";
import { Link } from "react-router-dom";
import useTranslation from "utils/hooks/useTranslation";
import SponsorLevelList from "./SponsorLevelList";

const SponsorPage = () => {
  const t = useTranslation();
  const isMobile = useIsMobile();
  return (
    <Page title="후원하기">
      <Container>
        <Vertical>
          <img className="sponsor-logo" src="/images/sponsor_logo_lg.png" alt="sponsor_logo" />
          <span className="medium-text peach-puzz">2024.05.27 - 2024.09.30</span>
          <Vertical style={{ paddingTop: "5rem" }}>
            <a target="_blank" rel="noreferrer" href="https://forms.gle/CTt3CNscaRTdfX7s7">
              <Button>{t("후원하기", "2")}</Button>
            </a>
            <a target="_blank" rel="noreferrer" href="/파이콘 한국 2024 후원사 가이드.pdf" download>
              <Button>{t("후원사 가이드 다운로드")}</Button>
            </a>
            <span className="medium-text white">
              {t("후원 관련 문의")}:{" "}
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
          <H1>{t("파이콘 한국 후원의 의미")}</H1>
          <H3>{t("파이콘 한국은?")}</H3>
          <H6 style={{ width: "50%" }}>
            {t(
              "파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리 개발자 대상 행사로 오픈소스 프로그래밍 언어인 파이썬의 저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다."
            )}
          </H6>
          <H3>{t("비영리 행사")}</H3>
          <H6 style={{ width: "50%" }}>
            {t(
              "파이콘 한국의 발표자 및 튜토리얼 진행자를 포함, 자원봉사자와 준비위원회 담당자 등 모든 인원이 금전적 이득 없이 행사를 준비하고 운영해 나갑니다."
            )}
          </H6>
          <H3>{t("커뮤니티에 기여")}</H3>
          <H6 style={{ width: "50%" }}>
            {t(
              "이에 파이콘 한국에의 후원은 국내 오픈소스 커뮤니티와 파이썬 커뮤니티에 대한 가장 좋은 기여 방법이며 여러 우수한 개발자들과의 만남을 가지실 수 있는 기회입니다."
            )}
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
          <H1>{t("파이콘 한국 2024")}</H1>
          <H6 style={{ marginBottom: "2rem" }}>
            {t(
              "2014년, 한국에서 첫 파이콘이 열린 이후로 파이써니스타들은 파이콘이라는 만남의 장에 파이썬이라는 하나의 공통점으로 뭉쳐 각자의 순간들을 나누고, 새로운 순간들을 함께 만들어왔습니다."
            )}
            <br />
            {t(
              "여러분의 소중한 순간이 모여 파이콘은 점점 성장해올 수 있었고, 어느덧 10번째 파이콘 한국을 앞두고 있습니다."
            )}
            <br />
            {t(
              "파이썬과 행복했던 순간들, 파이썬이기에 가능했던 순간들, 여러분이 소중한 순간순간들을 가지고 모여 함께 새로운 순간들을 만들어 내길 바랍니다."
            )}
          </H6>
          <Link to="/previous-pyconkr">
            <Button>{t("지난 파이콘 보러가기")}</Button>
          </Link>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>{t("후원사 신청 절차")}</H1>
          <Grid>
            <GuideCard>
              <H3>01</H3>
              <H3>{t("후원사 신청")}</H3>
              <H6>
                {t(
                  "본 페이지 상단의 ‘후원사로 참여하기' 버튼을 통해 후원에 필요한 정보를 입력해주세요."
                )}{" "}
                {t(
                  "입력해주신 정보는 내부 검토를 거치며, 일부 항목의 경우수정을 요청드릴 수 있습니다."
                )}
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>02</H3>
              <H3>{t("전자 계약서 서명")}</H3>
              <H6>
                {t(
                  "후원사 신청서에 대한 검토가 완료되면 후원사 계약을 위한 전자 계약서가 발송됩니다."
                )}
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>03</H3>
              <H3>{t("후원금 입금")}</H3>
              <H6>
                {t("계약서 서명을 완료하신 이후 2주 이내로 후원금 입금을 요청드립니다.")}{" "}
                {t(
                  "하단에 표기된 후원 금액은 부가세가 포함되지 않은 금액으로, 부가세 10%를 가산하여 입금해주셔야 합니다."
                )}
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>04</H3>
              <H3>{t("후원사 확정")}</H3>
              <H6>
                {t(
                  "후원 금액이 정상적으로 입금된 것이 확인된 즉시, 파이콘 한국 2024의 후원사로 확정됩니다."
                )}
              </H6>
            </GuideCard>
          </Grid>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>{t("후원사 혜택")}</H1>
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            scrollbar={true}
            spaceBetween={20}
            modules={[Scrollbar]}
            loop={true}
          >
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("후원사 부스")}</H3>
                <H6>
                  {t(
                    "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다."
                  )}
                </H6>
                <BenefitImage src="/images/sponsor/booth.jpg" alt="booth" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("후원사 세션")}</H3>
                <H6>
                  {t(
                    "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다."
                  )}
                </H6>
                <BenefitImage src="/images/sponsor/session.jpg" alt="session" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("로고 노출")}</H3>
                <H6>
                  {t(
                    "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다."
                  )}
                </H6>
                <BenefitImage src="/images/sponsor/display_logo.jpg" alt="display_logo" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("홍보 영상")}</H3>
                <H6>
                  {t(
                    "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다."
                  )}
                </H6>
                <BenefitImage src="/images/sponsor/session.jpg" alt="video" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("티켓 지원")}</H3>
                <H6>
                  {t("파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다.")}{" "}
                  {t("티켓 개수는 후원 등급 별 상이합니다.")}
                </H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="ticket" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("증정품 지급")}</H3>
                <H6>{t("파이콘 한국에서 후원사의 굿즈 등 소정의 증정품을 전달할 수 있습니다.")}</H6>
                <BenefitImage src="/images/sponsor/ticket_support.jpg" alt="merchandise" />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("후원 증서")}</H3>
                <H6>{t("후원에 대한 감사의 마음을 담아 파이콘 한국 후원인증서를 드립니다.")}</H6>
                <BenefitImage
                  src="/images/sponsor/CertificateOfSponsorship.png"
                  alt="certificateOfSponsorship"
                />
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>
              <BenefitCard>
                <H3>{t("네트워킹 공간")}</H3>
                <H6>{t("참가자들과 자유롭게 네트워킹 할 수 있는 공간을 제공합니다.")}</H6>
                <BenefitImage src="/images/sponsor/OpenSpace.png" alt="OpenSpace" />
              </BenefitCard>
            </SwiperSlide>
          </Swiper>
        </Vertical>
      </Container>
      <SponsorLevelList />
      <Container>
        <Vertical>
          <H1>FAQ</H1>
          <Vertical>
            <H3>{t("후원사 신청")}</H3>
            <Faq>
              <Collapse
                order={1}
                header={t("후원사 신청시 여러 후원 등급에 중복 신청도 가능한가요?")}
                content={
                  t("아니요, 중복 신청은 불가능합니다.") +
                  " " +
                  t(
                    "후원사 선정은 입금순으로 이루어지기 때문에 후원하고자 하시는 등급에 빠르게 신청하시는 걸 추천드립니다."
                  ) +
                  " " +
                  t(
                    "일부 후원 등급의 경우에는 후원사의 수가 정해져있기 때문에 조기 마감될 수 있습니다."
                  ) +
                  " " +
                  t(
                    "해당 후원 등급의 잔여 후원사 수는 추후 후원사 페이지에서 확인하실 수 있습니다."
                  )
                }
              />
              <Collapse
                order={2}
                header={t("후원사 선정 방법이 궁금합니다. 선착순인가요?")}
                content={t(
                  "후원사 등록 과정이 정상적으로 등록되었다는 가정 하에 선착순으로 이뤄집니다."
                )}
              />
              <Collapse
                order={3}
                header={t("후원사 등록이 정상적으로 진행되었는지 확인 방법이 있나요?")}
                content={t(
                  "입금이 완료되면 입금 확인 메일과 함께 정식 후원사 확정 메일을 보내드립니다."
                )}
              />
            </Faq>
          </Vertical>
          <Vertical>
            <H3>{t("후원금")}</H3>
            <Faq>
              <Collapse
                order={1}
                header={t("후원금은 어디에 쓰이나요?")}
                content={
                  t("행사 운영비로 사용되게 됩니다.") +
                  " " +
                  t(
                    "장소대여비, 부스 운영비, 각종 프로그램 진행비, 해외 스피커 항공료 및 호텔, 스피커와 운영팀 식사, 비디오녹화, 기념 티셔츠 등의 제작에 사용됩니다."
                  )
                }
              />
              <Collapse
                order={2}
                header={t("세금 계산서 발행이 가능한가요?")}
                content={t("네, 사단법인 파이썬사용자모임 명의로 세금계산서 발행이 가능합니다.")}
              />
              <Collapse
                order={3}
                header={t("해당 금액은 VAT가 포함된 금액인가요?")}
                content={t(
                  "해당 금액은 부가세가 포함되지 않은 금액이며, 해당 항목들에 대해서도 전자 세금계산서 발급될 예정입니다."
                )}
              />
            </Faq>
          </Vertical>
          <Vertical>
            <H3>{t("등급 & 부스")}</H3>
            <Faq>
              <Collapse
                order={1}
                header={t("부스 위치는 어떻게 결정되나요?")}
                content={
                  t("준비위에서 신청순으로 배정합니다.") +
                  " " +
                  t("이후 후원사들 간에 협의하여 바꾸시는 것은 가능합니다.") +
                  " " +
                  t("바꾸신 경우에는 준비위에 알려주시기 바랍니다.")
                }
              />
              <Collapse
                order={2}
                header={t("부스 운영 인력은 컨퍼런스 티켓이 필요한가요?")}
                content={
                  t(
                    "부스 운영 인력은 티켓이 필요하지 않으며 별도의 식별 가능한 표식을 제공해 드릴 예정입니다."
                  ) +
                  " " +
                  t("다만 부스 운영 인력은 컨퍼런스와 세션 등을 참가할 수 없습니다.")
                }
              />
              <Collapse
                order={3}
                header={t("부스 운영 인력에도 제한이 있나요?")}
                content={
                  t("아니요, 별도의 인원 제한은 없습니다.") +
                  " " +
                  t("다만 동시에 부스에 있는 운영 인력의 수를 준비위와 미리 협의하셔야 합니다.")
                }
              />
              <Collapse
                order={4}
                header={t("부스에서 제공할 수 있는 물품에 제한이 있나요?")}
                content={
                  t("아니요, 행동강령을 위반하지 않는 물품이라면 제한이 없습니다.") +
                  " " +
                  t("일반적으로는 티셔츠, 리딤코드, 문구류, 뱃지, 스티커 등을 제공합니다.")
                }
              />
              <Collapse
                order={5}
                header={t("후원사 세션의 발표자도 컨퍼런스 티켓을 구매해야 하나요?")}
                content={
                  t("네, 모든 참가자는 컨퍼런스 티켓을 소지하셔야 합니다.") +
                  " " +
                  t("후원사에게 혜택으로 제공되는 컨퍼런스 티켓을 활용하실 수 있습니다.")
                }
              />
              <Collapse
                order={6}
                header={t("홍보 영상은 어느 시점에 노출되는 건가요?")}
                content={t("후원사 홍보 영상은 세션 중간 중간 여유 시간에 노출 됩니다.")}
              />
            </Faq>
          </Vertical>
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
