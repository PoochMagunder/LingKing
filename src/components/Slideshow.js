import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  </div>
  );
};

export default Slideshow;