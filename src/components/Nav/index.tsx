import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";
import { setLanguage } from "store/Core";
import styled from "styled-components";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );

  return (
    <div>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        로고
      </Logo>
      <ul>
        <li
          onClick={() => {
            navigate("/sponsor");
          }}
        >
          후원사 목록
        </li>
        <li>
          <div
            onClick={() => {
              dispatch(setLanguage(language === "KOR" ? "ENG" : "KOR"));
            }}
          >
            언어 변경 (현재: {language})
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

const Logo = styled.div`
  display: flex;
`;
