import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Tutorial = () => {
  const t = useTranslation();

  return (
    <Page title={t("튜토리얼")}>
      <h1>{t("튜토리얼")}</h1>
      <p>
        {t("파이썬 관련 모든 주제에 대해 튜토리얼을 진행하실 수 있습니다.")}{" "}
        {t("강연자분들께는 소정의 운영비가 지원됩니다.")}
      </p>
      <ul>
        <li>
          {t("일시")}: {t("2024년 11월 9일 (토요일)")}
        </li>
        <li>
          {t("장소")}: {t("한빛리더스홀 (홍대입구역 인근)")}
        </li>
      </ul>
      <h3>{t("참여 신청 방법")}</h3>
      <ol>
        <li>{t("이메일")}: program@pycon.kr</li>
        <li>{t("필수 기재사항")}</li>
        <ul>
          <li>{t("참여 희망 프로그램 (튜토리얼이라고 적어주세요)")}</li>
          <li>{t("성함")}</li>
          <li>{t("연락처")}</li>
          <li>{t("강연 주제 및 간단한 개요, 강의는 3~4시간 분량")}</li>
        </ul>
      </ol>
      <p>{t("많은 관심과 참여 부탁드립니다.")}</p>
      <ul>
        <li>{t("문의")}: program@pycon.kr</li>
      </ul>
    </Page>
  );
};

export default Tutorial;
