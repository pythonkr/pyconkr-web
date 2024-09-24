import { SponsorAPI } from "api";
import Page from "components/common/Page";
import { Patron } from "models/sponsor";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";

const PatronList = () => {
  const t = useTranslation();
  const [patrons, setPatrons] = useState<Patron[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    SponsorAPI.listPatrons()
      .then(setPatrons)
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Page>
        <h1>{t("개인 후원자")}</h1>
        <p>{t("불러오는 중입니다...")}</p>
      </Page>
    );

  return (
    <Page>
      <h1>{t("개인 후원자")}</h1>
      <p>
        {t("파이콘 한국 2024를 후원해주신 개인 후원자분들의 명단입니다.")}
        <br />
        {t("후원해주셔서 감사합니다.")}
      </p>

      {patrons.map((p, idx) => (
        <PatronContainer key={`${p.name}-${idx}`}>
          <h4>{p.name}</h4>
          <div>{p.message}</div>
        </PatronContainer>
      ))}
    </Page>
  );
};

export default PatronList;

const PatronContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem 0;

  h4 {
    color: #febd99;
    margin-bottom: 0.2rem;
  }

  & > div {
    margin-bottom: 0.3rem;
    color: var(--pico-h3-color);
    font-size: 0.8rem;
    font-weight: bold;
    min-height: 1rem;
  }

  @media only screen and (max-width: 809px) {
    p {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
