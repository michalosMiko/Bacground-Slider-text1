import React, { useState, useEffect } from 'react';
import './Slider.css';
import movie1 from './images/movie1.png';
import movie2 from './images/movie2.png';
import movie3 from './images/movie3.png';

const Bslider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalTime, setIntervalTime] = useState(3000); // stav pro časový interval
  const images = [movie1, movie2, movie3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, intervalTime); // použití intervalTime pro časový interval
    return () => clearInterval(interval);
  }, [currentImage, images.length, intervalTime]); // přidání intervalTime jako závislosti

  // funkce pro změnu intervalu
  const handleIntervalChange = (e) => {
    setIntervalTime(parseInt(e.target.value, 10));
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="interval-control">
        <label htmlFor="interval">Interval: </label>
        <input
          type="number"
          id="interval"
          name="interval"
          min="1000"
          max="10000"
          step="1000"
          value={intervalTime}
          onChange={handleIntervalChange}
        /> ms
      </div>
    </div>
  );
};

export default Bslider;
