import { SponsorAPI } from "api";
import * as R from "remeda";
import { wrap } from "@suspensive/react";
import React, { useEffect, useState } from "react";
import useTranslation from "utils/hooks/useTranslation";
import { APISponsor } from "models/api/sponsor";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { useRetrieveSponsorQuery } from "utils/hooks/useAPI";

const SponsorDetail: React.FC<{ sponsor: APISponsor }> = ({ sponsor }) => {
  return (
    <Vertical>
      <H1>{sponsor.name}</H1>
      <a href={sponsor.url}>
        <LogoImage src={sponsor.logo_image} alt={sponsor.name} />
      </a>
      <H3
        dangerouslySetInnerHTML={{ __html: sponsor.desc }}
        style={{ maxWidth: "70%", display: "block" }}
      />
    </Vertical>
  );
};

const SponsorDetailPage = () => {
  const t = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  if (!(R.isString(id) && !R.isEmpty(id))) {
    navigate("/session");
    return null;
  }

  const SponsorDetailWrapper = wrap
    .ErrorBoundary({ fallback: <h4>{t("후원사 정보를 불러오는 중 에러가 발생했습니다.")}</h4> })
    .Suspense({ fallback: <h4>{t("후원사 정보를 불러오는 중 입니다.")}</h4> })
    .on(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useRetrieveSponsorQuery(id);
      return <SponsorDetail sponsor={data} />;
    });

  return (
    <Container>
      <SponsorDetailWrapper />
    </Container>
  );
};

export default SponsorDetailPage;

const LogoImage = styled.img`
  color: #141414;
  max-width: 50%;
`;

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
  width: 100%;
  height: max-content;
  border-radius: 16px;
  min-height: 700px;
  background-color: #c2c7d0;
  margin: 0 2rem 2rem 2rem;

  @media only screen and (max-width: 810px) {
    height: max-content;
    min-height: 300px;
    justify-content: start;
  }
`;

const H1 = styled.h1`
  margin-top: 3rem;
  font-size: 40px;
  color: #141414;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 24px;
  }
`;

const H3 = styled.h3`
  margin-top: 1.5rem;
  font-size: 24px;
  color: #141414;

  & > * {
    font-size: 24px !important;
    color: #141414 !important;
    text-align: left;

    & > p,
    span {
      font-size: 24px !important;
      color: #141414 !important;
    }
  }

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 16px;
  }
`;
