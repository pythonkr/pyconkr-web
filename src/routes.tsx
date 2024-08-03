import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Footer from "components/Footer"
import Nav from "components/Nav"
import { DialogCollection } from "dialogs"
import Coc from "pages/About/coc"
import Pyconkr2024 from "pages/About/pyconkr2024"
import Cfp from "pages/Contribution/cfp"
import Home from "pages/Home"
import NotFound from "pages/NotFound"
import PrivacyPolicy from "pages/PrivacyPolicy"
import SponsorPage from "pages/Sponsor"
import TermsOfService from "pages/TermsOfService"

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/pyconkr2024" element={<Pyconkr2024 />} />
        <Route path="/about/coc" element={<Coc />} />
        <Route path="/sponsoring/sponsor/prospectus" element={<SponsorPage />} />
        <Route path="/contribution/cfp" element={<Cfp />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to={"/404"} />} />
      </Routes>
      <Footer />
      <DialogCollection />
    </BrowserRouter>
  );
};

export default Router;
