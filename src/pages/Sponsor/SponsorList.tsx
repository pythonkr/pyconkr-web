import { SponsorAPI } from "api";
import React, { useEffect, useState } from "react";
import useTranslation from "utils/hooks/useTranslation";
import { SponsorLevelWithSponsor } from "models/sponsor";
import styled from "styled-components";
import SponsorTable from "./SponsorTable";

const SponsorList = () => {
  const t = useTranslation();
  const [listOfSponsorLevel, setListOfSponsorLevel] = useState<SponsorLevelWithSponsor[]>([]);

  useEffect(() => {
    SponsorAPI.listSponsorLevelWithSponsor()
      .then((levels) => {
        setListOfSponsorLevel(levels);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Vertical>
        <H1>{t("후원사 목록")}</H1>
        <SponsorTableList>
          {listOfSponsorLevel.map((level) => (
            <SponsorTable
              max={level.name.toLowerCase() === "keystone" ? 1 : 4}
              levelName={t(level.name)}
              sponsors={level.sponsor}
            />
          ))}
        </SponsorTableList>
      </Vertical>
    </Container>
  );
};

export default SponsorList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 100%;

  &:nth-child(even) {
    background-color: #141414;
  }
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const SponsorTableList = styled.div`
  & > div + div {
    margin-top: 2rem;
  }
`;

const H1 = styled.h1`
  margin-top: 3rem;
  font-size: 40px;
  color: #b0a8fe;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 24px;
  }
`;
