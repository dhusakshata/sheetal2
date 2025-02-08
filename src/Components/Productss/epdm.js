import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import EPDM1 from "../../Images/epdm11.png";
import EPDM2 from "../../Images/epdm.png";

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: EPDM1,
      
    },
    {
      id: 2,
      
      image: EPDM2,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="EPDM RUBBER HOSES" isSubProduct={true} />
  <section className="epdmhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
              </div>
                
                
              
              
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 EPDM RUBBER HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,marginLeft:"-130px",fontWeight:"bold",fontSize:"24px"}}>EPDM: Engineered for Endurance.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section epdm">
       
      </section>


    <section>
   <article className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content">
              <div style={{marginLeft:"-70px"}}>
              <img src={EPDM1} alt={product.title} className="epdm-image product-image" />
              </div>
              <h3>{product.title}</h3>
              <p>
          <b>EPDM rubber hoses</b> are versatile and widely used in various industries due to their excellent resistance to heat, ozone, weathering, and many chemicals. They are made from EPDM (Ethylene Propylene Diene Monomer), a synthetic rubber known for its durability and flexibility.  
              High-performance hoses for radiator and cooling systems, built to DIN73411 & SAEJ20 Class D standards for durability, flexibility, and heat resistance.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={EPDM2} alt={product.title} className="product-image" style={{marginRight:"15px",width:"500px",marginTop:"10px"}} />
             
          <div style={{marginLeft:"20px",marginTop:"20px"}}>
          <p>
              <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Available in reinforcement as well as non-reinforcement options.
           </li>
            <li>Nylon/polyester reinforcement gives flexibility and aramid / Kevlar gives high strength.
            </li>
            <li>Our EPDM hoses are designed to operate continuously in temperatures ranging from -30°C to 140°C.
            </li>
            <li>Also available in peroxide-cured hoses.</li>
            
          </ul>
        </p>
          </div>
            </div>
          </div>
        ))}
	</figure>
	

	
</article>
    </section>

    <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section>

    </div>
  );
};

export default ProductPage;
