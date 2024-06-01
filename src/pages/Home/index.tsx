import Page from "components/common/Page";
import React from "react";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";

const Home = () => {
  const t = useTranslation();
  return (
    <Page>
      <Container>
        <img src="images/introduceSlogan.png" alt="introduceSlogan.png" />
      </Container>
      <Container>
        <Block className="vertical">
          <span className="vertical-item peach-puzz">
            10번째 파이콘 한국에<br /> 여러분을 초대합니다.
          </span>
          <img className="vertical-item" src="images/logo.png" alt="logo.png" />
        </Block>
      </Container>
      <Container className="vertical">
        <span className="purple">{t("2024.10.25")} - {t("2024.10.27")}</span>
        <span className="yellow">{t("수원 컨벤션 센터")}</span>
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

const Block = styled.div`
  border-radius: 16px;
  background-color: #141414;
  padding: 2rem 10rem;
`;
