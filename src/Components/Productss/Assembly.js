import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import GetInTouch from "../GetInTouch.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./silicon.css";
import Assemblyy11 from "../../Images/Assembly11.png";
import Assemblyy12 from "../../Images/Assembly2.png";

import Assemblyy13 from "../../Images/8130.png";
import Assemblyy14 from "../../Images/8146.png";

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {

  const images = [Assemblyy13, Assemblyy14]; // Two images for the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const siliconproducts = [
    {
      id: 1,
     
      image: Assemblyy11,
      
    },
    {
      id: 2,
      
      image: Assemblyy12,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="ASSEMBLY HOSES" isSubProduct={true} />
  <section className="Assemblyhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
            
             
             <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
               ASSEMBLY HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" , marginLeft:"-150px",fontWeight:"bold",fontSize:"24px"}}>Connect with Confidence.
                </h2>
                
             </div>
              </div>
  </div>
  </section>

  <section className="Assembly">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </section>

    <section>
   <article  className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
              <img src={Assemblyy11} alt={product.title} className="product-image silicon-img" />
              </div>
             
              <div className="silicon-article" style={{marginLeft:"20px",marginTop:"-40px"}}>
              <p style={{marginLeft:"20px",marginTop:"80px"}}>Sheetal Rubber provides flexible hoses with custom couplings for efficient media transfer, operating from -40°C to +140°C in sizes 6–75 mm.
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
              <div style={{marginLeft:"-70px",}}>
              <img src={Assemblyy12} alt={product.title} className="product-image silicon-img" style={{marginRight:"15px",marginTop:"150px"}} />
              </div>
              
            <div className="silicon-article marin-content" style={{marginLeft:"20px",marginTop:"-20px"}}>
                <p style={{marginLeft:"20px",marginTop:"50px"}}><h3>Key Features and Benefits:</h3>
                <ul>
            <li>
            A hose or multiple hoses connected to transfer media to or from a vehicle tank, portable tank, or storage receptacle.
            </li>
            <li>Sheetal Rubber can assemble flexible hoses and couplings into hose assemblies.</li>
            <li>Hose assembly applications include engine hoses, oil resistance, suction hoses, and radiators.</li>
            <li>We have an in-house crimping machine facility for hose assemblies.</li>
            
          </ul>
          </p>
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
