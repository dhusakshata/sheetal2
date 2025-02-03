import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Moulded11 from "../../Images/moulded11.png";
import Moulded12 from "../../Images/moulded12.png";
import Moulded13 from "../../Images/moulded13.png";
import Moulded14 from "../../Images/moulded14.png";

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
   
  <section className="mouldedhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
                
                </div>
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 MOULDED HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>The Versatile Choice for Hosing.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section moulded">
       
      </section>


    <section>
   <article>
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <img src={Moulded11} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>
              We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Moulded12} alt={product.title} className="product-image" style={{marginRight:"15px"}} />
             
              <p>
              Moulded hoses are a type of hose that is manufactured using a moulding process, typically injection moulding or extrusion. This process allows the hose to be made in a variety of shapes and sizes, making it suitable for a wide range of applications.
        </p>
            </div>
          </div>
        ))}
	</figure>
	
  <figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Moulded13} alt={product.title} className="product-image" style={{marginRight:"15px"}} />
             
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
        ))}
	</figure>
  <figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Moulded14} alt={product.title} className="product-image" style={{marginRight:"15px"}} />
             
              <p>
         
        <h3>Applications of Molded Hoses:</h3>
        <ul>
          <li>Automotive: Fuel lines, coolant lines, power steering lines
</li>
          <li>Construction: Hydraulic systems, concrete pump lines
</li>
          
         
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
