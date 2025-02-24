// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "./herosection.css";
// import { motion } from "framer-motion";
// import image1 from "../../Images/images-hoses.webp";
// import image2 from "../../Images/car.avif";
// import image3 from "../../Images/hoses2.jpg";

// const images = [
//   { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
//   { src: image2, text: "DESIGNED TO PERFORM" },
//   // { src: image3, text: "Quality at its Best" },
// ];

// const HomePage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically switch images every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="homepage-container">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="swiper-container"
//       >
//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide-container">
//               {/* Image with Zoom and Roll-in Animation */}
//               <motion.img
//                 src={item.src}
//                 alt={`Slide ${index + 1}`}
//                 className="slide-image"
//                 initial={{ x: "100%", scale: 1.1, filter: "blur(10px)" }} // Start with blur and zoomed-in effect
//                 animate={{ x: 0, scale: 1, filter: "blur(0px)" }} // Remove blur and zoom to normal
//                 exit={{ x: "-100%" }} // Exit animation (slide out)
//                 transition={{
//                   duration: 1.5,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* Overlay with subtle fade-in effect */}
//               <motion.div
//                 className="slide-overlay"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.7 }} // Overlay fades in gradually
//                 transition={{ duration: 1 }}
//               >
//                 {/* Text with Multiple Animation Effects */}
//                 <motion.h1
//                   className="slide-text"
//                   initial={{ opacity: 0, y: "50px", scale: 0.9 }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     rotate: [0, 5, -5, 0], // Added rotation effect to text
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     delay: 0.3,
//                     ease: "easeOut",
//                   }}
//                 >
//                   {item.text}
//                 </motion.h1>
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HomePage;


import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { gsap } from "gsap";
import image2 from "../../Images/images-hoses.webp";
import image1 from "../../Images/car.avif";
import image3 from "../../Images/homehose.png";
import "./herosection.css";

const images = [
  { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
  { src: image2, text: "DESIGNED TO PERFORM", backgroundColor: "black" },
  { src: image3, text: "Sheetal Rubber Products (P) Ltd.", backgroundColor: "black" },
];

const HomePage = () => {
  const slideRefs = useRef([]);
  const textRefs = useRef([]);
  const swiperRef = useRef(null);

 
  useEffect(() => {
  const animateSlide = (index) => {
    const slide = slideRefs.current[index];
    const text = textRefs.current[index];

    if (!slide || !text) return;

    const isSecondImage = index === 0; // Keep animation unchanged for image2
    const isFirstImage = index === 1;
    const isThirdImage = index === 2;

    if (isSecondImage) {
      // 🚀 Keep image2 animation unchanged (Slide in from Right)
      gsap.fromTo(
        slide,
        { opacity: 1, y: 20, x: "100%" },
        { opacity: 1, y: 0, x: 0, duration: 1.5, ease: "power5.out" }
      );
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.6, ease: "power2.out" }
      );
    } else if (isFirstImage) {
      //  Image 1: Randomized Fade + Rotate Animation
      const randomRotation = Math.random() * 20 - 10; // Random rotation between -10 to 10 degrees
      gsap.fromTo(
        slide,
        { opacity: 0, scale: 0.8, rotate: randomRotation },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.5, ease: "power2.out" }
      );
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.3, ease: "power2.out" }
      );
    } else if (isThirdImage) {
      // 🔄 Image 3: Flip Effect + Opacity Animation
      gsap.fromTo(
        slide,
        { opacity: 0, rotateY: 90 },
        { opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" }
      );
      gsap.fromTo(
        text,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, delay: 0.3, ease: "power3.out" }
      );
    }
  };

  if (swiperRef.current) {
    swiperRef.current.on("slideChange", () => {
      animateSlide(swiperRef.current.realIndex);
    });

    animateSlide(0); // Initial animation on load
  }
}, []);

  
  return (
    <div className="homepage-container">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="swiper-container"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <img
                ref={(el) => (slideRefs.current[index] = el)}
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
              <div className="slide-overlay">
                <h1 ref={(el) => (textRefs.current[index] = el)} className="slide-text">
                  {item.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage; 