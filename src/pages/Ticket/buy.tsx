import Page from "components/common/Page";
import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { tickets } from "./tickets";
import Dialog from "components/common/Dialog";
import { Link } from "react-router-dom";
import useTranslation from "utils/hooks/useTranslation";

const BuyTicket = () => {
  const t = useTranslation();
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);
  const [dialogHeader, setDialogHeader] = useState<string>("");
  const [dialogContent, setDialogContent] = useState<any>();
  const openDialog = (header: string, content: any) => {
    setDialogHeader(header);
    setDialogContent(
      <>
        {t(content)}
        티켓을 구매하면 관련{" "}
        <Link to="/terms-of-service" target="_blank">
          서비스 이용 약관
        </Link>
        ,{" "}
        <a href="/privacy-policy" target="_blank">
          개인 정보 처리 방침
        </a>
        에 동의한 것으로 간주합니다.
      </>
    );
    setIsDialogOpened(true);
  };

  return (
    <Page>
      <Helmet title="티켓 구매" />
      <Container>
        <Dialog
          header={dialogHeader}
          isOpened={isDialogOpened}
          confirmLabel="구매하기"
          onConfirmed={() => {}}
          onCanceled={() => {
            setIsDialogOpened(false);
          }}
        >
          {dialogContent}
        </Dialog>
        <h1>티켓 구매하기</h1>
        {Object.entries(tickets).map(([k, v]) => (
          <div key={k}>
            <h2>{v.name}</h2>
            <table>
              <tbody>
                {v.tickets.map((t) => (
                  <tr key={t.name}>
                    <td>{t.name}</td>
                    <td>{t.price.toLocaleString()}원</td>
                    <td>
                      <button
                        onClick={() => {
                          openDialog(`${v.name} 구매`, t.description);
                        }}
                      >
                        구매하기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Container>
    </Page>
  );
};

export default BuyTicket;

const Container = styled.div`
  table {
    width: 25vw;

    td:first-of-type {
      width: 25%;
      font-weight: bold;
    }
    td:nth-of-type(2) {
      width: 10%;
    }
    td:nth-of-type(3) {
      width: 10%;
    }
  }

  .cm-dialog {
    a {
      text-decoration: none;
      color: blue;
    }
  }
`;
