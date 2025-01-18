import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./Components/Scrolltotop.js";
import Header from "./Components/Header/header.js";
import Home from "./Components/Home/home.js";
import Aboutus from "./Components/Aboutus/aboutus.js";
import Footer from "./Components/Footer/footer.js";

import Product from "./Components/Products/product.js";
import SiliconPolyester from "./Components/Products/siliconpolyester.js";
import Turbocharger from "./Components/Products/turbochargerhose.js";
import Marine from "./Components/Products/marinewethose.js";
import EPDM from "./Components/Products/epdm.js";
import Organic from "./Components/Products/organic.js";
import Assembly from "./Components/Products/Assembly.js";
import Wired from "./Components/Products/wired.js";
import Fuletube from "./Components/Products/Fueltube.js";
import Moulded from "./Components/Products/moulded.js";

import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Ensures scroll resets on navigation */}
      <ScrollToTop />

      {/* Shared header */}
      <Header />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/product" element={<Product />} />
        <Route path="/siliconpolyester" element={<SiliconPolyester />} />
        <Route path="/turbochargerhose" element={<Turbocharger />} />
        <Route path="/marinewethose" element={<Marine />} />
        <Route path="/epdm" element={<EPDM />} />
        <Route path="/organic" element={<Organic />} />
        <Route path="/Assembly" element={<Assembly />} />
        <Route path="/wired" element={<Wired />} />
        <Route path="/Fueltube" element={<Fuletube />} />
        <Route path="/moulded" element={<Moulded />} />
      </Routes>

      {/* Shared footer */}
      <Footer />
    </Router>
  );
};

export default App;
