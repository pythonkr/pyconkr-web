import { TicketAPI } from "api";
import Page from "components/common/Page";
import React, { useEffect } from "react";
import styled from "styled-components";
import useTranslation from "utils/hooks/useTranslation";

import { Payment } from "models/ticket";
import { useState } from "react";

const PaymentList = () => {
  const t = useTranslation();
  const [listOfPayments, setListOfPayments] = useState<Payment[]>([]);

  useEffect(() => {
    TicketAPI.listPayments()
      .then((payments) => {
        setListOfPayments(payments);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // 환불 기능
  const refundPayment = (paymentId: string) => {
    TicketAPI.refundPayment(paymentId)
      .then(() => {
        // 환불 성공
        // 환불 성공 메시지를 띄우고, 결제 내역을 다시 가져옵니다.
        alert(t("환불 성공"));
        TicketAPI.listPayments()
          .then((payments) => {
            setListOfPayments(payments);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        // 환불 실패
        // 환불 실패 메시지를 띄웁니다.
        alert(t("환불 실패"));
      });
  };

  return (
    <Page>
      <Container>
        <h1>{t("결제 내역")}</h1>
        <table>
          <thead>
            <tr>
              <th>{t("결제 번호")}</th>
              <th>{t("결제 상태")}</th>
              <th>{t("금액")}</th>
              <th>{t("변경일")}</th>
              <th>{t("환불")}</th>
            </tr>
          </thead>
          <tbody>
            {listOfPayments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.status.code}</td>
                <td>{payment.price} {t("원")}</td>
                <td>{payment.modifiedAt?.toDateString()}</td>
                <td>
                  {payment.status.code === "PAYMENT_SUCCEED" && (
                    <button onClick={() => refundPayment(payment.id)}>{t("환불하기")}</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Page>
  );
};

export default PaymentList;

const Container = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  button {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;
