import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Sponsors></Sponsors>
      <About></About>
      <Fixed></Fixed>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;
`;

const Sponsors = styled.div`
  //////////////////////////
  background-color: deeppink;
  //////////////////////////
`;

const About = styled.div`
  width: 100%;
  height: 12rem;

  //////////////////////////
  background-color: gray;
  //////////////////////////
`;

const Fixed = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 2.5rem;

  //////////////////////////
  background-color: skyblue;
  //////////////////////////
`;
