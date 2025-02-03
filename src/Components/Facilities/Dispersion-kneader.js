import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./dispersion.css";
import hoses from "../../Images/dispersionbg.avif";
import Dispenser from "../../Images/dispersion kneader.png";
import Stock from "../../Images/stock_blender-removebg-preview.png";

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
          <h1 style={{fontSize:"3rem",textTransform:"uppercase"}}>Dispersion Kneader to Internal Mixer & Stock Blenders</h1>
          
          </div>
        </div>
        <div className="subhero-right">
          <img src={hoses} alt="Hero Background" className="dispersionhero-image" style={{}} />
        </div>
      </div>
    <section className="disperssionbg">

    </section>

    <article className="dispersion-article">
	<figure className="sub-card">

          <div  className="sub-section">
            <div className="sub-content1">
            <p>
            Our production line features advanced dispersion kneaders and internal mixers that ensure the uniform blending of raw materials. This equipment is essential for achieving the desired consistency and properties of rubber compounds, allowing for optimal performance in our finished products. Stock blenders further enhance the mixing process by facilitating the preparation of large batches, ensuring efficient production while maintaining high quality.
          For a rubber-producing company, the sequence of using a Dispersion Kneader, Internal Mixer, and Stock Blenders is crucial in ensuring high-quality rubber compounds. Each piece of equipment plays a unique role in the processing of raw rubber, fillers, and other additives, ultimately affecting the physical and chemical properties of the final product.
        </p>
            </div>
          </div>
 
	</figure>

	
	<figure className="sub-card">
	
          <div className="sub-section">
          <h1 style={{textAlign:"center", margin:"10px",padding:"50px",fontSize:"2rem",textTransform:"uppercase"}}>Dispersion Kneader</h1>
            <div className="dispersionsub-content" >
            <img src={Dispenser} alt="Dispersion Kneader"style={{width:"1000px",marginLeft:"50px"}} className="dispersion-img"/>
           
            <p>
            The dispersion kneader is the first step in the rubber mixing process. It is responsible for pre-mixing the base rubber with various additives. This machine ensures that the materials are evenly distributed within the rubber matrix before moving to the next stage.
       
         
          <ul>
          <b>Functionality:</b>
            <li>The kneader contains two rotors in a chamber that rotate at different speeds, generating high shear forces.</li>
            <li>It operates under controlled temperature and pressure to avoid premature vulcanization while ensuring the additives are dispersed evenly into the rubber.</li>
            <li>The material in this phase is in a relatively low-viscosity state, which allows the fillers and additives to mix thoroughly without any degradation of the rubber’s mechanical properties.</li>
          </ul>
        
          <ul>
          <b>Application:</b>
            <li>It is used in the early stages of rubber compound manufacturing, particularly for creating the masterbatch, where base rubber is mixed with fillers.</li></ul> </p>
            </div>
          </div>
        
	</figure>

  <figure className="sub-card">
	
          <div className="sub-section">
          <h1 style={{textAlign:"center", margin:"30px" ,fontSize:"2rem",textTransform:"uppercase"}}>Internal Mixer</h1>
            <div className="dispersionsub-content2"style={{padding:"0 80px"}} >
  
            <p ><ul><b>Purpose:</b><li>The internal mixer is employed for more intensive mixing, refining the rubber compound by applying higher shear and pressure than a kneader. This is the core stage where the rubber, fillers, and all other components are fully homogenized.</li></ul> 
       
          <ul>
          <b>Functionality:</b>
            <li>The internal mixer operates under higher temperature and pressure compared to the dispersion kneader.</li>
            <li>The high-energy mixing allows the rubber to reach the desired viscosity and uniformity, ensuring that the fillers and chemicals are thoroughly integrated.</li>
            <li>Temperature control is critical to prevent over-heating, which could lead to unwanted cross-linking (vulcanization) of the rubber.</li>
            <li>The internal mixer is ideal for large-volume production, making it indispensable for rubber producers creating tires, hoses, belts, and other rubber goods.</li>
          </ul>
          <ul>
          <b>Application:</b> 
          <li>To produce highly engineered hoses that require consistency in performance.</li>
          </ul>
       </p>
            </div>
          </div>
        
	</figure>
  <figure className="sub-card">
	
  <div className="sub-section">
  <h1 style={{textAlign:"center", margin:"30px",fontSize:"2rem",textTransform:"uppercase"}}>Stock Blender</h1>
    <div className="dispersionsub-content3" >

    <img src={Stock} alt="Stock Blender" style={{width:"1000px"}} className="stock-img" />
   
    <p>
      <b>Purpose:</b> After the rubber compound has been processed in the internal mixer, a stock blender is used to enhance the homogeneity of the mix and prevent temperature build-up, which could negatively impact the material properties.
          
          <ul>
          <b>Functionality:</b>
            <li>A stock blender is generally attached to a two-roll mill. It feeds the compound back into the mill after each pass, ensuring that the material is cooled and reworked for better uniformity.</li>
            <li>The stock blender helps to further mix and cool the compound, ensuring a balanced temperature across the rubber sheet before it moves to the next stage, such as calendering or extrusion.</li>
            <li>It prevents overheating of the compound, which could cause scorching (premature vulcanization) and degrade the quality of the final rubber product.</li>
          </ul>
          <ul>
          <b>Application:</b>
            <li>It helps continuous mixing, ensuring uniform texture and quality in the finished product.</li>
          </ul>
          </p>
    </div>
  </div>

</figure>

<figure className="sub-card">
	
  <div className="sub-section">
  <h1 style={{textAlign:"center", margin:"30px"}}>Why This Sequence is Important for a Rubber-Producing Company?</h1>
    <div className="dispersionsub-content4" >
    <ul>
          <li><b>Efficiency:</b> The use of dispersion kneaders, internal mixers, and stock blenders in sequence ensures that the rubber compound is efficiently mixed, with each stage optimizing different aspects of the material blending process.</li>
          <li><b>Quality Control:</b> Proper mixing at each stage helps maintain the uniformity of the rubber’s mechanical properties, which is vital for ensuring consistent performance in the end products.</li>
          <li><b>Temperature Management:</b> The stock blender ensures that the rubber compound cools down properly after intensive mixing, which helps to avoid defects such as scorching or uneven curing.</li>
          <li><b>Cost Reduction:</b> By using these machines in sequence, a rubber-producing company can reduce wastage and improve the overall quality of their product, thus cutting down on rejects and optimizing production efficiency.</li>
          <li><b>Improved Product Consistency:</b> The sequential blending process helps achieve consistent material properties across batches, ensuring uniformity in the final rubber products and enhancing their reliability.</li>
        </ul>
    </div>
  </div>

</figure>

</article>
 <section className="dispersionbg"></section>
   

    </div>
  );
};

export default Inhousefacility;
