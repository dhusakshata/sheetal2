import React from "react";
import { Parallax } from "react-parallax";
import "./SubInhouseFacility.css";
import utm from "../../Images/utm.png";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  

  return (
    <div className="subinhouse-page">
      {/* Hero Section */}

  <section className="Utm-hero">
  <div className="subinhousehero-content">
     <div className="Product-hero-heading subinhouse-hero-heading  ">
              <div className="vertical-line"style={{marginLeft:"50px"}}>

                </div>
               <div className="subfacility-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px",textTransform:"uppercase" }}>
                 UTM -Tensile machine 
                </h1>
                
              
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Strength Tested, Performance Proven
                </h2>
                
             </div>
              </div>
  </div>
  </section>



     

    <section>
   <article className="UTM-article">
	<figure className="subinhouse-card">
 
          <div className="subinhouseproduct-section">
            <div className="inhouse-content">
              <img src={utm}  className="inhouse-image" style={{width:"900px",height:"500px",marginTop:"-150px"}}/>
      
            </div>
          </div>
    
	</figure>

	
	<figure className="silicon-card">
	
          <div  className="siliconproduct-section" >
            <div className="inhouse-content2" >
            <ul style={{marginTop:"-150px"}}>
            <li>This machine performs a range of tests, including tensile, compressive, and flexural evaluations, providing critical data on material behavior under stress.</li>
        <li>Equipped with advanced load cells, the UTM-1 ensure us for high accuracy in measuring forces, and its digital display offers real-time monitoring of load and elongation during testing.</li>
        <li>The machine generates stress-strain curves that illustrate how materials deform under different loads, revealing important characteristics like yield strength, ultimate tensile strength, elongation at break, and modulus of elasticity.</li>
        <li>This data is very essential for us to quality control, material selection, and failure analysis.</li>
        <li>A user-friendly interface, customizable testing protocols, and complies with international testing standards, giving us valuable data for research and quality assurance.</li>
        <li>
        It plays a key role in optimizing material performance and durability in applications ranging from construction to manufacturing and product development.
        </li>
        <li>
        The UTM-1 has a load capacity ranging from 200 kg to 5000 kg.
        </li>
     </ul>
            </div>
          </div>
      
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
