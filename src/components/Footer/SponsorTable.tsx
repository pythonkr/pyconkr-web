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
      <div style={{ gridTemplateColumns: `repeat(${max}, 1fr)` }}>
        {sponsors.map((sponsor) => (
          <Link to={`/sponsoring/sponsor/${sponsor.id}`} relative="path">
            <LogoImage image={sponsor.logo_image} />
          </Link>
        ))}
      </div>
    </SponsorCard>
  );
}

interface Image {
  image: string;
}

const H3 = styled.h3`
  color: #141414 !important;
`;

const LogoImage = styled.div<Image>`
  display: inline-flex;
  justify-content: center;
  align-itmes: center;
  color: #141414;
  width: 320px;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;

  & > img {
    height: 50%;
  }

  @media only screen and (max-width: 810px) {
    width: 100%;
  }
`;

const SponsorCard = styled.div`
  border: 1px solid #b0a8fe;
  border-radius: 16px;
  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;
  background-color: #c2c7d0;

  & > h3 {
    color: #b0a8fe;
    margin: 0;
    flex: 200px;
  }

  & > div {
    width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    flex: auto;

    & > a {
      max-height: 20rem;
    }
  }

  @media only screen and (max-width: 810px) {
    flex-direction: column;
    margin: 1rem;

    & > h3 {
      color: #b0a8fe;
      margin: 0;
      flex: auto;
    }

    & > div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;

export default SponsorTable;
