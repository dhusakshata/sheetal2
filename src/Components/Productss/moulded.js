import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import GetInTouch from "../GetInTouch.js";
import Moulded11 from "../../Images/8036.png";
import Moulded12 from "../../Images/8093.png";
import Moulded13 from "../../Images/moulded13.png";
import Moulded14 from "../../Images/moulded14.png";

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Moulded11,
      
    },
    {
      id: 2,
      
      image: Moulded11,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage=" MOULDED HOSES" isSubProduct={true} />
  <section className="mouldedhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
                
                </div> */}
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 MOULDED HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" , marginLeft:"-150px",fontWeight:"bold",fontSize:"24px"}}>The Versatile Choice for Hosing.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section moulded">
       
      </section>


    <section>
   <article className="Product-article">
	<figure className="silicon-card silicon-card3">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content">
            <div style={{marginLeft:"-10px",marginTop:"-250px"}}>
              <img src={Moulded11} alt={product.title} className="moulded-image" />
              </div>
              <h3>{product.title}</h3>
              <p style={{marginLeft:"20px"}}>
              We specialize in high-performance,
custom-moulded parts for various
industries.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card silicon-card2">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
             <div style={{marginLeft:"10px",marginTop:"-250px"}}>
             <img src={Moulded12} alt={product.title} className="moulded-image" style={{marginRight:"15px"}} />
              </div>
              
            <div className="marin-content">
            <p style={{marginLeft:"40px"}}>
              <ul>
                <li>We are using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,& more.</li></ul>
            </p>
            </div>
            </div>
          </div>
        ))}
	</figure>
	
  <figure className="silicon-card silicon-card3">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" style={{marginTop:"-250px"}}>
             <div style={{marginLeft:"10px"}}>
               <img src={Moulded13} alt={product.title} className="moulded-image" style={{marginRight:"15px"}} /></div>
              <div style={{marginLeft:"20px"}}>
              <p>
         
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Sheetal Rubber offers a range of moulded parts.
</li>
          <li>Grommet, Gaskets, Bellows, Mountings, Rubber to metal bonded component and custom moulded parts.
</li>
          <li>
          Transfer and compression moulding presses available.

          </li>
          <li>Auto-weighing available from 0.5 grams to 5 kgs.</li>
         
        </ul>
        </p>
        </div>
            </div>
          </div>
        ))}
	</figure>
  <figure className="silicon-card silicon-card3">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content"style={{marginTop:"-250px"}} >
              <div style={{marginLeft:"-20px",marginTop:"-40px"}}>
                <img src={Moulded14} alt={product.title} className="moulded-image" style={{marginRight:"15px"}} /></div>

              <div style={{marginLeft:"20px"}}>
              <p>
         
        <h3>Applications of Moulded Hoses:</h3>
        <ul>
          <li>Automotive: Fuel lines, coolant lines, power steering lines
</li>
          <li>Construction: Hydraulic systems, concrete pump lines
</li>
          
         
        </ul>
        </p>
        </div>

            </div>
          </div>
        ))}
	</figure>
	 
	
	
</article>
    </section>
    {/* <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section> */}
<section className="getin-touch">
{/* <GetInTouch /> */}
  </section>
 
    </div>
  );
};

export default ProductPage;
