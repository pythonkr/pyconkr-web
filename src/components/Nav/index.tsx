import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";
import { setLanguage } from "store/Core";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";
import MenuRoutes from "./menus";
import { Slogan as SloganSvg } from "assets/icons";
import Hamburger from "hamburger-react";
import useIsMobile from "utils/hooks/useIsMobile";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );
  const [openMenu, setOpenMenu] = useState(false);
  const t = useTranslation();

  // 로그인 여부 확인
  // localStorage에 id가 있으면 로그인 상태로 간주
  // 로그인 상태면 로그인 버튼 대신 로그아웃 버튼이 나타남
  // 로그아웃 버튼 클릭 시 localStorage에서 id 삭제 후 메인 페이지로 이동
  const isLogin = localStorage.getItem("id");

  return (
    <Container className="nav-bar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <SloganSvg />
      </div>
      {isMobile && <Hamburger toggled={openMenu} toggle={setOpenMenu} hideOutline={true} />}
      <div className={`menus ${isMobile && !openMenu ? "hidden" : "visible"}`}>
        {Object.entries(MenuRoutes).map(([path, menu]) => (
          <Menu className="menu-item" key={path}>
            <span>{t(menu.name)}</span>
            <SubMenus className="sub-menu">
              {menu.sub.map((subMenu) => (
                <SubMenu
                  className="sub-menu-item"
                  key={subMenu.path}
                  onClick={() => {
                    setOpenMenu(false);
                    navigate(`/${path}/${subMenu.path}`);
                  }}
                >
                  {t(subMenu.name)}
                </SubMenu>
              ))}
            </SubMenus>
          </Menu>
        ))}
        <Menu className="menu-item border-bottom">
          {isLogin ? (
            <SubMenu
              className="sub-menu-item"
              onClick={() => {
                setOpenMenu(false);
                localStorage.removeItem("id");
                navigate("/");
              }}
            >
              {t("로그아웃")}
            </SubMenu>
          ) : (
            <SubMenu
              className="sub-menu-item"
              onClick={() => {
                setOpenMenu(false);
                navigate("/login");
              }}
            >
              {t("로그인")}
            </SubMenu>
          )}
        </Menu>
        <Menu className="menu-item">
          <span>{t("언어")}</span>
          <SubMenus className="sub-menu">
            <SubMenu
              className="sub-menu-item"
              onClick={() => {
                setOpenMenu(false);
                dispatch(setLanguage("KOR"));
              }}
            >
              한국어
            </SubMenu>
            <SubMenu
              className="sub-menu-item"
              onClick={() => {
                setOpenMenu(false);
                dispatch(setLanguage("ENG"));
              }}
            >
              English
            </SubMenu>
          </SubMenus>
        </Menu>
      </div>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #141414;
`;

const SubMenus = styled.div`
  display: none;
  position: absolute;
  top: 70%;

  background-color: #141414;

  font-size: initial;
  font-weight: initial;
`;

const SubMenu = styled.div`
  cursor: pointer;

  padding: 0.1rem 0.2rem;

  color: #febd99;

  & + & {
    margin-top: 0.2rem;
  }

  &:hover {
    color: #b0a8fe;
  }
`;

const Menu = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;

  padding: 1vh 1vw;

  &:hover {
    color: #b0a8fe;
    & > ${SubMenus} {
      display: initial;
    }
  }
`;
