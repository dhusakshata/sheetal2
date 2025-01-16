
import React from "react";
import "./goback.css";
import { Link } from 'react-router-dom';
function GoBackButton() {

    return (
      <div className="product-button">
        <Link to="/product" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Product 
        </button>
      </Link>
      </div>
    );
  };
  
  
  

export default GoBackButton;
