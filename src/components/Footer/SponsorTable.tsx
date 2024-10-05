import { Sponsor } from "models/sponsor";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  max: number;
  levelName: string;
  sponsors: Sponsor[];
};

function SponsorTable({ max, levelName, sponsors, ...rest }: Props) {
  return (
    <SponsorCard>
      <H3>{levelName}</H3>
      <SponsorLogoList>
        {sponsors.map((sponsor) => (
          <Link to={`/sponsoring/sponsor/${sponsor.id}`} relative="path">
            <LogoImage image={sponsor.logo_image} />
          </Link>
        ))}
      </SponsorLogoList>
    </SponsorCard>
  );
}

interface Image {
  image: string;
}

const H3 = styled.h3`
  color: #141414 !important;
  width: 120px;
`;

const LogoImage = styled.div<Image>`
  display: inline-flex;
  justify-content: center;
  align-itmes: center;
  color: #141414;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;

  @media only screen and (max-width: 480px) {
    width: 320px;
  }

  @media only screen and (max-width: 810px) {
    width: 200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 240px;
  }

  @media only screen and (min-width: 1200px) {
    width: 320px;
  }

  @media only screen and (min-width: 1800px) {
    width: 360px;
  }
`;

const SponsorLogoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 3vw;
  justify-content: center;
  width: 100%;
`;

const SponsorCard = styled.div`
  border: 1px solid #b0a8fe;
  border-radius: 16px;
  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;
  background-color: #c2c7d0;
  min-width: 280px;

  & > h3 {
    color: #b0a8fe;
    margin: 0;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin: 1rem;

    & > h3 {
      color: #b0a8fe;
      margin: 0;
      flex: auto;
    }
  }
`;

export default SponsorTable;
