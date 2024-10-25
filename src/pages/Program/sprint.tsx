import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Sprint = () => {
  const t = useTranslation();

  return (
    <Page title={t("스프린트")}>
      <h1>{t("스프린트")}</h1>
      <p>{t("스프린트는 다음 두 가지 트랙으로 진행됩니다.")}</p>
      <ol>
        <li>{t("프로젝트 리더 트랙")}</li>
        <ul>
          <li>{t("현재 오픈소스 프로젝트를 리딩하고 계신 분")}</li>
          <li>{t("다른 참가자들의 기여를 이끌어주실 수 있는 분")}</li>
          <li>{t("프로젝트 소개와 기여 가이드를 준비해주실 수 있는 분")}</li>
        </ul>
        <li>{t("예비 리더 트랙")}</li>
        <ul>
          <li>{t("향후 오픈소스 프로젝트 리딩에 관심이 있으신 분")}</li>
          <li>{t("프로젝트 리딩 경험을 쌓고 싶으신 분")}</li>
          <li>{t("기여하고 싶은 프로젝트가 있지만 리딩 방법을 고민하시는 분")}</li>
          <li>{t("제가 직접 프로젝트 리딩 경험을 공유하고 함께 방법을 모색해볼 수 있습니다")}</li>
        </ul>
      </ol>
      <br />
      <ul>
        <li>
          {t("일시")}: {t("2024년 11월 2일 (토요일)")}
        </li>
        <li>
          {t("장소")}: {t("강남/서초 인근")} ({t("추후 확정 안내 예정")})
        </li>
      </ul>
      <h3>{t("참여 신청 방법")}</h3>
      <ol>
        <li>{t("이메일")}: program@pycon.kr</li>
        <li>{t("필수 기재사항")}</li>
        <ul>
          <li>{t("참여 희망 프로그램 (프로젝트 리더/예비 리더)")}</li>
          <li>{t("성함")}</li>
          <li>{t("연락처")}</li>
          <li>{t("프로젝트 리더의 경우: 프로젝트 소개 및 준비사항")}</li>
          <li>{t("예비 리더의 경우: 관심있는 프로젝트 분야와 리딩 목표")}</li>
        </ul>
      </ol>
      <p>{t("많은 관심과 참여 부탁드립니다.")}</p>
      <ul>
        <li>{t("문의")}: program@pycon.kr</li>
      </ul>
    </Page>
  );
};

export default Sprint;
