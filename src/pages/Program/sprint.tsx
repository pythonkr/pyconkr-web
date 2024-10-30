import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Sprint = () => {
  const t = useTranslation();

  return (
    <Page title={t("스프린트")}>
      <h1>{t("스프린트")}</h1>

      <h2>{t("스프린트란?")}</h2>
      <p>
        {t(
          "스프린트는 오픈소스 프로젝트에 기여하고자 하는 사람들이 한자리에 모여 집중적으로 개발을 진행하는 행사입니다."
        )}{" "}
        {t(
          "주로 파이썬 관련 프로젝트가 중심이 되지만, 스프린트 리더가 있는 경우 다른 언어의 프로젝트도 가능합니다."
        )}{" "}
        {t(
          "새로운 동료들과 만나 공통의 관심사를 나누고, 함께 오픈소스 생태계에 기여할 수 있는 좋은 기회입니다."
        )}
      </p>
      <ul>
        <li>
          {t("일시")}: {t("2024년 11월 2일 (토요일)")} 10:00~18:00
        </li>
        <li>{t("장소")}: 서초역 인근 (NIPA 오픈업 센터)</li>
        <li>
          참가 신청:{" "}
          <a href="https://event-us.kr/pythonkorea/event/94151" target="_blank" rel="noreferrer">
            https://event-us.kr/pythonkorea/event/94151
          </a>
        </li>
      </ul>

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

      <h2>{t("참가 요건")}</h2>
      <p>
        {t("스프린트는 교육 프로그램이 아닌 실제 기여를 목표로 하고 있습니다.")}{" "}
        {t("따라서 파이썬, Git, GitHub에 대한 기본적인 지식이 필요합니다.")}{" "}
        {t("기초 지식이 부족한 경우 사전에 관련 자료를 학습한 후 참여하시는 것을 권장합니다.")}
      </p>
      <h2>{t("참여 시 유의 사항")}</h2>
      <p>
        {t("행동 강령을 준수하며, 협력적인 분위기에서 활동해 주세요.")} (
        <a
          href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html"
          target="_blank"
          rel="noreferrer"
        >
          {t("행동 강령 전문 보러가기")}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ fontSize: "0.8rem", marginLeft: "0.2rem" }}
          />
        </a>
        )
      </p>

      <hr />

      <h2>{t("스프린트 프로젝트/진행자")}</h2>

      <h3>{t("스프린트: CPython (선착순 24명)")}</h3>
      <ul>
        <li>{t("진행자")}: 나동희 (Python Core Developer, 스프린트 리더)</li>
        <li>
          {t("준비 사항")}:{" "}
          <a href="https://devguide.python.org/" target="_blank" rel="noreferrer">
            {t("Python 개발자 가이드")}
          </a>
          를 사전에 읽어 오세요.
        </li>
      </ul>

      <h3>
        {t("추가 스프린트")}: {t("추후 공개 예정")}
      </h3>
      <p>
        {t("추가로 스프린트 리더를 모집하고 있습니다.")}{" "}
        {t("스프린트 리더 역할에 관심이 있으신 분들은 program@pycon.kr로 메일을 보내주세요!")}
      </p>

      <hr />

      <h3>스프린트 예비 리더 프로그램 (선착순 24명)</h3>
      <ul>
        <li>진행자: 배권한 (Python Software Foundation 이사)</li>
        <li>
          오픈소스에 기여하고 싶지만 리딩 경험이 없거나, 기여 방법을 잘 모르는 분들을 위한
          프로그램입니다. 특히, 한국 내에 메인테이너가 없는 프로젝트에 기여하고 싶은 분들을 위해
          자체적으로 기여하는 방법을 함께 찾아보는 기회를 제공합니다. 기여 방법을 잘 모르는 경우에도
          걱정 없이 참여할 수 있으며, 함께 고민하며 방법을 찾아가는 메타적인 성격의 프로그램입니다.
        </li>
      </ul>

      <hr />

      <h2>{t("스프린트 리더 신청 방법")}</h2>
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
