import React from "react";
import "./style.scss";
import { Helmet } from "react-helmet";

const Page = ({ children, title }: React.HTMLAttributes<HTMLDivElement> & { title?: string }) => {
  return (
    <div className="cm-page">
      <Helmet title={!title ? "파이콘 한국 2024" : `파이콘 한국 2024 | ${title}`} />
      {children}
    </div>
  );
};

export default Page;
