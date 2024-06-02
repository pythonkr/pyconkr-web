import Page from "components/common/Page";
import React from "react";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";

const Home = () => {
  const t = useTranslation();
  return (
    <Page>
      <Container>
        <img className="mobile-slogan" src="images/introduceSlogan.png" alt="introduceSlogan.png" />
      </Container>
      <Container>
        <div className="vertical welcome-section">
          <span className="vertical-item peach-puzz welcome-text">
            <b>{t("10번째 파이콘 한국에")}<br /></b>
            {t("여러분을 초대합니다.")}
          </span>
          <img className="mobile-logo vertical-item" src="images/logo.png" alt="logo.png" />
        </div>
      </Container>
      <Container className="vertical">
        <span className="big-text purple">October 25-27</span>
        <span className="small-text yellow">in Suwon Convention Center</span>
      </Container>
    </Page>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
`;