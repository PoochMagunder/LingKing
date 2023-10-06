import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );

    };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className='slideshow'>
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index + 1}`}
        className={index === currentSlide ? 'active' : ''}
      />
    ))}
    <a class="prev" onClick={nextSlide}>&#10094;</a>
    <a class="next" onClick={prevSlide}>&#10095;</a>
   </div>

  );
};

export default Slideshow;