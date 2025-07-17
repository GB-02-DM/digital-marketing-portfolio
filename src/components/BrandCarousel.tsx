import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import all brand logos
import brand1 from '../assets/brands/brand1.png';
import brand2 from '../assets/brands/brand2.png';
import brand3 from '../assets/brands/brand3.png';
import brand4 from '../assets/brands/brand4.png';
import brand5 from '../assets/brands/brand5.png';
import brand6 from '../assets/brands/brand6.png';
import brand7 from '../assets/brands/brand7.png';
import brand8 from '../assets/brands/brand8.png';
import brand9 from '../assets/brands/brand9.png';
import brand10 from '../assets/brands/brand10.png';
import brand11 from '../assets/brands/brand11.png';
import brand12 from '../assets/brands/brand12.png';
import brand13 from '../assets/brands/brand13.png';
import brand14 from '../assets/brands/brand14.png';


// Define brand data with name and image
const brandData = [
  { name: "Eaoron", image: brand10 },
  { name: "Dimple Fashion", image: brand6 },
  { name: "Yoko Sizzlers", image: brand8 },
  { name: "Tawow", image: brand11 },
  { name: "Fishermans Hub", image: brand7 },
  { name: "DayDome", image: brand1 },
  { name: "Chicking", image: brand2 },
  { name: "Tent House", image: brand3 },
  { name: "Sportsbay", image: brand4 },
  { name: "Neptune Yachts", image: brand5 },
  { name: "Desco", image: brand9 },
  { name: "K85", image: brand12 },
  { name: "Mojo", image: brand13 },
  { name: "SportsBay", image: brand14 }
];

interface BrandCarouselProps {
  speed?: number; // Speed of the carousel in seconds
  pauseOnHover?: boolean; // Whether to pause the carousel on hover
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({
  speed = 30,
  pauseOnHover = true,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-gray-900/30 py-8 backdrop-blur-sm">
      <div className="flex flex-col gap-12">
        {/* First row - left to right */}
        <div className="marquee-container">
          <div 
            className={`marquee ${isPaused ? 'paused' : ''}`}
            style={{ '--duration': `${speed}s` } as React.CSSProperties}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
          >
            <div className="marquee-content">
              {brandData.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="marquee-item">
                  <motion.img
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    className="h-16 md:h-20 w-auto object-contain transition-all duration-300 opacity-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {brandData.map((brand, index) => (
                <div key={`${brand.name}-duplicate-${index}`} className="marquee-item">
                  <motion.img
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    className="h-16 md:h-20 w-auto object-contain transition-all duration-300 opacity-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Second row - right to left */}
        <div className="marquee-container">
          <div 
            className={`marquee-reverse ${isPaused ? 'paused' : ''}`}
            style={{ '--duration': `${speed * 1.5}s` } as React.CSSProperties}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
          >
            <div className="marquee-content">
              {brandData.slice().reverse().map((brand, index) => (
                <div key={`${brand.name}-reverse-${index}`} className="marquee-item">
                  <motion.img
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    className="h-16 md:h-20 w-auto object-contain transition-all duration-300 opacity-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {brandData.slice().reverse().map((brand, index) => (
                <div key={`${brand.name}-reverse-duplicate-${index}`} className="marquee-item">
                  <motion.img
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    className="h-16 md:h-20 w-auto object-contain transition-all duration-300 opacity-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel; 