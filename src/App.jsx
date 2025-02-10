import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TanLandingPage from "../src/Pages/TanLandingPage";
import Header from "../src/components/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TanLandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
