import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Organic1 from "../../Images/organic-rubber1.png";
import Organic2 from "../../Images/organic-industrial-rubber-hoses-485.jpg";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Organic1,
      
    },
    {
      id: 2,
      
      image: Organic1,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
  
  <section className="organichero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
                </div>

               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 ORGANIC RUBBER HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Naturally Strong. Naturally Durable.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section organic">
       
      </section>


    
   <article className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id}className="siliconproduct-section">
            <div className="product-content">
              <div >
              <img src={Organic1} alt={product.title} className="product-image" style={{width:"900px",height:"500px",marginBottom:"-100px"}}/>
              </div>
          
            <div>
            <p><b>Organic rubber hoses</b>, primarily made from natural rubber (NR), offer a unique blend of properties and sustainability. Derived from the sap of rubber trees, natural rubber provides excellent elasticity, resilience, and durability.Designed for low-temperature air, water, and fuel
           transfer, with material options like SBR,
          PVC/NBR, Neoprene, Vamac, and NBR for
           specific needs.
       </p>
           
            </div>
             </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Organic1} alt={product.title} className="product-image" style={{width:"500px",height:"300px",marginBottom:"-100px"}} />
              <div style={{marginLeft:"20px"}}>
              <p>
              
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>The reinforcement fabrics used in our hoses are typically made from Polyester and Nylon, with Kevlar/Aramid sometimes used for higher temperatures or based on customer specifications.</li>
            <li>The materials for the inner tube and outer cover can vary, such as inner nitrile and outer neoprene, available in both reinforced and non-reinforced options.
            </li>
            <li>We offer the option of developing non-reinforced extruded tubes for applications where service pressure requirements are very low.
            </li>
            <li>Our hoses are customizable to meet specific customer needs, with varying reinforcement and material combinations based on performance requirements.
          </li>
          
          </ul>
        </p>
        </div>
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
   


    <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section>

    </div>
  );
};

export default ProductPage;
