import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Cfp = () => {
  const t = useTranslation();

  return (
    <Page>
      <h1>{t("발표 제안하기")}</h1>
      <ul>
        <li>2차 모집: 6/1~6/22</li>
        <li>선정 안내: ~7/19</li>
        <li>
          발표 신청:{" "}
          <a href="https://forms.gle/qF4enrUpHKrUeAgAA">https://forms.gle/qF4enrUpHKrUeAgAA</a>
        </li>
        <li>
          문의:{" "}
          <a href="mailto:session@pycon.kr">session@pycon.kr</a>
        </li>
      </ul>
    </Page>
  );
};

export default Cfp;
