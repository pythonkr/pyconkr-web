import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";
import { setLanguage } from "store/Core";
import styled from "styled-components";
import "./style.scss";
import useTranslation from "utils/hooks/useTranslation";
import MenuRoutes from "./menus";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );
  const t = useTranslation();

  return (
    <Container>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        로고
      </Logo>
      <LeftMenus>
        {Object.entries(MenuRoutes).map(([path, menu]) => (
          <Menu key={path}>
            {menu.name}
            <SubMenus>
              {menu.sub.map((subMenu) => (
                <SubMenu
                  key={subMenu.path}
                  onClick={() => {
                    navigate(`/${path}/${subMenu.path}`);
                  }}
                >
                  {subMenu.name}
                </SubMenu>
              ))}
            </SubMenus>
          </Menu>
        ))}
      </LeftMenus>
      <RightMenus>
        <Menu>
          {t("언어 변경")} (현재: {language})
          <SubMenus>
            <SubMenu
              onClick={() => {
                dispatch(setLanguage("KOR"));
              }}
            >
              한국어
            </SubMenu>
            <SubMenu
              onClick={() => {
                dispatch(setLanguage("ENG"));
              }}
            >
              English
            </SubMenu>
          </SubMenus>
        </Menu>
      </RightMenus>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /////////////////////////
  background-color: bisque;
  /////////////////////////
`;

const Logo = styled.div`
  display: flex;

  width: 10%;
  height: 100%;

  cursor: pointer;

  /////////////////////////
  border: 1px solid black;
  /////////////////////////
`;

const SubMenus = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -10%;

  padding: 0.2rem 0.5rem;

  background-color: #fff;

  font-size: 1rem;

  /////////////////////////
  border: 1px solid red;
  /////////////////////////
`;

const SubMenu = styled.div`
  cursor: pointer;

  white-space: nowrap;

  padding: 0.1rem 0.2rem;

  color: gray;

  & + & {
    margin-top: 0.2rem;
  }

  &:hover {
    color: black;
  }
`;

const Menus = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  font-size: 1.2rem;
`;

const LeftMenus = styled(Menus)``;

const RightMenus = styled(Menus)``;

const Menu = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;

  padding: 2vh 1vw;

  /////////////////////////
  border: 1px solid blue;
  /////////////////////////

  &:hover {
    & > ${SubMenus} {
      display: initial;
    }
  }

  & + & {
    margin-left: 3vw;
  }
`;
