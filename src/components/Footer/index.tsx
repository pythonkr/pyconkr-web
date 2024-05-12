import { Sponsor } from "models/sponsor";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SponsorAPI } from "api";
import {
  Blog,
  Email,
  Facebook,
  Flickr,
  GitHub,
  Instagram,
  LinkedIn,
  TwitterX,
  Youtube,
} from "assets/icons";
import useTranslation from "utils/hooks/useTranslation";
import SponsorLevels, { SponsorLevel, SponsorLevelCode } from "enums/sponsorLevels";
import { Link } from "react-router-dom";

const Footer = () => {
  const [sponsors, setSponsors] = useState<
    | {
        level: SponsorLevel;
        sponsors: Sponsor[];
      }[]
    | undefined
  >([]);
  const t = useTranslation();

  useEffect(() => {
    SponsorAPI.listSponsors()
      .then((res) => {
        setSponsors(
          Object.entries(
            res.reduce(
              (acc, cur) => {
                if (cur.level.code === "unknown") return acc;
                if (acc[cur.level.code] === undefined) acc[cur.level.code] = [cur];
                else acc[cur.level.code].push(cur);
                return acc;
              },
              {} as { [l: string]: Sponsor[] }
            )
          )
            .reduce(
              (acc, [levelCode, sponsorList]) => {
                acc.push({
                  level: SponsorLevels[levelCode as SponsorLevelCode],
                  sponsors: sponsorList,
                });
                return acc;
              },
              [] as NonNullable<typeof sponsors>
            )
            .sort((a, b) => a.level.priority - b.level.priority)
        );
      })
      .catch((e) => {
        console.error(e);
        setSponsors(undefined);
      });
  }, []);

  return (
    <Container>
      {/* <Sponsors>
        {sponsors === undefined ? (
          <span>후원사 목록을 가져오는데 실패했습니다.</span>
        ) : (
          sponsors.map((s) => (
            <div key={s.level.code}>
              <div>{s.level.name}</div>
              {s.sponsors.map((sponsor) => (
                <div key={sponsor.name}>{sponsor.name}</div>
              ))}
            </div>
          ))
        )}
      </Sponsors> */}
      <About>
        <section className="left">
          <table>
            <tbody>
              <tr>
                <td>상호명</td>
                <td>사단법인 파이썬사용자모임</td>
              </tr>
              <tr>
                <td>사업자 등록 번호</td>
                <td>338-82-00046</td>
              </tr>
              <tr>
                <td>대표자명</td>
                <td>배권한</td>
              </tr>
              <tr>
                <td>대표 전화 번호</td>
                <td>031-261-2203</td>
              </tr>
              <tr>
                <td>사업장 주소</td>
                <td>서울특별시 강남구 강남대로84길 24-4</td>
              </tr>
              <tr>
                <td>통신판매번호</td>
                <td>2023-서울강남-03501</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="center">
          <div className="slogan">Pythonic Moments, {t("파이콘 한국 2024")}</div>
          <div className="content">
            {t("파이콘 한국 2024는 파이콘 한국 준비위원회가 만들고 있습니다.")}
          </div>
          <div className="content">
            {t("파이썬 웹 프레임워크 ")}
            <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
              Django
            </a>
            {t("로 만들었습니다.")}
          </div>
          <div className="terms">
            <Link to="/terms-of-service">{t("서비스 이용 약관")}</Link> |{" "}
            <Link to="/privacy-policy">{t("개인 정보 처리 방침")}</Link>
          </div>
        </section>
        <section className="right"></section>
      </About>
      <Fixed>
        <section className="left">{t("파이콘 한국 행동 강령")} (CoC)</section>
        <section className="right">
          <a href="mailto:pyconkr@pycon.kr">
            <Email />
          </a>
          <a href="https://www.facebook.com/pyconkorea/" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="https://www.youtube.com/c/PyConKRtube" target="_blank" rel="noreferrer">
            <Youtube />
          </a>
          <a href="https://twitter.com/PyConKR" target="_blank" rel="noreferrer">
            <TwitterX />
          </a>
          <a href="https://github.com/pythonkr" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
          <a href="https://www.instagram.com/pycon_korea/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/company/pyconkorea/" target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
          <a href="https://blog.pycon.kr/" target="_blank" rel="noreferrer">
            <Blog />
          </a>
          <a href="https://www.flickr.com/photos/126829363@N08/" target="_blank" rel="noreferrer">
            <Flickr />
          </a>
        </section>
      </Fixed>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100vw;
`;

const Sponsors = styled.div`
  //////////////////////////
  background-color: deeppink;
  //////////////////////////
`;

const About = styled.div`
  height: 9rem;
  margin-bottom: 2.5rem;

  border-top: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.8rem;

  & > section.left {
    width: 29%;
    padding-left: 1%;

    & > table {
      tr > td:nth-of-type(2) {
        padding-left: 1.5rem;
      }
    }
  }

  & > section.center {
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;

    & > div.slogan {
      font-size: 1rem;
    }
    & > div + div {
      margin-top: 1vh;
    }
    & > div a {
      text-decoration: none;
      color: blue;
    }
  }

  & > section.right {
    width: 29%;
    padding-right: 1%;
  }
`;

const Fixed = styled.div`
  position: fixed;
  bottom: 0;

  width: 97vw;
  height: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2vw 0 1vw;

  & > section.left {
    font-weight: bold;
  }

  & > section.right {
    padding-top: 4px;

    svg {
      color: black;
      width: 1.4rem;
    }
    a + a {
      margin-left: 1.1rem;
    }
  }

  //////////////////////////
  background-color: #fbb9a4;
  //////////////////////////
`;
