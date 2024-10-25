import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Tutorial = () => {
  const t = useTranslation();

  return (
    <Page title={t("튜토리얼")}>
      <h1>{t("튜토리얼")}</h1>
    </Page>
  );
};

export default Tutorial;
