import Page from "components/common/Page";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tickets } from "./tickets";
import Dialog from "components/common/Dialog";
import { Link } from "react-router-dom";
import useTranslation from "utils/hooks/useTranslation";
import { TicketAPI } from "api";

// IMP 모듈을 전역으로 선언
declare global {
  interface Window {
    IMP: any;
  }
}

type Props = {
  onPaymentCompleted: () => void;
};

const BuyTicket = ({ onPaymentCompleted }: Props) => {
  // load IMP module
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
    // 결제 번호 생성 - merchant_id 받아와 변수(merchant_id)에 저장 
    const merchant_id = await TicketAPI.makePaymentId();

    console.log(merchant_id);

    const IMP = window.IMP;
    console.log(IMP);
    IMP.init("imp80859147");

    // 결제 모듈 띄우기
    IMP.request_pay(
      {
        pg: "kcp",
        pay_method: "card",
        merchant_uid: merchant_id,
        name: "티켓 구매",
        amount: 2000,
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 결제 성공 시
          // 결제 완료 처리

          // 완료 결과 보내기
          // await TicketAPI.completePayment(merchant_id);
    // dialog 닫고
    setIsDialogOpened(false);
          // 페이지 이동
    onPaymentCompleted();
        } else {
          alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
        }
      }
    );
  };

  return (
    <Page title="티켓 구매">
      <Container>
        <Dialog
          header={dialogHeader}
          isOpened={isDialogOpened}
          confirmLabel={t("구매하기")}
          cancelLabel={t("취소")}
          onConfirmed={onDialogConfirmed}
          onCanceled={() => {
            setIsDialogOpened(false);
          }}
        >
          {dialogContent}
        </Dialog>
        <h1>{t("티켓 구매하기")}</h1>
        {Object.entries(tickets).map(([k, v]) => (
          <div key={k}>
            <h2>{t(v.name)}</h2>
            <table>
              <tbody>
                {v.tickets.map((ticket) => (
                  <tr key={ticket.name}>
                    <td>{t(ticket.name)}</td>
                    <td>
                      {ticket.price.toLocaleString()}
                      {t("원")}
                    </td>
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
