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
      <div className="footer-about-section">
        {/*<section className="left">*/}
        {/*  <table>*/}
        {/*    <tbody>*/}
        {/*      <tr>*/}
        {/*        <td>상호명</td>*/}
        {/*        <td>사단법인 파이썬사용자모임</td>*/}
        {/*      </tr>*/}
        {/*      <tr>*/}
        {/*        <td>사업자 등록 번호</td>*/}
        {/*        <td>338-82-00046</td>*/}
        {/*      </tr>*/}
        {/*      <tr>*/}
        {/*        <td>대표자명</td>*/}
        {/*        <td>배권한</td>*/}
        {/*      </tr>*/}
        {/*      <tr>*/}
        {/*        <td>대표 전화 번호</td>*/}
        {/*        <td>031-261-2203</td>*/}
        {/*      </tr>*/}
        {/*      <tr>*/}
        {/*        <td>사업장 주소</td>*/}
        {/*        <td>서울특별시 강남구 강남대로84길 24-4</td>*/}
        {/*      </tr>*/}
        {/*      <tr>*/}
        {/*        <td>통신판매번호</td>*/}
        {/*        <td>2023-서울강남-03501</td>*/}
        {/*      </tr>*/}
        {/*    </tbody>*/}
        {/*  </table>*/}
        {/*</section>*/}
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
        {/* <section className="right"></section> */}
      </div>
      <div className="footer-fixed-section">
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
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 10vh;
`;

const Sponsors = styled.div`
  //////////////////////////
  background-color: deeppink;
  //////////////////////////
`;
