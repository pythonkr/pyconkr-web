import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import styled from "styled-components";
import Page from "components/common/Page";

const SponsorPage = () => {
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
              후원 관련 문의: <a href="mailto:sponsor@pycon.kr">sponsor@pycon.kr</a>
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
            파이콘 한국은 커뮤니티 주관으로 이뤄지는
            <br /> 비영리 개발자 대상 행사로 오픈소스 프로그래밍 언어인 파이썬의
            <br /> 저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다.
          </H6>
          <H3>비영리 행사</H3>
          <H6>
            파이콘 한국의 발표자 및 튜토리얼 진행자를 포함,
            <br /> 자원봉사자와 준비위원회 담당자 등 모든 인원이
            <br /> 금전적 이득 없이 행사를 준비하고 운영해 나갑니다.
          </H6>
          <H3>커뮤니티에 기여</H3>
          <H6>
            이에 파이콘 한국에의 후원은 국내 오픈소스 커뮤니티와
            <br /> 파이썬 커뮤니티에 대한 가장 좋은 기여 방법이며 여러 우수한
            <br /> 개발자들과의 만남을 가지실 수 있는 기회입니다.
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
            2014년, 한국에서 첫 파이콘이 열린 이후로 파이써니스타들은
            <br /> 파이콘이라는 만남의 장에 파이썬이라는 하나의 공통점으로 뭉쳐
            <br /> 각자의 순간들을 나누고, 새로운 순간들을 함께 만들어왔습니다.
            <br />
            <br /> 여러분의 소중한 순간이 모여 파이콘은 점점 성장해올 수 있었고,
            <br /> 어느덧 10번째 파이콘 한국을 앞두고 있습니다.
            <br />
            <br /> 파이썬과 행복했던 순간들, 파이썬이기에 가능했던 순간들,
            <br /> 여러분이 소중한 순간순간들을 가지고 모여
            <br /> 함께 새로운 순간들을 만들어 내길 바랍니다.
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
                본 페이지 상단의 ‘후원사로 참여하기' 버튼을
                <br /> 통해 후원에 필요한 정보를 입력해주세요.
                <br /> 입력해주신 정보는 내부 검토를 거치며,
                <br /> 일부 항목의 경우수정을 요청드릴 수 있습니다.
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>02</H3>
              <H3>전자 계약서 서명</H3>
              <H6>
                후원사 신청서에 대한 검토가 완료되면
                <br /> 후원사 계약을 위한 전자 계약서가 발송됩니다.
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>03</H3>
              <H3>후원금 입금</H3>
              <H6>
                계약서 서명을 완료하신 이후 2주 이내로 후원금 입금을
                <br /> 요청드립니다. 하단에 표기된 후원 금액은
                <br /> 부가세가 포함되지 않은 금액으로, 부가세 10%를
                <br /> 가산하여 입금해주셔야 합니다.
              </H6>
            </GuideCard>
            <GuideCard>
              <H3>04</H3>
              <H3>후원사 확정</H3>
              <H6>
                후원 금액이 정상적으로 입금된 것이 확인된 즉시,
                <br /> 파이콘 한국 2024의 후원사로 확정됩니다.
              </H6>
            </GuideCard>
          </Grid>
        </Vertical>
      </Container>
      <Container>
        <Vertical>
          <H1>후원사 혜택</H1>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            loop={true}
          >
            <SwiperSlide>
              <BenefitCard>
                <H3>후원사 부스</H3>
                <H6>
                  후원사만의 공간에서 개발자 채용,
                  <br /> 회사 또는 서비스 홍보, 코딩 챌린지,
                  <br /> 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.
                </H6>
              </BenefitCard>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
          <H1>asdf</H1>
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
`;

const H3 = styled.h3`
  margin-top: 1.5rem;
  font-size: 24px;
  color: #b0a8fe;
`;

const H6 = styled.h6`
  margin-top: 1rem;
  font-size: 16px;
  text-align: center;
  color: #ebebeb;
  line-height: 24px;
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
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.5rem;
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
