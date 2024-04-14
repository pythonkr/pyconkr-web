import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";
import { setLanguage } from "store/Core";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";
import MenuRoutes from "./menus";
import { Logo as LogoSvg } from "assets/icons";

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
        <LogoSvg />
        {/* TODO 올해 로고로 바꿔야 */}
      </Logo>
      <LeftMenus>
        {Object.entries(MenuRoutes).map(([path, menu]) => (
          <Menu key={path}>
            {t(menu.name)}
            <SubMenus>
              {menu.sub.map((subMenu) => (
                <SubMenu
                  key={subMenu.path}
                  onClick={() => {
                    navigate(`/${path}/${subMenu.path}`);
                  }}
                >
                  {t(subMenu.name)}
                </SubMenu>
              ))}
            </SubMenus>
          </Menu>
        ))}
      </LeftMenus>
      <RightMenus>
        <Menu
          onClick={() => {
            navigate("/login");
          }}
        >
          {t("로그인")}
        </Menu>
        <Menu>
          Language
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
  width: 99vw;
  height: 8vh;

  padding-right: 1vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /////////////////////////
  background-color: #fde3db;
  /////////////////////////
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10%;
  height: 100%;

  cursor: pointer;
`;

const SubMenus = styled.div`
  display: none;
  position: absolute;
  top: 85%;
  left: -10%;

  padding: 0.2rem 0.5rem;

  background-color: #fff;

  font-size: initial;
  font-weight: initial;
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
`;

const Menu = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;

  padding: 2vh 1vw;

  &:hover {
    & > ${SubMenus} {
      display: initial;
    }
  }

  & + & {
    margin-left: 3vw;
  }
`;

const LeftMenus = styled(Menus)`
  font-weight: bold;
  font-size: 1.25rem;
`;

const RightMenus = styled(Menus)`
  ${Menu} + ${Menu} {
    margin-left: 1vw;
  }
`;
