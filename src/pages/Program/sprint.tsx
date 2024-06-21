import React from "react"
import Page from "components/common/Page"
import useTranslation from "utils/hooks/useTranslation";

import { useNavigate } from "react-router";

const TutorialPage = () => {
    const t = useTranslation();
    const navigate = useNavigate();

    const goToForm = () => {
        alert("모집이 곧 시작될 예정입니다. 잠시만 기다려 주세요.")
    }

    return <Page title="스프린트">
        <h1>{t("PyCon Korea 2024 스프린트 진행자 모집")}</h1>
        <span>{t("PyCon Korea 2024에서 새로운 스프린터가 질주하는 데에 도움을 주실 멘토 분들을 모집합니다.")}</span>
        <button className="secondary" style={{fontSize: "small", padding: "4px 8px", marginLeft: "16px"}} onClick={goToForm}>{t("지원하기")}</button>
        <br/><br/>
        <h2>{t("스프린트란?")}</h2>
        <span>{t("PyCon Korea의 스프린트는 오픈소스 프로젝트에 대해 집중적으로 학습하고 개발하는 프로그램입니다. 이 곳에서는 새로운 동료들을 만나고, 오픈소스에서 얻을 수 있는 경험과 지식을 자유롭게 나눌 수 있습니다. ")}</span>
        <br/><br/>
        <h2>{t("스프린트를 처음 진행하시나요?")}</h2>
        <span><a href="https://opensourceevents.github.io/">{t("이 문서")}</a>{t("를 참고해보시는 것은 어떨까요? (Getting your open source project ready for new contributors)")}</span>
        <br/><br/>
        <h2>{t("진행일정 및 장소")}</h2>
        <span>
        {t("일자: 2024년 10월 25일 금요일")} <br />
            {t("장소: 수원 컨벤션센터 3층")}
        </span>
        <br/><br/>
        <h2>{t("진행자 모집 일정")}</h2>
        <span>{t("~ 2024년 07월 31일 수요일 23:59:59 (KST)")}</span>
        <br/><br/>
        <h2>{t("지난 스프린트")}</h2>
        <ul>
            <li><a href="https://2023.pycon.kr/sprint">PyCon Korea 2023</a></li>
            <li><a href="https://archive.pycon.kr/2018/program/sprint/">PyCon Korea 2018</a></li>
            <li><a href="https://us.pycon.org/2019/community/sprints/">PyCon US 2019</a></li>
        </ul>
        <br/><br/>
        <h2>{t("참고사항")}</h2>
        <ul>
            <li>{t("Python을 이용하여야 합니다.")}</li>
            <li>{t("진행자는 파이콘 기간 동안 파이콘 한국 행동강령을 지켜야 합니다.")}</li>
            <li>{t("대한민국 실정법에 위반이 없어야 합니다.")}</li>
            <li>{t("PyCon Korea 2024 컨퍼런스 티켓을 구매하지 않더라도 스프린트 진행이 가능합니다.")}</li>
        </ul>
        <br/><br/>
        <h2>{t("문의")}</h2>
        <span><a href="mailto:program@pycon.kr">program@pycon.kr</a></span>
    </Page>;
}

export default TutorialPage;