import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Assemblyy11 from "../../Images/Assembly11.png";
import Assemblyy12 from "../../Images/Assembly2.png";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
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
      
  <section className="Assemblyhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
                 
              </div>
             
             
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 ASSEMBLY HOSES
                </h1>
                
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Connect with Confidence.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section Assembly">
       
      </section>


    <section>
   <article>
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <img src={Assemblyy11} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p> Sheetal Rubber provides flexible hoses with custom couplings for efficient media transfer, operating from -40°C to +140°C in sizes 6–75 mm.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Assemblyy12} alt={product.title} className="product-image"  />
             
              <p>
              
              <h3>Key Features and Benefits:</h3>
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
