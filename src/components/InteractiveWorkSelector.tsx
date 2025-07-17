import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaCamera, FaPalette } from 'react-icons/fa';

// Import work images
import sportsbayCampaign from '../assets/work/SportsBay.png';
import chickingCampaign from '../assets/work/Chicking.png';
import neptuneYachtsCampaign from '../assets/work/neptune_yachts.png';
import yokoDubaiCampaign from '../assets/work/YokoDubai.png';
import ksCampaign from '../assets/work/K&S.png';

// Import brand logos
import sportsbayLogo from '../assets/brands/brand4.png';
import chickingLogo from '../assets/brands/brand2.png';
import neptuneYachtsLogo from '../assets/brands/brand5.png';
import yokoLogo from '../assets/brands/brand8.png';
import ksLogo from '../assets/brands/brand12.png';

interface WorkOption {
  title: string;
  description: string;
  image: string;
  logo: string;
  icon: JSX.Element;
  link: string;
}

const InteractiveWorkSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const workOptions: WorkOption[] = [
    {
      title: "Sportsbay Campaign",
      description: "Instagram Reel creation and promotion for sports equipment retailer",
      image: sportsbayCampaign,
      logo: sportsbayLogo,
      icon: <FaInstagram size={24} className="text-white" />,
      link: "https://www.instagram.com/reel/DJpHIaFzRUT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      title: "Chicking UAE",
      description: "Viral TikTok video production for fast food restaurant chain",
      image: chickingCampaign,
      logo: chickingLogo,
      icon: <FaTiktok size={24} className="text-white" />,
      link: "https://www.tiktok.com/@chickinguae/video/7474903786134179090?is_from_webapp=1"
    },
    {
      title: "Neptune Yachts",
      description: "Luxury lifestyle content strategy and social media management",
      image: neptuneYachtsCampaign,
      logo: neptuneYachtsLogo,
      icon: <FaYoutube size={24} className="text-white" />,
      link: "https://www.tiktok.com/@chickinguae/video/7474903786134179090?is_from_webapp=1"
    },
    {
      title: "Yoko Sizzlers Dubai",
      description: "Food photography and Instagram content creation for restaurant",
      image: yokoDubaiCampaign,
      logo: yokoLogo,
      icon: <FaCamera size={24} className="text-white" />,
      link: "https://www.instagram.com/reel/C_dTbS7SRyj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      title: "K&S Campaign",
      description: "Brand identity and digital marketing campaign for retail store",
      image: ksCampaign,
      logo: ksLogo,
      icon: <FaPalette size={24} className="text-white" />,
      link: "https://www.instagram.com/reel/DGyYujYSe9E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    workOptions.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const handleViewCampaign = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-12 font-sans text-white"> 
      {/* Options Container */}
      <div className="options flex w-full max-w-[1000px] h-[400px] mx-auto items-stretch overflow-hidden relative">
        {workOptions.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: '8px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position',
              marginRight: '8px'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>

            {/* View Campaign Button - Only visible when active */}
            {activeIndex === index && (
              <div 
                className="absolute top-4 right-4 z-20 pointer-events-auto"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'translateY(0)' : 'translateY(-25px)',
                  transition: 'all 0.7s ease-in-out'
                }}
              >
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300"
                  onClick={(e) => handleViewCampaign(e, option.link)}
                >
                  <span>View Campaign</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            {/* Brand Logo - Only visible when active */}
            {activeIndex === index && (
              <div 
                className="absolute top-4 left-4 z-20"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'translateY(0)' : 'translateY(-25px)',
                  transition: 'all 0.7s ease-in-out'
                }}
              >
                <div className="bg-black/70 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <img 
                    src={option.logo} 
                    alt={`${option.title} logo`} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style>
        {`
          @keyframes slideFadeIn {
            0% {
              opacity: 0;
              transform: translateX(-60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInFromTop {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInTop {
            opacity: 0;
            transform: translateY(-20px);
            animation: fadeInFromTop 0.8s ease-in-out forwards;
          }
          
          .delay-300 {
            animation-delay: 0.3s;
          }
          
          .delay-600 {
            animation-delay: 0.6s;
          }
        `}
      </style>
    </div>
  );
};

export default InteractiveWorkSelector; 