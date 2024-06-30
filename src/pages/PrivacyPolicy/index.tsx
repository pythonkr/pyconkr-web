import Page from "components/common/Page";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const PrivacyPolicy = () => {
  const language = useSelector((state: RootState) => state.core.language);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (language === "KOR")
    return (
      <Page title="개인 정보 처리 방침">
        <h1>개인 정보 처리 방침</h1>
        <h2>0. 개인 정보 처리 방침이란?</h2>
        <p>
          "개인정보처리방침" 이란 모든 이용자의 소중한 개인 정보를 보호함으로써 안심하고 컨텐츠를
          제공받고 서비스를 사용할 수 있도록 &lt;사단법인 파이썬사용자모임&gt;(이하 ‘회사')가
          준수해야 할 지침을 의미합니다.
        </p>

        <h2>1. 개인 정보 수집 항목과 목적</h2>
        <ol>
          <li>
            회원가입 - 서비스 내에서 가입의사 확인, 본인 확인, 행사 안내와 같은 컨텐츠 제공, 티켓
            결제를 위해 필수로 이메일과 이름을 수집합니다.
          </li>
          <li>
            발표자 제안 - 본인 확인을 위해 이메일, 이름, 영문 이름이 필수 정보로 요구되고 행사
            참가자들을 위해 웹사이트/행사장 내 정보 안내로 사용이 될 예정입니다. 전화번호, 소속은
            선택적으로 입력합니다. 전화번호는 행사 준비를 위해 파이콘 한국 준비위원회가 연락하기
            위해 사용됩니다.
          </li>
          <li>
            후원사 신청 - 본인 확인을 위해 이메일, 이름, 영문 이름이 필수 정보로 요구되고 후원 관련
            논의를 위한 후원사 담당자의 이메일과 전화번호 이름이 요구됩니다.
          </li>
        </ol>
        <p>
          입력해주신 개인 정보는 언제든지 수정이 가능하며 절대 이용자의 동의 없이 제3자에게 개인
          정보가 제공되거나 따로 사용되는 일은 없을 것이며 회사는 개인 정보가 포함된 컨텐츠를 공유할
          때 세심한 주의를 기울이도록 하겠습니다. 각 항목에 포함되는 이용자는 각 항목의 필수로
          요구되는 데이터를 제출하여야지만 서비스 가입 또는 제안이 가능하며 정보가 제출되면 개인
          정보 수집에 동의한 것으로 간주됩니다.
        </p>

        <h2>2. 개인 정보 자동 수집 - 쿠키</h2>
        <p>
          각 이용자에게 맞춤 컨텐츠와 자동 로그인과 같은 편한 서비스를 제공하기 위해 쿠키를 사용하고
          있습니다. 쿠키에는 개인을 식별하는 정보는 저장되지 않으며, 이용자는 쿠키 설치에 대한
          선택권을 가지고 있습니다. 원치 않을 경우 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든
          쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수도
          있습니다. 다만, 쿠키 설치를 거부할 경우 맞춤 컨텐츠 제공에 어려움이 있을 수 있습니다.
        </p>

        <h2>3. 개인 정보의 안전성 확보 조치</h2>
        <ol>
          <li>
            개인 정보를 취급하는 담당자를 최소한으로 한정해 관리하고 있습니다. 담당자는 접근 통제를
            위하여 필요한 조치를 하고 있으며 침입 차단 시스템을 이용하여 외부로부터의 무단 접근을
            통제하고 있습니다.
          </li>
          <li>
            해킹이나 컴퓨터 바이러스 등에 의한 개인 정보 유출 및 훼손을 막기 위하여 보안 프로그램을
            설치하고 주기적인 갱신/점검을 하며 기술적/물리적으로 감시 및 차단하고 있습니다.
          </li>
        </ol>

        <h2>4. 개인 정보의 파기</h2>
        <p>
          이용자가 직접 입력한 모든 개인 정보는 해당 연도의 행사 종료일로부터 2년이 되는 시점
          지체없이 모두 파기합니다. 또는 이용자가 탈퇴를 원하여 직접 연락을 주는 경우 마찬가지로
          모든 개인 정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 복구할 수 없도록 안전하게
          삭제하고 인쇄물의 경우 분쇄하거나 소각을 통하여 파기합니다.
        </p>
        <p>단, 관련 법령에 따라 보존할 필요가 있는 정보는 일정 기간 동안 보관합니다.</p>
        <ol>
          <li>신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년</li>
          <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
          <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
        </ol>

        <h2>5. 개인 정보 보호 책임자</h2>
        <p>
          개인 정보 처리에 관한 업무를 총괄해서 책임지고, 개인 정보 처리와 관련한 정보주체의
          불만처리 및 피해구제 등을 위하여 아래와 같이 개인 정보 보호 책임자를 지정하고 있습니다.
          이용자는 개인 정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인 정보 보호
          책임자에게 직접 문의하실 수 있습니다.
        </p>
        <p>
          담당자: 배권한
          <br />
          연락처: pyconkr@pycon.kr
        </p>

        <h2>6. 개인 정보 처리 방침 변경</h2>
        <p>
          위 개인정보처리방침이 변경되는 경우 변경 사항을 게시하며, 변경된 개인 정보 처리 방침은
          게시한 날로부터 7일 후부터 효력이 발생합니다. 다만, 수집하는 개인 정보의 항목과 같이
          이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 미리 알려드리겠습니다.
        </p>
      </Page>
    );
  else
    return (
      <Page title="Privacy Policy">
        <h1>Privacy Protection Policy</h1>
        <h2>0. What is Privacy Protection Policy?</h2>
        <p>
          'Privacy Protection Policy' means the guidelines that Python User Group Korea (hereinafter
          referred to as 'Company') must comply with in order to safeguard the valuable personal
          information of all users and to use contents and services with peace of mind.
        </p>

        <h2>1. Items and Purpose of Collecting Personal Information</h2>
        <ol>
          <li>
            Membership - Collect emails and names as essential for providing content such as sign-up
            confirmation, identity verification, event guide, and ticket payment within the service.
          </li>
          <li>
            Speaker Suggestion - Information such as e-mail, name, English name are required in
            order to confirm the identity of the person. It will be used as a guide on
            web-site/event for participants. Phone number, and affiliation are optional. It is used
            to contact speaker by PyCon Korea Organizing Team.
          </li>
          <li>
            Sponsor Application - Information such as e-mail, name, English name are required in
            order to confirm the identity of the person. Additionally Sponsor manager's email and
            phone number are required in order to discuss about sponsorship.
          </li>
        </ol>
        <p>
          Personal information that you provide may be modified at any time and personal information
          will not be provided or used separately from third parties without the consent of the user
          and we will pay close attention when sharing contents containing personal information. The
          user included in each case must submit required data as requested for each item in order
          to subscribe the service or suggest the speaker the service can be subscribed or
          suggested, and when the information is submitted, the user is considered to have consented
          to the collection of personal information.
        </p>

        <h2>2. Automatic Collection of Personal Information - Cookies</h2>
        <p>
          We use cookies to provide convenient services such as personalized content and automatic
          sign-in to each user. Cookies do not store any personally identifiable information, and
          you have the option of installing cookies. If you do not want to, you can allow all
          cookies by setting options in your web browser, check each time a cookie is saved, or
          refuse to save all cookies. However, if you refuse to install cookies, it may be difficult
          to provide custom content.
        </p>

        <h2>3. Measures to Ensure the Security of Personal Information</h2>
        <ol>
          <li>
            We manage the person in charge of personal information to the minimum. The person in
            charge carries out necessary measures for access control and controls the unauthorized
            access from outside using the intrusion prevention system.
          </li>
          <li>
            In order to prevent leakage and damage of personal information by hacking or computer
            virus, security program is installed, periodically renewed / checked, technically and
            physically monitored and blocked.
          </li>
        </ol>

        <h2>4. Measures to Ensure the Security of Personal Information</h2>
        <p>
          All personal information entered by the user will be destroyed without delay in 2 years
          from the end of the event in that year. Similarly, if a user wants to leave and directly
          contacts the company, all personal information will be destroyed as well. Information in
          the form of an electronic file is safely deleted so that it can not be recovered, and
          destroyed by crushing or incineration in the case of printed matter.
        </p>
        <p>
          However, information required to be preserved pursuant to relevant laws and regulations
          will be retained for a certain period of time.
        </p>
        <ol>
          <li>Records on the collection, processing, and use of credit information: 3 Years</li>
          <li>Records of consumer complaints or disputes: 3 Years</li>
          <li>Record of payment and goods supply: 5 Years</li>
        </ol>

        <h2>5. Privacy Officer</h2>
        <p>
          We are responsible for the handling of personal information, and we have designated the
          person responsible for personal information protection as follows in order to handle
          complaints and damage remedies related to personal information processing. You can contact
          the person in charge of personal information protection directly about personal
          information protection inquiries, complaints handling and damage relief.
        </p>
        <p>
          Privacy Officer: Kwonhan Bae
          <br />
          Contact: pyconkr@pycon.kr
        </p>

        <h2>6. Change of Personal Information Processing Policy</h2>
        <p>
          If the above privacy policy changes, we will post the change and the changed privacy
          policy will take effect seven days after the date of posting. However, we will notify you
          at least 30 days in advance of any significant change in your rights, such as the items of
          personal information you collect.
        </p>
      </Page>
    );
};

export default PrivacyPolicy;
