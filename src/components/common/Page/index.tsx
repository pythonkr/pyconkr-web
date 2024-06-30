import React from "react";
import "./style.scss";
import { Helmet } from "react-helmet";
import useTranslation from "utils/hooks/useTranslation";

const Page = ({ children, title }: React.HTMLAttributes<HTMLDivElement> & { title?: string }) => {
  const t = useTranslation();

  return (
    <div className="cm-page">
      <Helmet title={!title ? `${t("파이콘 한국")} 2024` : `${t("파이콘 한국")} 2024 | ${title}`} />
      {children}
    </div>
  );
};

export default Page;
