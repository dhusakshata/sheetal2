import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Organic1 from "../../Images/8513.png";
import Organic2 from "../../Images/8552.png";
import GetInTouch from "../GetInTouch.js";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Organic1,
      
    },
    {
      id: 2,
      
      image: Organic2,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage=" ORGANIC RUBBER HOSES" isSubProduct={true} />
  <section className="organichero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
                </div> */}

               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 ORGANIC RUBBER HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" , marginLeft:"-90px",fontWeight:"bold",fontSize:"24px"}}>Naturally Strong. Naturally Durable.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section organic">
       
      </section>


      <section>
   <article  className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div>
              <img src={Organic1} alt={product.title} className="product-image epdm-img" />
              </div>
             
              <div className="silicon-article">
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

	
	<figure className="silicon-card silicon-card2">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content" >
              <div>
              <img src={Organic2} alt={product.title} className="product-image epdm-img"/>
              </div>
              
            <div className="silicon-article" style={{display:"flex",flexDirection:"column",marginTop:"-5px"}}>
               <h3>Key Features and Benefits:</h3>
                <ul>
            <li>The reinforcement fabrics used in our hoses are typically made from Polyester and Nylon, with Kevlar/Aramid sometimes used for higher temperatures or based on customer specifications.</li>
            <li>The materials for the inner tube and outer cover can vary, such as inner nitrile and outer neoprene, available in both reinforced and non-reinforced options.</li>
            <li>We offer the option of developing non-reinforced extruded tubes for applications where service pressure requirements are very low.</li>
             <li>Our hoses are customizable to meet specific customer needs, with varying reinforcement and material combinations based on performance requirements.</li> 
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
