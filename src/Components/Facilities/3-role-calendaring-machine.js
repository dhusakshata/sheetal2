import React from "react";

import Role from "../../Images/3_role-removebg-preview.png";
import "./3roll.css";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import hoses from "../../Images/3rollbg.jpg";

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
          <h1 style={{fontSize:"3rem",textTransform:"uppercase"}}>3 roll calendaring Machine</h1>
          {/* <div className="scroll-down" onClick={handleScrollDown}>
                               <BsArrowDownCircle size={30} />
                              </div> */}
          </div>
        </div>
        <div className="subhero-right">
          <img src={hoses} alt="Hero Background" className="rollhero-image" />
        </div>
      </div>
    <section className="roll">

    </section>

    <article className="roll-article">
	<figure className="roll-card">

          <div  className="roll-section">
            <div className="roll-content">
          
            <img src={Role} alt="Auto Clave Vulcanizer" style={{width:"700px" ,margin:"20px" }} />
            </div>
          </div>
 
	</figure>

  <figure className="roll-card">
  <div className="roll-section">
    <div className="roll-content1">
      <p>
        The calendaring process is essential for producing high-quality rubber products, which are used in various applications. By maintaining stringent quality control, our calendaring machines enhance the performance and durability of our finished products while maximizing production efficiency.
      </p>

      <h4>Purpose:</h4>
      <ul>
        <li>Shapes and finishes rubber sheets with precise thickness and uniformity.</li>
      </ul>

      <h4>Operation:</h4>
      <ul>
        <li><b>Roller System:</b> Three horizontally aligned rollers compress and stretch rubber compounds into flat sheets.</li>
        <li><b>Uniformity:</b> Ensures even distribution and desired properties.</li>
      </ul>
    </div>
  </div>
</figure>


  <figure className="roll-card">
	
          <div className="roll-section">
         
            <div className="roll-content2"style={{marginTop:"20px"}} >
            
           
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul style={{marginTop:"-20px"}}>
            <b>Uniform Thickness:</b>
              <li> Guarantees consistent sheet thickness for quality products.</li>
              <b>Smooth Surface Finish:</b>
              <li> Enhances both the look and functionality of rubber products.</li>
              <b>Versatility:</b> 
              <li>Suitable for various rubber compounds.</li>
              <b>High Efficiency:</b>
              <li> Continuous operation for large-scale production.</li>
            </ul>
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits:</h4>
            <ul style={{marginTop:"-20px",marginLeft:"80px"}}>
              <li><b>Enhanced Quality:</b> Consistent thickness improves product performance.</li>
              <li><b>Cost-Effective:</b> High efficiency reduces costs.</li>
              <li><b>Production Flexibility:</b> Quick adjustments for varied requirements.</li>
            </ul>
            </div>
          </div>
        
	</figure>
 

</article>
 <section className="roll"></section>
   

    </div>
  );
};

export default Inhousefacility;
