import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const NotFound = () => {
  const t = useTranslation();

  return <Page><span>{t("페이지를 찾을 수 없습니다.")}</span></Page>;
};

export default NotFound;
