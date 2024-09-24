import Page from "components/common/Page";
import React from "react";
import useTranslation from "utils/hooks/useTranslation";

const Health = () => {
  const t = useTranslation();
  return (
    <Page>
      <h1>{t("파이콘 한국 건강 관련 안내")}</h1>
      <p>{t("파이콘 한국에 참여해주신 모든 분들을 위해 안내 말씀드립니다.")}</p>
      <h2>코로나19 관련 안내</h2>
      <p>
        {t("파이콘 한국 2024는 한국 정부의 코로나19 정책을 준수합니다.")}
        <br />
        {t(
          " 코로나19 주요 증상(기침, 발열, 두통 등)이 호전된 후 24시간이 지나지 않은 참가자는 행사에 참가하지 않을 것을 권고합니다."
        )}
        <br />
        {t(
          "코로나19로 인해 행사에 참가하지 못한 경우 티켓은 환불해 드립니다.(진단서 제출 필요) 행사 참가자들은 마스크를 착용할 것을 권장합니다."
        )}
        <br />
        {t("행사 참가자들은 마스크를 착용할 것을 권장합니다.")}
      </p>
    </Page>
  );
};

export default Health;
