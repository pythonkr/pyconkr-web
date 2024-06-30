import React, { useState } from "react";
import BuyTicket from "./buy";
import PaymentResult from "./paymentResult";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

type State = {
  view: "LIST" | "PAYMENT_RESULT";
};

const TicketPage = () => {
  const [view, setView] = useState<State["view"]>("LIST");
  const navigate = useNavigate();

  switch (view) {
    case "LIST":

      if (!localStorage.getItem("id")) {
        alert("로그인이 필요합니다.");
        return <Navigate to={"/login"}/>;
      }

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
