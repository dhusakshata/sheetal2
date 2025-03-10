import React,{ useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules"; // Correct way to import Navigation
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowDownCircle } from "react-icons/bs";
import ProductSection2 from "./Productsection2.js";
import GetInTouch from "../GetInTouch.js";
import HeroSection from "./herosection.js";
import Banner from "./banner.js";

//Logos
import logo1 from "../../Images/client1.png"; 
import logo2 from "../../Images/client2.jpg";
import logo3 from "../../Images/client3.png";
import logo4 from "../../Images/client4.jpg";
import logo5 from "../../Images/client5.png";
import logo6 from "../../Images/client6.png";
import logo7 from "../../Images/client7.png";


// Application Area Images
import Img1 from "../../Images/Commercial-Vehicle.png";
import Img2 from "../../Images/marine3.jpg";
import Img3 from "../../Images/Aviation.jpg";
import Img4 from "../../Images/Image4.png";
import Img5 from "../../Images/automotive-rubber-hoses.jpg";
import Img6 from "../../Images/Agricultural-Spray-Hose.jpg";
import Img7 from "../../Images/military.jpg";
import Img8 from "../../Images/off-highway-truck.jpg";
import Img9 from "../../Images/mining.jpg";
import Img10 from "../../Images/railway.png";



const Home = () => {
  const [backgroundChanged, setBackgroundChanged] = useState(false);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setBackgroundChanged(true);
    };

    const animatedText = document.querySelector(".animated-text");
    if (animatedText) {
      animatedText.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (animatedText) {
        animatedText.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);



 // Array of imported images
 const images = [
  { src: Img1, name: "Automobiles" },
  { src: Img2, name: "Marine" },
  { src: Img3, name: "Aviation" },
  { src: Img4, name: "Construction" },
  { src: Img5, name: "Automobile" },
  { src: Img6, name: "Agriculture" },
  { src: Img7, name: "Defence" },
  { src: Img8, name: "OffHighway" },
  { src: Img9, name: "Minning" },
  { src: Img10, name: "Railway" },
];

//  const [currentIndex, setCurrentIndex] = useState(0);

//  // Automatically switch images every 3 seconds
//  useEffect(() => {
//    const interval = setInterval(() => {
//      setCurrentIndex((prevIndex) =>
//        prevIndex === images.length - 1 ? 0 : prevIndex + 1
//      );
//    }, 3000); // Change slide every 3 seconds

//    return () => clearInterval(interval); // Cleanup on component unmount
//  }, [images.length]);

const [currentIndex, setCurrentIndex] = useState(0);
const [loaded, setLoaded] = useState(true); // Track loading state

// Preload images
useEffect(() => {
  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setLoaded(false); // Start fade-out effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setLoaded(true); // Start fade-in effect after changing image
    }, 500); // Match CSS transition duration
  }, 3000); // Change every 3 seconds

  return () => clearInterval(interval);
}, []);



  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];



  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  
  

  return (
    <div>
      {/* <Banner/> */}
   <HeroSection/>

      {/* About Us Section */}
<section className="about-section" id="about">
  <div className="overlay1">
    <div className="section-content  about-content">
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
            <Link to="/Aboutus">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Product Section */}
      <section className="product-section" id="product">
      <div className="section-content">
        <h2 className="main-product-heading">OUR PRODUCTS</h2>
        <p>
          At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including:
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
      
        <ProductSection2 />
      </div>
    </section>
 {/* Application Section 2*/}

<section className="app-sec">
<section className="application-section2" id="application-2">
  <div className="section-content  ">
    <div className="trusted-clients">
      <h2>TRUSTED BY CLIENTS</h2>
      <p>
        At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including:
      </p>
      <p>
        <b>
          <Link to="/siliconpolyester"> Silicone Polyester Hoses</Link>, 
          <Link to="/turbochargerhose">Turbocharger Hoses</Link>, 
          <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>, 
          <Link to="/epdm">EPDM Rubber Hoses</Link>, 
          <Link to="/organic">Organic Rubber Hoses</Link>, 
          <Link to="/assembly">Assembly Hoses</Link>, 
          <Link to="/wired">Wire Reinforced Hoses</Link>, 
          <Link to="/fueltube">Fuel Hoses</Link>, 
          <Link to="/moulded">Moulded Hoses </Link>.
        </b>
      </p>
      <p>
      Our commitment to quality and precision engineering ensures reliable performance, even in the most demanding environments.
      </p>
    </div>
  </div>
</section> 
</section>



   
  {/* Esteemed Clients Section */}
  <section className="clients-section" id="clients">
  <div className="section-content">
    <h2>Esteemed Clients</h2>
    <div className="logo-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        slidesPerView={5} // Show 5 logos by default
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 5, // 5 logos for large screens
          },
          768: {
            slidesPerView: 3, // 3 logos for medium screens
          },
          380: {
            slidesPerView: 2, // 2 logos for small screens
          },
        }}
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


      
 {/* Application Section  */}
      {/* <section
      className="application-section"
      style={{ backgroundImage: `url(${images[currentIndex].src})` ,
     backgroundSize: "contain",
        backgroundPosition: "center",
    }}
      id="application"
    >
      <div className="section-content   application-content">
        
       
       <h3 className="image-name">{images[currentIndex].name}</h3>

      </div>
      
    </section> */}
 <section
    className={`application-section ${loaded ? "fade-in" : "fade-out"}`}
    style={{
      backgroundImage: `url(${images[currentIndex].src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    id="application"
  >
    <div className="section-content application-content">
      <h3 className="image-name">{images[currentIndex].name}</h3>
    </div>
  </section>


 <section className="getin-touch">
{/* <GetInTouch /> */}
  </section> 
  

    </div>
  );
};

export default Home;
