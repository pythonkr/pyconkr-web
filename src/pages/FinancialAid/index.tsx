import Page from "components/common/Page";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";

const FinancialAid = () => {
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );
  const t = useTranslation();

  // 참가자용 재정 지원에 대한 내용만 담음
  return (
    <Page title="재정 지원">
      {language === "KOR" ? (
        <>
          <h2>개요</h2>
          <p>
            파이콘 한국은 참가하는 &quot;모든&quot; 사람(준비위원회, 자원봉사자, 발표자까지도)이
            티켓을 구매하는 것을 원칙으로 합니다. 그렇게 하여 모든 참가자들이 정당한 가격을 지불하고
            동등한 자격으로 행사의 일부가 되도록 하는 것이 파이콘 한국의 중요한 철학 중 하나입니다.
          </p>
          <p>
            하지만 현실적으로, Everybody Pays라는 파이콘 한국의 철학이 금전적인 장애물이 되어 티켓을
            지불할 수 있는 여유가 있는 사람으로만 참가 대상을 한정하는 것 역시 또다른 차별이 될 수
            있습니다.
          </p>
          <p>
            이런 모순을 해결하기 위해 파이콘 한국에서는 재정 지원 프로그램을 운영하여 금전적인
            이유로 파이콘 한국에 참석하기 힘든 분들에게 제한적이나마 도움을 드리고 있으며,
            준비위원회에서 준비한 예산에 추가로 후원 티켓 판매 차액 전액을 재정 지원 예산으로
            사용하고 있습니다.
          </p>

          <h2>재정 지원 대상</h2>
          <p>
            재정 지원 프로그램은 파이콘 한국 참가에 대한 재정적인 장벽을 최소화하고 파이썬
            커뮤니티가 얻을 수 있는 장점을 최대화하기 위해 운영됩니다.
          </p>
          <p>
            행사 당일에 아래와 같은 서류를 지참하셔서 지원 대상인지 증빙하시면 카드 결제 금액의
            일부를 환불해드리는 방식으로 지원합니다.
          </p>
          <ol>
            <li>초등학생, 중학생, 고등학생</li>
            <ul>
              <li>
                사진이 포함된 청소년증, 학생증, 여권, 주민등록초본(등본) 등 나이를 확인할 수 있는
                서류
              </li>
            </ul>
            <li>대학생, 대학원생</li>
            <ul>
              <li>학생증, 재학증명서 등 현재 재학 중임을 확인할 수 있는 서류</li>
            </ul>
            <li>군인, 공무원</li>
            <ul>
              <li>공무원증, 병적증명서</li>
            </ul>
          </ol>

          <h2>재정 지원 범위</h2>
          <p>컨퍼런스 티켓 가격을 지원합니다.</p>
          <ol>
            <li>초등학생, 중학생, 고등학생: 80% 지원</li>
            <li>대학생, 대학원생: 50% 지원</li>
            <li>군인, 공무원: 50% 지원</li>
          </ol>
          <p>
            * 티셔츠 구매 금액은 지원 대상이 아닙니다.
            <br />
            * 개인 후원 티켓 구매자는 지원 대상이 아닙니다.
            <br />* 뭉치면 할인! 적용된 티켓은 지원 대상이 아닙니다.
          </p>

          <h2>재정 지원 일정</h2>
          <p>
            - 재정 지원 신청 : 2024년 10월 26일 (토) 23시 59분까지 (KST)
            <br />- 재정 지원 금액 지급 (결제금 환불 처리) : 컨퍼런스 종료 후
          </p>

          <ApplyContainer>
            <Button
              onClick={() => {
                window.open("https://forms.gle/xh9HrnJsc3nSZe187");
              }}
            >
              신청하기
            </Button>
          </ApplyContainer>
        </>
      ) : (
        <>
          <h2>Introduction</h2>
          <p>
            The principle in PyCon Korea is &quot;Every&quot; attendee(including organizers,
            volunteers, and even speakers) purchases the ticket. That way, it is one of the
            important philosophies of PyCon Korea to ensure that all participants pay a fair price
            and are part of the event with equal qualifications.
          </p>
          <p>
            However, this principle, &quot;Everybody Pays&quot;, can be another discrimination to
            limit the participants as people who can pay their tickets.
          </p>
          <p>
            In order to solve this contradiction, PyCon Korea operates the [Financial Aid] program
            to help those who are unable to attend the PyCon Korea for financial reasons. In
            addition to the budget prepared by the Organizing Team, we fund all sales from Patron
            tickets.
          </p>

          <h2>Principles and Targets</h2>
          <p>
            Financial aid program is designed to minimize the financial barriers to participation in
            PyCon Korea and maximize the benefits of the Python community.
          </p>
          <p>
            Please bring the following documents with you on the conference day to verify your
            eligibility for the support. Upon verification, a portion of your card payment will be
            refunded.
          </p>
          <ol>
            <li>Elementary, middle, and high school students</li>
            <ul>
              <li>
                Documents that can verify your age, such as a youth ID card with a photo, student ID
                card, passport
              </li>
            </ul>
            <li>Undergraduate and graduate college students</li>
            <ul>
              <li>
                Documents that can prove that you are currently enrolled, such as a student ID
              </li>
            </ul>
            <li>Military, civil servants</li>
            <ul>
              <li>Civil Servant ID, Certificate of Military Service</li>
            </ul>
          </ol>

          <h2>Coverage</h2>
          <p>Support conference ticket pricing.</p>
          <ol>
            <li>Elementary, middle, and high school students: 80% support</li>
            <li>Undergraduate and graduate college students: 50% support</li>
            <li>Military, civil servants: 50% support</li>
          </ol>
          <p>
            * The purchase amount of T-shirts is not eligible for support.
            <br />
            * Patron ticket purchasers are not eligible for support.
            <br />* Group discount ticket purchasers are not eligible for support.
          </p>

          <h2>Schedule</h2>
          <p>
            - Financial aid application period : Until 2024.10.26. (Sat) 23:59 (KST)
            <br />- Payment of financial aid amount (refund of payment) : After the conference ends
          </p>

          <ApplyContainer>
            <Button
              onClick={() => {
                window.open("https://forms.gle/xh9HrnJsc3nSZe187");
              }}
            >
              Apply
            </Button>
          </ApplyContainer>
        </>
      )}
    </Page>
  );
};

export default FinancialAid;

const ApplyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 17rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: #b0a8fe;
  color: #141414;
  font-size: 0.75rem;
`;
