import React from "react";
import HomePage from "../pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Products from "../pages/productpage/Product";

import styled from "styled-components";

const MainContent = styled.div`
  background: #fff;
  height: auto;
  min-height: 100vh;
  padding-bottom: 8px;
`;

const Main = () => {
  return (
    <MainContent>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </Router>
    </MainContent>
  );
};

export default Main;
