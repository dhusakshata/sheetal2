import React,{ useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules"; // Correct way to import Navigation
import "swiper/css";
import "swiper/css/navigation";


import ProductSection2 from "./Productsection2.js";
import rubberWorld from "../../video/about1.mp4";

//Logos
import logo1 from "../../Images/client1.png"; 
import logo2 from "../../Images/client2.jpg";
import logo3 from "../../Images/client3.png";
import logo4 from "../../Images/client4.jpg";
import logo5 from "../../Images/client5.png";
import logo6 from "../../Images/client6.png";
import logo7 from "../../Images/client7.png";


// Application Area Images
import Img1 from "../../Images/Truck.png";
import Img2 from "../../Images/marine.jpeg";
import Img3 from "../../Images/Image3.jpg";
import Img4 from "../../Images/Image4.png";
import Img5 from "../../Images/Image5.jpg";
import Img6 from "../../Images/Image6.jpg";

const Home = () => {

 // Array of imported images
 const images = [Img1, Img2, Img3, Img4, Img5, Img6];

 const [currentIndex, setCurrentIndex] = useState(0);

 // Automatically switch images every 3 seconds
 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentIndex((prevIndex) =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1
     );
   }, 3000); // Change slide every 3 seconds

   return () => clearInterval(interval); // Cleanup on component unmount
 }, [images.length]);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  // for sliding product images
  const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 4, // Number of products in one row
   slidesToScroll: 1,
   autoplay: true, // Enable automatic sliding
 autoplaySpeed: 1000, // Slide every 3 seconds
   responsive: [
     {
       breakpoint: 1200,
       settings: { slidesToShow: 3 },
     },
     {
       breakpoint: 992,
       settings: { slidesToShow: 2 },
     },
     {
       breakpoint: 768,
       settings: { slidesToShow: 1 },
     },
   ],
   prevArrow: <div className="custom-prev-arrow"></div>,  // Custom left arrow
   nextArrow: <div className="custom-next-arrow"></div>,  // Custom right arrow
 };



 

  return (
    <div>
      {/* Main Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Explore our products and services</p>
          <Link to="about" smooth={true} duration={500} className="scroll-btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* About Us Section */}
    <section className="about-section" id="about">
  <div className="section-content">
    <div className="about-us-title">
      <h1>ABOUT US</h1>
    </div>
    <div className="about-us-content">
      <div className="about-us-info">
        <p>
          Welcome to Sheetal Rubber Products, where innovation meets quality in the manufacturing of rubber solutions. Established with a vision to provide superior rubber products, we specialize in a wide range of offerings, including moulded hoses, silicone hoses, fuel tubes, assembly hoses, and wire-reinforced hoses.
        </p>
        <p>
          Our commitment to excellence is reflected in our state-of-the-art manufacturing processes and rigorous quality control measures.
        </p>
        <p>
          With years of experience in the industry, our team of skilled professionals is dedicated to delivering customized solutions tailored to meet the specific needs of our clients. We take pride in our ability to understand client requirements and provide innovative products that enhance efficiency and reliability.
        </p>
        <p>
          At Sheetal Rubber Products, customer satisfaction is our top priority. We believe in building long-term relationships with our clients by offering exceptional service, timely delivery, and continuous support.
        </p>

        <button className="read-more">
          <Link to="/about">Read More</Link>
        </button>
      </div>

      <div className="about-us-video">
        <video className="about-us-video-element" autoPlay muted loop>
          <source src={rubberWorld} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</section>


      {/* Product Section */}
      <section className="product-section" id="product">
      
        <div className="section-content">
          
          <h2>PRODUCTS</h2>
          <p >
  At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including <p>
  At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including 
  <b>
    <Link to="/siliconpolyester">Silicone Polyester Hoses</Link>, 
    <Link to="/turbochargerhose">Turbocharger Hoses</Link>, 
    <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>, 
    <Link to="/epdm">EPDM Rubber Hoses</Link>, 
    <Link to="/organic">Organic Rubber Hoses</Link>, 
    <Link to="/assembly">Assembly Hoses</Link>, 
    <Link to="/wired">Wire Reinforced Hoses</Link>, 
    <Link to="/fueltube">Fuel Hoses</Link>, 
    <Link to="/moulded">Moulded Hoses</Link>.
  </b> 
  Each product is meticulously crafted to ensure superior durability, flexibility, and resistance, catering to diverse industrial and automotive applications.
</p>

  </p>
          <ProductSection2/>

          
        </div>
        
      </section>
 {/* Application Section */}
 <section className="application-section2" id="application">
      <div className="section-content trusted-clients">
  <h2>TRUSTED BY CLIENTS</h2>
  <p>
    At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including <p>
  At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including 
  <b>
    <Link to="/siliconpolyester">Silicone Polyester Hoses</Link>, 
    <Link to="/turbochargerhose">Turbocharger Hoses</Link>, 
    <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>, 
    <Link to="/epdm">EPDM Rubber Hoses</Link>, 
    <Link to="/organic">Organic Rubber Hoses</Link>, 
    <Link to="/assembly">Assembly Hoses</Link>, 
    <Link to="/wired">Wire Reinforced Hoses</Link>, 
    <Link to="/fueltube">Fuel Hoses</Link>, 
    <Link to="/moulded">Moulded Hoses</Link>.
  </b> 
  Each product is meticulously crafted to ensure superior durability, flexibility, and resistance, catering to diverse industrial and automotive applications.
</p>
 Each product is meticulously crafted to ensure superior durability, flexibility, and resistance, catering to diverse industrial and automotive applications.
  </p>
</div>

      </section>

      {/* Esteemed Clients Section */}
      <section className="clients-section" id="clients">
  <div className="section-content">
    <h2>Esteemed Clients</h2>

    {/* Second div with logo container */}
    <div className="logo-container">
      <div className="logo-title animate-slide-top"></div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={5}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>



      
 {/* Application Section 2 */}
      <section
      className="application-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      id="application"
    >
      <div className="section-content">
        <h2>OUR APPLICATIONS</h2>
        <p>Explore our products and services.</p>
      </div>
    </section>
    </div>
  );
};

export default Home;
