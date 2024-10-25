import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Sprint = () => {
  const t = useTranslation();

  return (
    <Page title={t("스프린트")}>
      <h1>{t("스프린트")}</h1>
    </Page>
  );
};

export default Sprint;
