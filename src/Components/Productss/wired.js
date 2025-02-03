import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Wired1 from "../../Images/wire.png";
import Wired11 from "../../Images/wired11.png";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Wired1,
      
    },
    {
      id: 2,
      
      image: Wired11,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}

  <section className="wiredhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
                 
              </div>
                 
                
             
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 WIRE REINFORCED
                 HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Wire Strong. Performance Strong.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section wired">
       
      </section>


    <section>
   <article>
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <img src={Wired1} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p> Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Wired11} alt={product.title} className="product-image"  />
             
              <p>
              
            
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>The suction hose is designed to maintain vacuum integrity for the transfer of fluids and air.
</li>
          <li>The air filter hose is durable and ensures clean air intake for the engine.
</li>
          <li>The flexible hose is versatile, making it suitable for the transfer of both fluids and gases.

          </li>
          <li>These hoses have a good bend radius, for trickier connections, and is resistant to anti-freeze and corrosion inhibitors.
          </li>
          <li>	It is useful for air cleaner applications in automotive filters.</li>
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

 
    </div>
  );
};

export default ProductPage;
