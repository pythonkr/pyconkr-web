import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import useIsMobile from "utils/hooks/useIsMobile";
import styled from "styled-components";

const PosterSession = () => {
  const t = useTranslation();
  const isMobile = useIsMobile();
  const registerFormUrl = "https://forms.gle/yjhuUZHR9tR3AR7d9";

  return (
    <Page>
      <h1>{t("포스터 세션이란?")}</h1>
      <p>
        {t(
          "발표자들의 포스터를 특정 장소에 계속 설치해 두고, 지정된 시간에는 컨퍼런스 참석자들과 발표자들이 포스터에 대해 자유롭게 의견을 교류하는 자리입니다."
        )}
      </p>
      <h1>{t("언제 진행하나요?")}</h1>
      <p>
        {t("포스터 세션은 토~일 2일 운영됩니다.")}
        <br />
        {t("오후 세션 시작 30분 전 점심시간 / 매 쉬는 시간마다 포스터 세션이 운영됩니다.")}
      </p>
      <h1>{t("포스터 세션 신청하기")}</h1>
      <p>
        {t("신청 링크: ")}
        <a href={registerFormUrl}>{registerFormUrl}</a>
        <br />
        {t("신청 기한: ")} {t("2024년 10월 18일 (금) 23:59분 까지")}
      </p>
      <h1>{t("미리보는 포스터 세션")}</h1>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        scrollbar={true}
        spaceBetween={20}
        modules={[Scrollbar]}
        loop={true}
      >
        <SwiperSlide>
          <SampleImage src="/images/poster-session/posterSession4.jpg" alt="포스터 세션 예시 4" />
        </SwiperSlide>
        <SwiperSlide>
          <SampleImage src="/images/poster-session/posterSession1.jpg" alt="포스터 세션 예시 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SampleImage src="/images/poster-session/posterSession2.jpg" alt="포스터 세션 예시 2" />
        </SwiperSlide>
        <SwiperSlide>
          <SampleImage src="/images/poster-session/posterSession3.jpg" alt="포스터 세션 예시 3" />
        </SwiperSlide>
      </Swiper>
      <Grid></Grid>
    </Page>
  );
};

export default PosterSession;

const SampleImage = styled.img`
  border-radius: 1rem;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1.5rem;
  margin-top: 2.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
