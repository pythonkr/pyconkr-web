import Page from "components/common/Page";
import React from "react";

import useTranslation from "utils/hooks/useTranslation";

const Volunteer = () => {
  const t = useTranslation();

  return (
    <Page>
      <h1>{t("자원봉사자")}</h1>
      <p>
        {t(
          "파이콘 한국 2024에서 행사 진행을 위해 기여해주신 분들입니다. 파이콘 한국에 기여해주셔서 감사합니다."
        )}
        <br />
        {t("(가나다순)")}
      </p>
      <p>
        {["윤우섭", "노관옥", "주환석", "차보경", "주예은", "조준형", "김혜린", "김준우"]
          .sort()
          .join(", ")}
      </p>
    </Page>
  );
};

export default Volunteer;
