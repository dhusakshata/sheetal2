import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import EPDM1 from "../../Images/epdm11.png";
import EPDM2 from "../../Images/epdm12.png";

import { Link } from "react-router-dom"; 

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
     
  <section className="epdmhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
              </div>
                
                
              
              
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 EPDM RUBBER HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>EPDM: Engineered for Endurance.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section epdm">
       
      </section>


    <section>
   <article>
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <img src={EPDM1} alt={product.title} className="product-image" />
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
              <img src={EPDM2} alt={product.title} className="product-image" style={{marginRight:"15px"}} />
             
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
        ))}
	</figure>
	
{/* 	
	<figure>
		<img src='https://unsplash.it/450/800?image=737' alt />
	</figure>
	<section>
		<div>
			<h2>#impoCSSible is nothing</h2>
			<p>You don´t need Javascript or #CSS processors either for almost 100% of what you want to do.</p>
		</div>
	</section>
	
	<figure>
		<img src='https://unsplash.it/450/800?image=870' alt />
	</figure>
	<section>
		<div>
			<h2>Idea from E.Bouças´s <a href='https://codepen.io/eduardoboucas/full/qdaOWv/'>pen</a></h2>
			<p>Without jQuery or Javascript, nor fixed position (bye IOs problems)</p>
		</div>
	</section>
	
	<figure>
		<img src='https://unsplash.it/450/800?image=743' alt />
	</figure>
	<section>
		<div>
			<h2>Images from unsplash.it</h2>
			<p>Because it´s the best for demos. Thanks, guys!</p>
		</div>
	</section>
	 */}
	
	
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
