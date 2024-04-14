import Page from "components/common/Page";
import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { tickets } from "./tickets";
import Dialog from "components/common/Dialog";

const BuyTicket = () => {
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);
  const [dialogHeader, setDialogHeader] = useState<string>("");
  const [dialogContent, setDialogContent] = useState<any>();
  const openDialog = (header: string, content: any) => {
    setDialogHeader(header);
    setDialogContent(content);
    setIsDialogOpened(true);
  };

  return (
    <Page>
      <Helmet title="티켓 구매" />
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
      <Container>
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
`;
