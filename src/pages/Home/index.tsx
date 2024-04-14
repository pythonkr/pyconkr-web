import Page from "components/common/Page";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Page>
      <Container>
        <Header>
          <h1>파이콘 한국 2024</h1>
          <h2>PyCon Korea 2024</h2>
          <h3>Coming Soon</h3>
        </Header>
      </Container>
    </Page>
  );
};

export default Home;

const Container = styled.div`
  padding: 0 2.5vw;

  width: 90%;
  height: 77vh;

  border: 1px solid #f87c56;
  background: linear-gradient(to right, #fbb9a4, #fde3db);
`;

const Header = styled.div`
  color: #852305;

  h1 {
    font-size: 4.5rem;
    margin: 5vh 0;
  }
  h2 {
    font-size: 3.5rem;
    margin: 3vh 0;
  }
  h3 {
    font-size: 3rem;
    margin: 2vh 0;
  }
`;
