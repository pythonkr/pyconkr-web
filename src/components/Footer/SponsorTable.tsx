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
      <h3>{levelName}</h3>
      <div style={{ gridTemplateColumns: `repeat(${max}, 1fr)` }}>
        {sponsors.map((sponsor) => (
          <Link to={`/sponsoring/sponsor/${sponsor.id}`} relative="path">
            <LogoImage src={sponsor.logo_image} alt={sponsor.name} />
          </Link>
        ))}
      </div>
    </SponsorCard>
  );
}

const LogoImage = styled.img`
  background: white;
  color: black;
  min-width: 15vw;
`;

const SponsorCard = styled.div`
  border: 1px solid #b0a8fe;
  border-radius: 16px;
  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;

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
  }

  @media only screen and (max-width: 810px) {
    margin: 1rem;

    & > div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default SponsorTable;
