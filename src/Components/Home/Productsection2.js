import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Productsection2.css";

// Import images
import product1 from '../../Images/Silicon1.png';
import product2 from '../../Images/Turbo-charger1.png';
import product3 from '../../Images/Marine-wet1.png';
import product4 from '../../Images/epdm11(1).png';
import product5 from '../../Images/organic-rubber1.png';
import product6 from '../../Images/Assembly-rubber1.png';
import product7 from '../../Images/wired11.png';
import product8 from '../../Images/Fuel-Tubes11.png';
import product9 from '../../Images/Moulded1.png';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content slides for text
  const contentSlides = [
    {
      title: 'Silicone-Polyester Hoses',
      text: "Built to Last: Silicon Polyester Hoses for Demanding Applications",
      link: "/siliconpolyester" 
    },
    {
      title: 'Turbocharger & CAC Hoses',
      text: "High-Performance Turbocharger & CAC Hoses for Reliable Connections.",
      link:"/turbochargerhose" 
    },
    {
      title: 'Marine Wet Exhaust Hoses',
      text: "Superior Marine Wet Exhaust Hoses for Reliable Performance.",
      link: "/marinewethose" 
    },
    {
      title: "EPDM Rubber Hoses",
      text: "DIN73411 & SAEJ20 Class D Compliant Radiator & Cooling Hoses.",
      link: "/epdm" 
    },
    {
      title: 'Organic Rubber Hoses',
      text: "SBR, PVC/NBR, Neoprene, Vamac, & NBR Hoses for Low-Temperature Use.",
      link: "/organic" 
    },
    {
      title: 'Assembly Hoses',
      text: "Flexible Hoses with Custom Couplings for -40°C to +140°C Operation.",
      link: "/Assembly" 
    },
    {
      title: "Wire Reinforced Hoses",
      text: "Reliable Hoses for Demanding Applications: -40°C to +140°C.",
      link: "/wired" 
    },
    {
      title: "Fuel Tubes",
      text: "Safe & Efficient Fluid Transfer Hoses for Automotive & Industrial Use.",
      link: "/fueltube"
    },
    {
      title: "Moulded Hoses",
      text: "Custom-Molded Parts in SBR, EPDM, PVC/NBR, Silicone, Neoprene, & More.",
      link: "/moulded"
    }
  ];

  // Image slides
  const imageSlides = [
    { src: product1, alt: "Silicone-Polyester Hoses" },
    { src: product2, alt: "Turbocharger & CAC Hoses" },
    { src: product3, alt: "Marine Wet Exhaust Hoses" },
    { src: product4, alt: "EPDM Rubber Hoses" },
    { src: product5, alt: "Organic Rubber Hoses" },
    { src: product6, alt: "Assembly Hoses" },
    { src: product7, alt: "Wire Reinforced Hoses" },
    { src: product8, alt: "Fuel Tubes" },
    { src: product9, alt: "Moulded Hoses" },
  ];

  // Handle next slide for auto-slide
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % contentSlides.length);
  };

  // Set up auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]);

  // Handle manual navigation
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Text content */}
        <div className="content">
          {contentSlides.map((slide, index) => (
            <div
              className={`content-slide ${index === currentIndex ? "active" : ""} ${
                index === (currentIndex - 1 + contentSlides.length) % contentSlides.length ? "previous" : ""
              }`}
              key={index}
            >
              <Link to={slide.link} className="slide-link"> {/* Add Link here */}
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Image content */}
        <div className="image">
          {imageSlides.map((slide, index) => (
            <div
              className={`image-slide ${index === currentIndex ? "active" : ""} ${
                index === (currentIndex - 1 + imageSlides.length) % imageSlides.length ? "previous" : ""
              }`}
              key={index}
            >
              <Link to={contentSlides[index].link}> {/* Wrap image with Link */}
                <img src={slide.src} alt={slide.alt} className="slide-image" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <div className="nav-arrows">
        <button id="up" onClick={handlePrevious}>
          <i>&#9650;</i>
        </button>
        <button id="down" onClick={handleNext}>
          <i>&#9660;</i>
        </button>
      </div> */}
    </div>
  );
};

export default Slider;
