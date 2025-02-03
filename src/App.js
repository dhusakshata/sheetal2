import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./Components/Scrolltotop.js";
import Header from "./Components/Header/header.js";
import Home from "./Components/Home/home.js";
import Aboutus from "./Components/Aboutus/aboutus.js";
import Product from "./Components/Productss/Product.js";
import Career from "./Components/careers/career.js"
import ContactUs from "./Components/Contactus/contactus.js";
import Footer from "./Components/Footer/footer.js";

import SiliconPolyester from "./Components/Productss/siliconpolyester.js";
import Turbocharger from "./Components/Productss/turbochargerhose.js";
import Marine from "./Components/Productss/marinewethose.js";
import EPDM from "./Components/Productss/epdm.js";
import Organic from "./Components/Productss/organic.js";
import Assembly from "./Components/Productss/Assembly.js";
import Wired from "./Components/Productss/wired.js";
import Fuletube from "./Components/Productss/Fueltube.js";
import Moulded from "./Components/Productss/moulded.js";


import ManufacturingFacilities from "./Components/Facilities/manufacturing.js";
import Inhousefacilities from "./Components/Facilities/inhouse.js";
//Facility pages
import Facility1 from "./Components/Facilities/hot-cold-feed.js";
// import Facility2 from "./Components/Facilities/Dual-head-extruders.js";
import Facility3 from "./Components/Facilities/Auto-clave-vulcanizer.js";
import Facility4 from "./Components/Facilities/Dispersion-kneader.js";
import Facility5 from "./Components/Facilities/3-role-calendaring-machine.js";
import Facility6 from "./Components/Facilities/Compression-transfer-molding.js";
// import Facility7 from "./Components/Facilities/facility7.js";
import Facility8 from "./Components/Facilities/Rubber-mixing-mill.js";
import Facility9 from "./Components/Facilities/Knitting-machine.js";
// import Facility10 from "./Components/Facilities/Braiding-Machines.js";


//Inhouse Facility
import Inhouse1 from "./Components/Facilities/Moving-Die-Rheometer.js";
import Inhouse2 from "./Components/Facilities/Burst-pressure-test-machines.js";
import Inhouse3 from "./Components/Facilities/Ozone-test-chamber.js";
import Inhouse4 from "./Components/Facilities/UTM-tensil.js";
import Inhouse5 from "./Components/Facilities/Heating-oven.js";
import Inhouse6 from "./Components/Facilities/Muffle-furnance.js";

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
        <Route path="/manufacturing" element={<ManufacturingFacilities/>} />
        <Route path="/inhouse" element={<Inhousefacilities/>} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/siliconpolyester" element={<SiliconPolyester />} />
        <Route path="/turbochargerhose" element={<Turbocharger />} />
        <Route path="/marinewethose" element={<Marine />} />
        <Route path="/epdm" element={<EPDM />} />
        <Route path="/organic" element={<Organic />} />
        <Route path="/Assembly" element={<Assembly />} />
        <Route path="/wired" element={<Wired />} />
        <Route path="/Fueltube" element={<Fuletube />} />
        <Route path="/moulded" element={<Moulded />} />


          
 {/* Facility Pages */}
 <Route path="/hot-cold-feed" element={<Facility1 />} />
        {/* <Route path="/Dual-head-extruders" element={<Facility2 />} /> */}
        <Route path="/Auto-clave-vulcanizer" element={<Facility3 />} />
        <Route path="/Dispersion-kneader" element={<Facility4 />} />
        <Route path="/3-role-calendaring-machine" element={<Facility5 />} />
        <Route path="/Compression-transfer-molding" element={<Facility6 />} />
        {/* <Route path="/facility7" element={<Facility7 />} /> */}
        <Route path="/Rubber-mixing-mill" element={<Facility8 />} />
        <Route path="/Knitting-machine" element={<Facility9 />} />
        {/* <Route path="/Braiding-Machines" element={<Facility10 />} /> */}
      

        <Route path="/Moving-Die-Rheometer" element={<Inhouse1 />} />
        <Route path="/Burst-pressure-test-machines" element={<Inhouse2 />} />
        <Route path="/Ozone-test-chamber" element={<Inhouse3 />} />
        <Route path="/UTM-tensil" element={<Inhouse4 />} />
        <Route path="/Heating-oven" element={<Inhouse5 />} />
        <Route path="/Muffle-furnance" element={<Inhouse6 />} />
      </Routes>
    

      {/* Shared footer */}
      <Footer />
    </Router>
  );
};

export default App;
