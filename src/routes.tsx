import Footer from "components/Footer";
import Nav from "components/Nav";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import SponsorList from "pages/Sponsor";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import BuyTicket from "pages/Ticket/buy";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sponsor" element={<SponsorList />} />
        <Route path="/ticket/buy" element={<BuyTicket />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to={"/404"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
