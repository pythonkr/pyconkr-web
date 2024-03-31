import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Page>
      <Header>
        <h1>파이콘 한국 2024</h1>
        <h2>PyCon Korea 2024</h2>
        <h3>Coming Soon</h3>
      </Header>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  margin: 5vh auto;
  padding: 0 2.5vw;

  width: 90vw;
  height: 90vh;

  border: 1px solid #f87c56;
  background: linear-gradient(to right, #fbb9a4, #fde3db);
`;

const Header = styled.div`
  color: #852305;

  h1 {
    font-size: 5rem;
    margin: 5vh 0;
  }
  h2 {
    font-size: 4rem;
    margin: 3vh 0;
  }
  h3 {
    font-size: 3.3rem;
    margin: 2vh 0;
  }
`;
