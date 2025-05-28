import React, { useEffect, useState } from 'react';
import banner1 from '../../../../src/assets/banner1.png'; // Make sure the path is correct
import banner2 from '../../../../src/assets/banner2 (1).png'; // Make sure the path is correct
import banner3 from '../../../../src/assets/banner3.png'; // Make sure the path is correct

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      title: 'Homeo - Original Remedies,  Real Results',
      description:
        'Discover authentic R Homeo medicines made for natural, side-effect-free healing. Trusted by experts, loved by patients.',
      buttonText: 'Shop Originals',
      buttonColor: 'bg-white',
    },
    {
      image: banner2,
       title: 'Kent Homeo – Heal Naturally, Live Fully',
      description:
        'Experience the power of authentic Kent Homeo medicines. 100% original remedies trusted by millions for safe.',
      buttonText: 'Shop Now',
      buttonColor: 'bg-white',
    },
    {
      image: banner3,
      title: 'Natural and Holistic Healing',
      description:
        'Homeopathy treats the whole person, not just symptoms. It aims to restore balance by triggering the body’s natural healing mechanisms—gently and effectively',
      buttonText: 'Discover',
      buttonColor: 'bg-white',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10">
            <h1 className="text-5xl font-bold text-white mb-4 max-w-3xl" >
              {slide.title}
            </h1>
            <p className="text-lg text-white max-w-xl mb-6"  style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>{slide.description}</p>
            <button
              className= {`${slide.buttonColor}  text-black px-6 py-3 rounded-2xl font-semibold ` }
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
