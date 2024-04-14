import React, { useState } from "react";
import BuyTicket from "./buy";
import PaymentResult from "./paymentResult";

type State = {
  view: "LIST" | "PAYMENT_RESULT";
};

const TicketPage = () => {
  const [view, setView] = useState<State["view"]>("LIST");

  switch (view) {
    case "LIST":
      return (
        <BuyTicket
          onPaymentCompleted={() => {
            setView("PAYMENT_RESULT");
          }}
        />
      );
    case "PAYMENT_RESULT":
      return <PaymentResult />;
    default:
      return <></>;
  }
};

export default TicketPage;
