import React from "react";

import { motion } from "framer-motion";
import "./product2.css";
import FuelTube1 from "../../Images/Fuel-Tubes11.png";
import GoBackbutton from "../Goback/goback.js";
const fueltube = ({children}) => {
  return (
    <div className="product-page">
        <div>
            <GoBackbutton />
            {children}
          </div>
      {/* Heading with Bounce Animation */}
            <motion.div
              className="product-head"
              initial={{ opacity: 0, y: -100 }} // Start position (top)
              animate={{ opacity: 1, y: 0 }}    // End position (normal)
              transition={{ duration: 1 }}      // Duration of animation
            >
   <h1
        >FUEL HOSES</h1>
            </motion.div>
            {/* <hr className="product-hr"/> */}

  <div className="product-container" >
        {/* Left Side: Image */}
        <motion.div
          className="content-image"
          initial={{ opacity: 0, x: -100 }} // Start position (left)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration:1 }} 
          style={{marginTop:"-50px"}}     // Duration of animation
        >
          <img src={FuelTube1} alt="Assembly Hoses" style={{marginTop:"-100px"}}
          className="fulehose-img"
          />
        </motion.div>

        
                {/* Right Side: Info */}
                <motion.div
                  className="content-info"
                  initial={{ opacity: 0, x: 100 }} // Start position (right)
                  animate={{ opacity: 1, x: 0 }}    // End position (center)
                  transition={{ duration: 1 }}      // Duration of animation
                >
        <p>
        Engineered for safe and efficient fluid
transfer in automotive and industrial
systems, with inner diameters ranging from
2 mm to 45 mm.
        
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Sheetal Rubber offers single or double layer for automotive to meet requirement.
</li>
          <li>All fuel tubes are very flexible to fit and get shape as per design.
</li>
          <li>
          We offer all fuel tubes in multiple colors.


          </li>
          <li>Our fuel flow tubes to help minimize pressure drop.

          </li>
          <li>
          We also offer fuel tube with sleeves for heat and abrasion resistant.
          </li>
          
        </ul>
        </p>
       </motion.div>
        
          
       
        
      </div>
    </div>

  );
};

export default fueltube;
