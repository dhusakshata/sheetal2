

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { gsap } from "gsap";
// import image1 from "../../Images/car.avif";
// import image2 from "../../Images/images-hoses.webp";

// import image3 from "../../Images/homehose.png";
// import "./herosection.css";

// const images = [
//   { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
//   { src: image2, text: "DESIGNED TO PERFORM", backgroundColor: "black" },
//   { src: image3, text: "Sheetal Rubber Products (P) Ltd.", backgroundColor: "black" },
// ];

// const HomePage = () => {
//   const slideRefs = useRef([]);
//   const textRefs = useRef([]);
//   const swiperRef = useRef(null);

 
// //   useEffect(() => {
// //   const animateSlide = (index) => {
// //     const slide = slideRefs.current[index];
// //     const text = textRefs.current[index];

// //     if (!slide || !text) return;

// //     const isSecondImage = index === 0; 
// //     const isFirstImage = index === 1;
// //     const isThirdImage = index === 2;

// //     if (isSecondImage) {
// //       // 🚀 Keep image2 animation unchanged (Slide in from Right)
// //       gsap.fromTo(
// //         slide,
// //         { opacity: 1, y: 20, x: "100%" },
// //         { opacity: 1, y: 0, x: 0, duration: 1.5, ease: "power5.out" }
// //       );
// //       gsap.fromTo(
// //         text,
// //         { opacity: 0, y: 50 },
// //         { opacity: 1, y: 0, duration: 1.5, delay: 0.6, ease: "power2.out" }
// //       );
// //     } else if (isFirstImage) {
// //       //  Image 1: Randomized Fade + Rotate Animation
// //       const randomRotation = Math.random() * 20 - 10; // Random rotation between -10 to 10 degrees
// //       gsap.fromTo(
// //         slide,
// //         { opacity: 0.7, scale: 1.1, rotate: randomRotation },
// //         { opacity: 1, scale: 1, rotate: 0, duration: 1.8, ease: "power3.out" }
// //       );
// //       gsap.fromTo(
// //         text,
// //         { opacity: 0.5, y: 30, scale: 0.95 }, // Start semi-visible and slightly smaller
// //     { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: "power3.out" }
// //       );
// //     } else if (isThirdImage) {
// //       // 🔄 Image 3: Flip Effect + Opacity Animation
// //       gsap.fromTo(
// //         slide,
// //         { opacity: 0, rotateY: 90 },
// //         { opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" }
// //       );
// //       gsap.fromTo(
// //         text,
// //         { opacity: 0, y: 30, scale: 0.8 },
// //         { opacity: 1, y: 0, scale: 1, duration: 1.5, delay: 0.3, ease: "power3.out" }
// //       );
// //     }
// //   };

// //   if (swiperRef.current) {
// //     swiperRef.current.on("slideChange", () => {
// //       animateSlide(swiperRef.current.realIndex);
// //     });

// //     animateSlide(0); // Initial animation on load
// //   }
// // }, []);

// useEffect(() => {
//   const animateSlide = (index) => {
//     const slide = slideRefs.current[index];
//     const text = textRefs.current[index];

//     if (!slide || !text) return;

//     // ✅ Kill previous tweens to avoid overlaps
//     gsap.killTweensOf([slide, text]);

//     // ✅ Set opacity to 1 and reset transforms to prevent flicker
//     gsap.set(slide, { opacity: 1, clearProps: "transform" });
//     gsap.set(text, { opacity: 1, clearProps: "transform" });

//     const isSecondImage = index === 0;
//     const isFirstImage = index === 1;
//     const isThirdImage = index === 2;

//     if (isSecondImage) {
//       // 🚀 Image2 animation (unchanged)
//       gsap.fromTo(
//         slide,
//         { y: 20, x: "100%" },
//         { y: 0, x: 0, duration: 1.5, ease: "power5.out" }
//       );
//       gsap.fromTo(
//         text,
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.5, delay: 0.6, ease: "power2.out" }
//       );
//     }
//     else if (isFirstImage) {
//       const randomRotation = Math.random() * 20 - 10;
//       gsap.fromTo(
//         slide,
//         { opacity: 0, y: 50, scale: 1.1, rotate: randomRotation },
//         { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 2, ease: "power3.out" }
//       );
//       gsap.fromTo(
//         text,
//         { opacity: 0, y: 40, scale: 0.9 },
//         { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power3.out", delay: 0.3 }
//       );
//     }
    
//     else if (isThirdImage) {
//       // 🔄 Image3 animation (unchanged)
//       gsap.fromTo(
//         slide,
//         { rotateY: 90 },
//         { rotateY: 0, duration: 1.2, ease: "power3.out" }
//       );
//       gsap.fromTo(
//         text,
//         { y: 30, scale: 0.8, opacity: 0 },
//         { y: 0, scale: 1, opacity: 1, duration: 1.5, delay: 0.3, ease: "power3.out" }
//       );
//     }
//   };

//   if (swiperRef.current) {
//     swiperRef.current.on("slideChange", () => {
//       animateSlide(swiperRef.current.realIndex);
//     });

//     animateSlide(0); // Initial animation on load
//   }
// }, []);

  
//   return (
//     <div className="homepage-container">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="swiper-container"
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide-container"
//               style={{ backgroundColor: item.backgroundColor }}
//             >
//               <img
//                 ref={(el) => (slideRefs.current[index] = el)}
//                 src={item.src}
//                 alt={`Slide ${index + 1}`}
//                 className="slide-image"
//               />
//               <div className="slide-overlay">
//                 <h1 ref={(el) => (textRefs.current[index] = el)} className="slide-text">
//                   {item.text}
//                 </h1>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HomePage; 

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { gsap } from "gsap";
// import image1 from "../../Images/car.avif";
// import image2 from "../../Images/images-hoses.webp";
// import image3 from "../../Images/homehose.png";
// import "./herosection.css";

// const images = [
//   { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
//   { src: image2, text: "DESIGNED TO PERFORM", backgroundColor: "black" },
//   { src: image3, text: "Sheetal Rubber Products (P) Ltd.", backgroundColor: "black" },
// ];

// const HomePage = () => {
//   const slideRefs = useRef([]);
//   const textRefs = useRef([]);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const animateSlide = (index) => {
//       const slide = slideRefs.current[index];
//       const text = textRefs.current[index];

//       if (!slide || !text) return;

//       // ✅ Kill previous animations to avoid flickering
//       gsap.killTweensOf([slide, text]);

//       // ✅ Reset opacity and clear transforms to prevent flicker
//       gsap.set(slide, { opacity: 1, clearProps: "transform" });
//       gsap.set(text, { autoAlpha: 1, visibility: "visible", clearProps: "transform" });

//       const isSecondImage = index === 0;
//       const isFirstImage = index === 1;
//       const isThirdImage = index === 2;

//       if (isSecondImage) {
//         // 🚀 Image2 Animation (Slide from Right)
//         gsap.fromTo(
//           slide,
//           { y: 20, x: "100%" },
//           { y: 0, x: 0, duration: 1.5, ease: "power5.out" }
//         );
//         gsap.fromTo(
//           text,
//           { autoAlpha: 0, visibility: "hidden", y: 20, scale: 0.95 },
//           {
//             autoAlpha: 1,
//             visibility: "visible",
//             y: 0,
//             scale: 1,
//             duration: 2,
//             delay: 0.3,
//             ease: "expo.out",
//             overwrite: "auto",
//             force3D: true,
//           }
//         );
//       } else if (isFirstImage) {
//         // 🎯 Image1 Animation (Subtle Scale-In)
//         gsap.fromTo(
//           slide,
//           { opacity: 0, y: 30, scale: 1.05 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 2,
//             ease: "expo.out",
//             overwrite: "auto",
//           }
//         );
//         gsap.fromTo(
//           text,
//           { autoAlpha: 0, visibility: "hidden", y: 20, scale: 0.95 },
//           {
//             autoAlpha: 1,
//             visibility: "visible",
//             y: 0,
//             scale: 1,
//             duration: 2,
//             delay: 0.3,
//             ease: "expo.out",
//             overwrite: "auto",
//             force3D: true,
//           }
//         );
//       } else if (isThirdImage) {
//         // 🔄 Image3 Animation (Flip Effect)
//         gsap.fromTo(
//           slide,
//           { rotateY: 90 },
//           { rotateY: 0, duration: 1.2, ease: "power3.out" }
//         );
//         gsap.fromTo(
//           text,
//           { autoAlpha: 0, visibility: "hidden", y: 20, scale: 0.95 },
//           {
//             autoAlpha: 1,
//             visibility: "visible",
//             y: 0,
//             scale: 1,
//             duration: 2,
//             delay: 0.3,
//             ease: "expo.out",
//             overwrite: "auto",
//             force3D: true,
//           }
//         );
//       }
//     };

//     if (swiperRef.current) {
//       swiperRef.current.on("slideChange", () => {
//         animateSlide(swiperRef.current.realIndex);
//       });

//       animateSlide(0); // Run animation on the first slide initially
//     }
//   }, []);

//   return (
//     <div className="homepage-container">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="swiper-container"
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide-container" style={{ backgroundColor: item.backgroundColor }}>
//               <img
//                 ref={(el) => (slideRefs.current[index] = el)}
//                 src={item.src}
//                 alt={`Slide ${index + 1}`}
//                 className="slide-image"
//               />
//               <div className="slide-overlay">
//                 <h1 ref={(el) => (textRefs.current[index] = el)} className="slide-text">
//                   {item.text}
//                 </h1>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { gsap } from "gsap";
// import image1 from "../../Images/car.avif";
// import image2 from "../../Images/images-hoses.webp";
// import image3 from "../../Images/homehose.png";
// import "./herosection.css";

// const images = [
//   { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
//   { src: image2, text: "DESIGNED TO PERFORM", backgroundColor: "black" },
//   { src: image3, text: "Sheetal Rubber Products (P) Ltd.", backgroundColor: "black" },
// ];

// const HomePage = () => {
//   const slideRefs = useRef([]);
//   const textRefs = useRef([]);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const animateSlide = (index) => {
//       const slide = slideRefs.current[index];
//       const text = textRefs.current[index];

//       if (!slide || !text) return;

//       // ✅ Kill previous animations before applying new ones
//       gsap.killTweensOf([slide, text]);

//       // ✅ Ensure opacity is reset before animations start
//       gsap.set(slide, { opacity: 1, clearProps: "transform" });
//       gsap.set(text, { opacity: 1, clearProps: "transform" });

//       if (index === 0) {
//         // 🚀 Image2: Slide-in from right
//         gsap.fromTo(
//           slide,
//           { x: "100%", opacity: 0 },
//           { x: "0%", opacity: 1, duration: 1.5, ease: "power5.out" }
//         );
//         gsap.fromTo(
//           text,
//           { opacity: 0, y: 30 },
//           { opacity: 1, y: 0, duration: 1.5, delay: 0.4, ease: "power3.out" }
//         );
//       } else if (index === 1) {
//         // 🎯 Image1: Subtle fade-in and scale
//         gsap.fromTo(
//           slide,
//           { opacity: 0, scale: 1.05 },
//           { opacity: 1, scale: 1, duration: 1.8, ease: "expo.out" }
//         );
//         gsap.fromTo(
//           text,
//           { opacity: 0, y: 30, scale: 0.95 },
//           { opacity: 1, y: 0, scale: 1, duration: 1.5, delay: 0.4, ease: "power3.out" }
//         );
//       } else if (index === 2) {
//         // 🔄 Image3: Flip-in effect
//         gsap.fromTo(
//           slide,
//           { rotateY: 90, opacity: 0 },
//           { rotateY: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//         );
//         gsap.fromTo(
//           text,
//           { opacity: 0, y: 30, scale: 0.95 },
//           { opacity: 1, y: 0, scale: 1, duration: 1.5, delay: 0.4, ease: "power3.out" }
//         );
//       }
//     };

//     if (swiperRef.current) {
//       swiperRef.current.on("slideChange", () => {
//         animateSlide(swiperRef.current.realIndex);
//       });

//       animateSlide(0); // Run animation on first slide initially
//     }
//   }, []);

//   return (
//     <div className="homepage-container">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="swiper-container"
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide-container" style={{ backgroundColor: item.backgroundColor }}>
//               <img
//                 ref={(el) => (slideRefs.current[index] = el)}
//                 src={item.src}
//                 alt={`Slide ${index + 1}`}
//                 className="slide-image"
//               />
//               <div className="slide-overlay">
//                 <h1 ref={(el) => (textRefs.current[index] = el)} className="slide-text">
//                   {item.text}
//                 </h1>
//               </div>
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
import image1 from "../../Images/car.avif";
import image2 from "../../Images/images-hoses.webp";
import image3 from "../../Images/hoseshome.avif";
import "./herosection.css";

const images = [
  { src: image1, text: "Sheetal Rubber Products (P) Ltd." },
  { src: image2, text: "DESIGNED TO PERFORM", backgroundColor: "black" },
  { src: image3, text: "Sheetal Rubber Products (P) Ltd.", backgroundColor: "black" },
];

const HomePage = () => {
  const slideRefs = useRef([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const animateSlide = (index) => {
      const slide = slideRefs.current[index];

      if (!slide) return;

      gsap.killTweensOf(slide);
      gsap.set(slide, { opacity: 1, clearProps: "transform" });

      if (index === 0) {
        gsap.fromTo(
          slide,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5, ease: "power5.out" }
        );
      } else if (index === 1) {
        gsap.fromTo(
          slide,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.8, ease: "expo.out" }
        );
      } else if (index === 2) {
        gsap.fromTo(
          slide,
          { rotateY: 90, opacity: 0 },
          { rotateY: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        );
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        animateSlide(swiperRef.current.realIndex);
      });

      animateSlide(0);
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
            <div className="slide-container" style={{ backgroundColor: item.backgroundColor }}>
              <img
                ref={(el) => (slideRefs.current[index] = el)}
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
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
