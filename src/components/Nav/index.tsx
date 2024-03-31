import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Logo
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
      </ul> */}
    </div>
  );
};

export default Nav;

const Logo = styled.div`
  display: flex;
`;
