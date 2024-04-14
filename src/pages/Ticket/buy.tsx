import Page from "components/common/Page";
import React, { useState } from "react";
import styled from "styled-components";
import { tickets } from "./tickets";
import Dialog from "components/common/Dialog";
import { Link } from "react-router-dom";
import useTranslation from "utils/hooks/useTranslation";
import { TicketAPI } from "api";

type Props = {
  onPaymentCompleted: () => void;
};

const BuyTicket = ({ onPaymentCompleted }: Props) => {
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

  const onDialogConfirmed = async () => {
    // 결제 번호 생성
    await TicketAPI.makePaymentId();

    // 결제 모듈 띄우기
    // 결제 다 되면
    // 결과 보내고
    await TicketAPI.completePayment("1");
    // dialog 닫고
    setIsDialogOpened(false);
    // 페이지 넘기기
    onPaymentCompleted();
  };

  return (
    <Page title="티켓 구매">
      <Container>
        <Dialog
          header={dialogHeader}
          isOpened={isDialogOpened}
          confirmLabel={t("구매하기")}
          onConfirmed={onDialogConfirmed}
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
                {v.tickets.map((ticket) => (
                  <tr key={ticket.name}>
                    <td>{ticket.name}</td>
                    <td>{ticket.price.toLocaleString()}원</td>
                    <td>
                      <button
                        onClick={() => {
                          openDialog(`${v.name} 구매`, ticket.description);
                        }}
                      >
                        {t("구매하기")}
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
