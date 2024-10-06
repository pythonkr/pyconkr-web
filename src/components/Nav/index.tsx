import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { Slogan as SloganSvg } from "assets/icons";
import useIsMobile from "utils/hooks/useIsMobile";
import useTranslation from "utils/hooks/useTranslation";
import MenuRoutes, { MenuElementType } from "./menus";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const [openMenu, setOpenMenu] = useState(false);
  const t = useTranslation();

  const menuOnClickHandler = (menu: MenuElementType) => () => {
    if (menu.path) {
      navigate(menu.path);
      setOpenMenu(false);
    } else if (menu.onClick) {
      menu.onClick?.({ setOpenMenu, dispatch, navigate });
    }
  };

  return (
    <Container className="nav-bar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <SloganSvg />
      </div>
      {isMobile && <Hamburger toggled={openMenu} toggle={setOpenMenu} hideOutline />}
      <div className={`menus ${isMobile && openMenu ? "visible" : "hidden"}`}>
        {Object.entries(MenuRoutes).map(([path, menu]) => (
          <Menu className="menu-item" key={path}>
            <span onClick={menuOnClickHandler(menu)}>{t(menu.name)}</span>
            {menu.sub && (
              <SubMenus className="sub-menu">
                {menu.sub.map((subMenu) => (
                  <SubMenu
                    className="sub-menu-item"
                    key={subMenu.name}
                    onClick={menuOnClickHandler(subMenu)}
                  >
                    {t(subMenu.name)}
                  </SubMenu>
                ))}
              </SubMenus>
            )}
          </Menu>
        ))}
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
  top: 90%;

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

  @media only screen and (min-width: 810px) {
    padding: 0 0.5rem;
    & + & {
      border-left: 1px solid;
      height: 1rem;
    }
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
  }

  &:hover {
    color: #b0a8fe;
    & > ${SubMenus} {
      display: initial;
    }
  }
`;
