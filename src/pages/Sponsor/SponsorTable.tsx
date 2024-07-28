import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  max: Number;
  levelName: string;
  sponsors: Array<{ name: string; image: string }>;
};

function SponsorTable({ max, levelName, sponsors, ...rest }: Props) {
  return (
    <SponsorCard>
      <h3>{levelName}</h3>
      <div style={{ gridTemplateColumns: `repeat(${max}, 1fr)` }}>
        {sponsors.map((sponsor) => (
          <img src={sponsor.image} alt={sponsor.name} />
        ))}
      </div>
    </SponsorCard>
  );
}

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
    display: block;
    margin: 1rem;

    & > div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default SponsorTable;
