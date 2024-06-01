import React from "react"
import Page from "components/common/Page"
import useTranslation from "utils/hooks/useTranslation";

const TutorialPage = () => {
    const t = useTranslation();

    return <Page title="튜토리얼">
        <h1>{t("PyCon Korea 2024 튜토리얼 진행자 모집")}</h1>
        <span>{t("PyCon Korea 2024 참가자 분들께 새로운 기술, 라이브러리를 전수해주실 진행자 분들을 모집합니다.")}</span>
        <button className="secondary" style={{fontSize: "small", padding: "4px 8px"}}>{t("지원하기")}</button>
        <br/><br/>
        <h2>{t("튜토리얼이란?")}</h2>
        <span>{t("PyCon Korea의 튜토리얼은 파이썬에 대한 새로운 기술이나 라이브러리를 먼저 경험하신 분들로부터 직접 배울 수 있는 프로그램입니다. 이 곳에서는 현장에서 질문하고 해결하는 과정을 통해 해당 기술에 대해 깊이 있는 지식을 습득하게 됩니다.")}</span>
        <br/><br/>
        <h2>{t("튜토리얼을 처음 진행하시나요?")}</h2>
        <span><a href="https://us.pycon.org/2024/speaking/tutorials/samples/">{t("이 튜토리얼 예시")}</a>{t("를 참고해보시는 것은 어떨까요?")}</span>
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
        <h2>{t("지난 튜토리얼")}</h2>
        <ul>
            <li><a href="https://2023.pycon.kr/tutorials">PyCon Korea 2023</a></li>
            <li><a href="https://archive.pycon.kr/2018/program/tutorial/">PyCon Korea 2018</a></li>
            <li><a href="https://us.pycon.org/2019/schedule/tutorials/">PyCon US 2019</a></li>
        </ul>
        <br/><br/>
        <h2>{t("참고사항")}</h2>
        <ul>
            <li>{t("Python을 이용하여야 합니다.")}</li>
            <li>{t("진행자는 파이콘 기간 동안 파이콘 한국 행동강령을 지켜야 합니다.")}</li>
            <li>{t("대한민국 실정법에 위반이 없어야 합니다.")}</li>
            <li>{t("PyCon Korea 2024 컨퍼런스 티켓을 구매하지 않더라도 튜토리얼 진행이 가능합니다.")}</li>
        </ul>
        <br/><br/>
        <h2>{t("문의")}</h2>
        <span>program@pycon.kr</span>
    </Page>;
}

export default TutorialPage