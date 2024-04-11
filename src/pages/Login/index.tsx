import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAPI } from "api";
import Page from "components/common/Page";
import React, { useState } from "react";
import styled from "styled-components";
import { isEnterKeyPressed } from "utils";
import useTranslation from "utils/hooks/useTranslation";

const Login = () => {
  const t = useTranslation();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    if (!id) await UserAPI.signIn(id, password);
  };

  return (
    <Page>
      <Container>
        <ID_PW>
          <ID_PW_ROW>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <input
                type="text"
                value={id}
                onChange={(e) => {
                  setId(e.currentTarget.value);
                }}
              />
            </div>
          </ID_PW_ROW>
          <ID_PW_ROW>
            <div>
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                onKeyDown={(e) => {
                  if (isEnterKeyPressed(e)) signIn();
                }}
              />
            </div>
          </ID_PW_ROW>
        </ID_PW>
        <SubmitBtn
          onClick={() => {
            signIn();
          }}
        >
          {t("로그인")}
        </SubmitBtn>
      </Container>
    </Page>
  );
};

export default Login;

const Container = styled.div`
  height: 66vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ID_PW = styled.div`
  padding: 2vh 1vw;
  border-radius: 0.5rem;

  width: 20%;

  background-color: #fde3db;
`;

const ID_PW_ROW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2rem;

  & > div:first-of-type {
    width: 33%;
    white-space: nowrap;
    text-align: center;
  }
  & > div:last-of-type {
    width: 60%;
    height: 80%;

    & > input {
      width: 85%;
      height: 85%;
      font-size: 1.05rem;
    }
  }
  & + & {
    margin-top: 1vh;
  }
`;

const SubmitBtn = styled.button`
  margin-top: 3vh;

  width: 15%;
  height: 2.5rem;

  font-size: 1rem;

  background-color: #fbb9a4;
  border: none;
  border-radius: 4px;

  cursor: pointer;
`;
