import { Sponsor } from "models/sponsor";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SponsorAPI } from "api";
import { Blog, Email, Facebook, Flickr, GitHub, TwitterX, Youtube } from "assets/icons";

const Footer = () => {
  const [sponsors, setSponsors] = useState<Sponsor[] | undefined>([]);

  useEffect(() => {
    SponsorAPI.listSponsors()
      .then((res) => {
        setSponsors(res);
      })
      .catch(() => {
        setSponsors(undefined);
      });
  }, []);

  return (
    <Container>
      <Sponsors>
        {sponsors === undefined ? (
          <span>후원사 목록을 가져오는데 실패했습니다.</span>
        ) : (
          sponsors.map((sponsor) => <span key={sponsor.name}>{sponsor.name}</span>)
        )}
      </Sponsors>
      <About>
        <section className="left">
          <table>
            <tbody>
              <tr>
                <td>상호명</td>
                <td>사단법인 파이썬 사용자모임</td>
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
                <td>사업장 주소</td>
                <td>서울시 강남구 강남대로84길 24-4</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="center">
          <div className="slogan">슬로건, 파이콘 한국 2024</div>
          <div className="content">
            파이콘 한국 2024는 파이콘 한국 준비위원회가 만들고 있습니다.
          </div>
          <div className="content">
            파이썬 웹 프레임워크{" "}
            <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
              Django
            </a>
            로 만들었습니다.
          </div>
          <div className="terms">서비스 이용 약관 | 개인정보 처리 방침</div>
        </section>
        <section className="right"></section>
      </About>
      <Fixed>
        <section className="left">파이콘 한국 행동 강령 (CoC)</section>
        <section className="right">
          <Email />
          <Facebook />
          <Youtube />
          <TwitterX />
          <GitHub />
          <Blog />
          <Flickr />
        </section>
      </Fixed>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
`;

const Sponsors = styled.div`
  //////////////////////////
  background-color: deeppink;
  //////////////////////////
`;

const About = styled.div`
  width: 100%;
  height: 9rem;
  margin-bottom: 2.5rem;

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

  //////////////////////////
  background-color: gray;
  //////////////////////////
`;

const Fixed = styled.div`
  position: fixed;
  bottom: 0;

  width: calc(100% - 2vw);
  height: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1vw;

  & > section.left {
    font-weight: bold;
  }

  & > section.right {
    padding-top: 4px;

    & > svg {
      color: black;
      width: 1.4rem;
    }
    & > svg + svg {
      margin-left: 1.1rem;
    }
  }

  //////////////////////////
  background-color: skyblue;
  //////////////////////////
`;
