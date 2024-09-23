import React, { useEffect } from "react";
import Page from "components/common/Page";

const CocPage = () => {
  useEffect(() => {
    window.location.href =
      "https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html";
  }, []);
  return <Page title="Code Of Conduct"></Page>;
};

export default CocPage;
