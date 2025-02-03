import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Silicon11 from "../../Images/silicon11.png";
import Silicon12 from "../../Images/silicon12.png";
import carImage from "../../Images/car2.jpeg";
import { Link } from "react-router-dom"; 

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
      description: "Description of Product 2. Crafted with premium materials for longevity.",
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
     
  <section className="siliconhero">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px" }}>
              SILICON-POLYESTER HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"20px" ,fontWeight:"bold",fontSize:"24px"}}>Silicone Power. Flexible Solutions.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section">
       
      </section>


    <section>
   <article>
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <img src={Silicon11} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p><b>Silicone-Polyester hoses </b>are designed specifically for use in demanding radiator, heater, and coolant transfer applications. Constructed from high-quality silicone reinforced with durable polyester fabric, these hoses offer excellent resilience and reliable performance in harsh conditions. This combination of versatility, durability, and adaptability to extreme environments makes Silicone-Polyester hoses a premium choice for automotive, industrial, and other applications requiring reliable coolant and heat transfer solutions.</p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Silicon12} alt={product.title} className="product-image" style={{marginRight:"15px"}} />
              <h3>{product.title}</h3>
              <p><h3>Key Features and Benefits:</h3>
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
          </ul></p>
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
