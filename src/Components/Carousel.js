import React, { useState, useEffect } from 'react';
import LeftArrow from '../assets/left.svg';
import RightArrow from '../assets/right.svg';

function Carousel({ children, slidesToShow }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Go to the next slide
  const next = () => {
    if (currentIndex < (length - slidesToShow)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Go to the previous slide
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Update the length of the carousel when children change
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  // Carousel styles
  const carouselStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align children to the start of the container
    position: 'relative',
    background: '#121212',
    flexDirection: 'row', // Aligns children in a row
    flexWrap: 'wrap',    // Allows items to wrap to new line on smaller screens
    gap: '1rem',         // Space between items
    padding: '1rem'      // Padding around the entire container
  };

  const sliderStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentIndex * 100 / slidesToShow}%)`,
  };

  const itemStyle = {
    //flex: `0 0 ${100 / slidesToShow}%`, // Each child will take up equal space
    // Remove left margin if you have added it in your actual item style
    //padding: '4px 8px',
    margin: '4px 8px',
    left: '8px',
    gap:'1px',
    right: '1rem',
  };
  

  // Make sure the arrows are visible and clickable
  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 2, // Make sure arrows are above the slider
    background: 'none',
    border: 'none',
  };

  const arrowLeftStyle = {
    ...arrowStyle,
    left: 0,
  };

  const arrowRightStyle = {
    ...arrowStyle,
    right: 0,
  };

  return (
    <div style={carouselStyle}>
      {/* Left Arrow */}
      <img src={LeftArrow} alt="RightArrow" onClick={prev} style={arrowLeftStyle}>
      </img>

      {/* Slides */}
      <div style={sliderStyle}>
        {React.Children.map(children, (child) => (
          <div style={itemStyle}>{child}</div>
        ))}
      </div>

      {/* Right Arrow */}
      <img src={RightArrow} alt="RightArrow" onClick={next} style={arrowRightStyle}>
        
      </img>
    </div>
  );
}

export default Carousel;
