import Page from "components/common/Page";
import { Patron } from "models/sponsor";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";

const PatronList = () => {
  const t = useTranslation();
  const [patrons, setPatrons] = useState<Patron[]>([
    {
      name: "김파이썬",
      message:
        "후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다! 후원 합니다!",
      sequence: 1,
    },
    {
      name: "이파이썬",
      message: "후원 합니다!",
      sequence: 2,
    },
  ]);

  useEffect(() => {}, []);

  return (
    <Page>
      <h1>{t("개인 후원자")}</h1>
      <p>
        {t("파이콘 한국 2024를 후원해주신 개인 후원자분들의 명단입니다.")}
        <br />
        {t("후원해주셔서 감사합니다.")}
      </p>

      {patrons
        .sort((a, b) => a.sequence - b.sequence)
        .map((p) => (
          <PatronContainer>
            <h4>{p.name}</h4>
            <p>{p.message ?? ""}</p>
          </PatronContainer>
        ))}
    </Page>
  );
};

export default PatronList;

const PatronContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  h4 {
    color: #febd99;
    margin-bottom: 0.2rem;
  }

  p {
    margin-bottom: 0.3rem;
    color: var(--pico-h3-color);
    font-size: 0.8rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 809px) {
    p {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
