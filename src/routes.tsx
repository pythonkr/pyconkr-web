import Footer from "components/Footer";
import Nav from "components/Nav";
import Home from "pages/Home";
import SponsorList from "pages/Sponsor";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsor" element={<SponsorList />} />
        <Route path="/404" />
        <Route path="*" element={<Navigate replace to={"/404"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
