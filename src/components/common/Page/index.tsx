import React from "react";
import "./style.scss";

const Page = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="cm-page">{children}</div>;
};

export default Page;
