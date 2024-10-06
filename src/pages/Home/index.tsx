import { mdiLinkVariant } from "@mdi/js"
import Icon from "@mdi/react"
import Page from "components/common/Page"
import React from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"
import useTranslation from "utils/hooks/useTranslation"

const Home = () => {
  const t = useTranslation();
  const navigate = useNavigate();
  return (
    <Page>
      <Container>
        <img
          className="mobile-slogan"
          src="/images/introduceSlogan.png"
          alt="introduceSlogan.png"
        />
      </Container>
      <Container>
        <div className="vertical welcome-section">
          <span className="vertical-item peach-puzz welcome-text">
            <b>
              {t("10번째 파이콘 한국에")}
              <br />
            </b>
            {t("여러분을 초대합니다.")}
          </span>
          <img className="mobile-logo vertical-item" src="images/logo.png" alt="logo.png" />
        </div>
      </Container>
      <Container className="vertical">
        <span className="big-text purple">October 26-27</span>
        <span className="small-text yellow">in Suwon Convention Center</span>
        <LinkBtn onClick={() => navigate("/about/place")}>
          <Icon path={mdiLinkVariant} size={1} color="#b0a8fe" /> {t("찾아오시는 길")}
        </LinkBtn>
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

const LinkBtn = styled.button`
  margin: 0.5rem;
  padding: 0 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
  color: #b0a8fe;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.3s;

  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  &:hover {
    background-color: rgba(176, 168, 254, 0.2);
  }
`
