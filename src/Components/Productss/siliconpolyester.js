import React from "react";
import { Parallax } from "react-parallax";
import "./silicon2.css";
import GetInTouch from "../GetInTouch.js";
import Silicon11 from "../../Images/silicon11.png";
import Silicon12 from "../../Images/silicon12.png";
import carImage from "../../Images/car2.jpeg";
import { Link } from "react-router-dom"; 

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Silicon11,
      description: "Silicone-Polyester hoses </b>are designed specifically for use in demanding radiator, heater, and coolant transfer applications. Constructed from high-quality silicone reinforced with durable polyester fabric, these hoses offer excellent resilience and reliable performance in harsh conditions. This combination of versatility, durability, and adaptability to extreme environments makes Silicone-Polyester hoses a premium choice for automotive, industrial, and other applications requiring reliable coolant and heat transfer solutions.",
    },
    {
      id: 2,
      
      image: Silicon12,
    
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="SILICON-POLYESTER HOSES" isSubProduct={true} />
  <section className="siliconhero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
              </div> */}
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px" }}>
              SILICON-POLYESTER HOSES
                </h1>
               <h2  style={{textAlign:"left" ,fontWeight:"bold",fontSize:"24px"}}>Silicone Power. Flexible Solutions.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section">
       
      </section>


    <section>
   <article  className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div>
              <img src={Silicon11} alt={product.title} className="product-image silicon-img" />
              </div>
             
              <div className="silicon-article">
              <p><b>Silicone-Polyester hoses </b>are designed specifically for use in demanding radiator, heater, and coolant transfer applications. Constructed from high-quality silicone reinforced with durable polyester fabric, these hoses offer excellent resilience and reliable performance in harsh conditions. This combination of versatility, durability, and adaptability to extreme environments makes Silicone-Polyester hoses a premium choice for automotive, industrial, and other applications requiring reliable coolant and heat transfer solutions.
              </p>
              </div>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card silicon-card2">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content" >
              <div>
              <img src={Silicon12} alt={product.title} className="product-image silicon-img"/>
              </div>
              
            <div className="silicon-article" style={{display:"flex",flexDirection:"column",marginTop:"-5px"}}>
              <h3>Key Features and Benefits:</h3>
          <ul>
            <li>
              Our Silicone Hoses are having good resistance to weather and ozone and resist
              deterioration from coolant and heat transfer.
            </li>
            <li>
              Silicone Polyester Hoses having wide temp range which operates from -50°C to 180°C.
            </li>
            <li>It prevents deterioration caused by fluids and heat.</li>
            <li>Our Silicone Hoses meet requirements of SAEJ20 class A.</li>
            <li>
              We offer with the options of Fluorosilicon for oil/fuel and FKM / Viton liner for
              diesel combustion bye products / exhaust gas recycle.
            </li>
          </ul>
            </div>
            </div>
          </div>
        ))}
	</figure>
  

	
	
</article>
    </section>
  

<section className="getin-touch">
{/* <GetInTouch /> */}
  </section>
 
    </div>
  );
};

export default ProductPage;
