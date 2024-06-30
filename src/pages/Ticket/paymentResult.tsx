import { TicketAPI } from "api";
import Page from "components/common/Page";
import React, { useEffect } from "react";

const PaymentResult = () => {
  useEffect(() => {
    TicketAPI.listPayments();
  }, []);

  return <Page title="티켓 구매">구매가 완료되었습니다. 감사합니다.</Page>;
};

export default PaymentResult;
