// SliderSection.js

import React, { useState } from 'react';

const SliderSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 1, imgUrl: 'assets/img/slider/slider1.jpg' },
    { id: 2, imgUrl: 'image2.jpg' },
    { id: 3, imgUrl: 'image3.jpg' },
  ];

  const nextSlide = () => {
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  }

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  }

  return (
    <div className="slider-section">
      <button onClick={prevSlide}>Previous</button>
      <img src={slides[activeSlide].imgUrl} alt={`Slide ${activeSlide + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default SliderSection;
