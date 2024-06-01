import Footer from "components/Footer";
import Nav from "components/Nav";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import TermsOfService from "pages/TermsOfService";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TicketPage from "pages/Ticket";
import PaymentList from "pages/Ticket/paymentList";
import SponsorPage from "pages/Sponsor";
import TutorialPage from "pages/Program/tutorial";
import Pyconkr2024 from "pages/About/pyconkr2024";
import Cfp from "pages/Contribution/cfp";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/pyconkr2024" element={<Pyconkr2024 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ticket/buy" element={<TicketPage />} />
        <Route path="/ticket/payment-list" element={<PaymentList />} />
        <Route path="/sponsoring/sponsor/prospectus" element={<SponsorPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/program/tutorial" element={<TutorialPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to={"/404"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
