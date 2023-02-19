import { useState, useEffect } from 'react';
import "./Slider.css"
import movie1 from './images/movie1.png';
import movie2 from './images/movie2.png';
import movie3 from './images/movie3.png';
// TENTO SLIDER je připraven k použití
// npm install react react-dom

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [movie1, movie2, movie3];
  // captions1 je první text od shora -  nadpis
  const captions1 = [
    "Text k obrázku 1",
    "Text k obrázku 2",
    "Text k obrázku 3"
  ];
  // captions2 je druhý text o shora a dále se přidává 3,4,5, obsah
  const captions2 = [
    "Druhý text k obrázku 1",
    "Druhý text k obrázku 2",
    "Druhý text k obrázku 3"
  ];
// zde se přidává text a dole v slider-caption se přidá classa 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 7000);
    // nastavení rychlosti intervalu
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* zde se přidávají div k textu */}
          <div className="slider-caption">
            <div className='hero'><h1>{captions1[index]}</h1></div>
            
            <h2>{captions2[index]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Slider;
