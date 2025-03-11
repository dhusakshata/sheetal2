import React from "react";

import Autoclave from "../../Images/Auto-clave-vulcanizer.png"; 
import "./autoclave.css";

import { BsArrowDownCircle } from "react-icons/bs";
import hoses from "../../Images/autoclavebg.webp";

const Inhousefacility = () => {

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="subhero-container">
        <div className="subhero-left">
          <div className="subhero-text-content">
          <h1 style={{fontSize:"3rem"}}>AUTO CLAVE VULCANIZER</h1>
          {/* <div className="scroll-down" onClick={handleScrollDown}>
                               <BsArrowDownCircle size={30} />
                              </div> */}
          </div>
        </div>
        <div className="subhero-right">
          <img src={hoses} alt="Hero Background" className="subhero-image" />
        </div>
      </div>
    <section className="autoclave">

    </section>

    <article className="autoclave-article">
	<figure className="autoclave-card">

          <div  className="autoclave-section">
            <div className="autoclave-content">
          
            <img src={Autoclave} alt="Auto Clave Vulcanizer" style={{width:"700px" ,margin:"20px" }} />
            </div>
          </div>
 
	</figure>

	
	<figure className="autoclave-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content1" >
            <p>
              Our production line features Auto Clave Vulcanizers (Quick Lock Type), designed for precise and efficient vulcanization of rubber products. These advanced vulcanizers utilize high pressure and heat to cure rubber compounds, ensuring optimal strength, elasticity, and durability in the finished products. The Quick Lock mechanism enables fast and secure loading and unloading of materials, significantly reducing cycle times while maintaining stringent quality control.

              <h4>Purpose:</h4>
            <ul><li> Vulcanizes rubber products using heat and pressure to enhance strength, elasticity, and durability.</li></ul>
             
            
            </p>
            
            </div>
          </div>
        
	</figure>

  <figure className="autoclave-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content2" >
            
           

            <h4>Quick Lock Mechanism:</h4>
            <p>
              Enables fast and secure loading/unloading, reducing cycle times and increasing efficiency.
            </p>
         
          <h4>Advantages:</h4>
            <ul>
              <li><b>Efficiency:</b> Quick Lock system shortens setup time, increasing productivity.</li>
              <li><b>Precise Control:</b> Ensures uniform curing for consistent product quality.</li>
              <li><b>Versatility:</b> Suitable for a variety of rubber products.</li>
            </ul>
        
          <h4>Benefits:</h4>
            <ul>
              <li><b>Higher Throughput:</b> Faster cycles boost production output.</li>
              <li><b>Energy Efficiency:</b> Lowers energy consumption per batch.</li>
              <li><b>Consistent Quality:</b> Ensures reliable performance of finished products.</li>
            </ul>
            </div>
          </div>
        
	</figure>
 

</article>
 {/* <section className="autoclave"></section> */}
   

    </div>
  );
};

export default Inhousefacility;
