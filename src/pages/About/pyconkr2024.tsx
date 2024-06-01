import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Pyconkr2024 = () => {
  const t = useTranslation();
  return (
    <Page>
      <h1>{t("파이콘 한국이란")}</h1>
      <p>
        {t(
          "파이콘은 세계 각국의 파이썬 프로그래밍 언어 커뮤니티에서 주관하는 비영리 컨퍼런스입니다. 한국에서는 처음으로 열린 파이콘 한국 2014를 시작으로 파이콘 한국 준비위원회는 건강한 국내 파이썬 생태계에 지속적인 보탬이 되고자, 커뮤니티 멤버들의 자발적인 봉사로 운영되고 있습니다."
        )}
      </p>
      <br />
      <br />
      <h2>Pythonic Moments</h2>
      <p>
        {t("2014년, 한국에서 첫 파이콘이 열린 이후로")}
        <br />
        <br />
        {t(
          "파이써니스타들은 파이콘이라는 만남의 장에 파이썬이라는 하나의 공통점으로 뭉쳐 각자의 순간들을 나누고, 새로운 순간들을 함께 만들어왔습니다."
        )}
        <br />
        <br />
        {t(
          "여러분의 소중한 순간이 모여 파이콘은 점점 성장해올 수 있었고, 어느덧 10번째 파이콘 한국을 앞두고 있습니다."
        )}
        <br />
        <br />
        {t(
          "파이썬과 행복했던 순간들, 파이썬이기에 가능했던 순간들 여러분이 소중한 순간순간들을 가지고 모여 함께 새로운 순간들을 만들어 내길 바랍니다."
        )}
        <br />
        <br />
        {t("2024년 10월 파이콘에서 만나요!")}
        <br />
        <br />
      </p>
      <h2>파이콘은 다른 개발자 행사와 무엇이 다른가요?</h2>
      <p>
        {t(
          "파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리 개발자 대상 행사로, 타 기업 및 기관에서 개최하는 개발자 행사와는 성격이 다릅니다. 발표자와 튜토리얼 진행자를 포함하여, 자원봉사자와 준비위원회 담당자 등 모든 인원이 금전적 이득 없이 순수히 오픈소스 프로그래밍 언어인 파이썬의 저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다."
        )}
      </p>
      <br />
      <br />
      <h1>후원사 목록</h1>
    </Page>
  );
};

export default Pyconkr2024;
