import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import image1 from "../../Images/car.avif";
import image2 from "../../Images/images-hoses.webp";
import image3 from "../../Images/homehose.png";
import "./herosection.css";

const images = [
  { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
  { src: image2, text: "DESIGNED TO PERFORM" },
  { src: image3, text: "Sheetal Rubber Products (P) Ltd." },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="swiper-container"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={item.src} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="slide-overlay">
                <h1 className="slide-text">{item.text}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;
