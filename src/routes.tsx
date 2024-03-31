import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sponsor" />
        <Route path="/404" />
        <Route path="*" element={<Navigate replace to={"/404"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
