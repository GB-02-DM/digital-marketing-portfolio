import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BrandCarousel from './BrandCarousel';
import { CanvasRevealEffect } from './CanvasRevealEffect';
import { SparklesCore } from './SparklesCore';

// Import work images
import sportsbayCampaign from '../assets/work/SportsBay.png';
import chickingCampaign from '../assets/work/Chicking.png';
import neptuneYachtsCampaign from '../assets/work/neptune_yachts.png';
import yokoDubaiCampaign from '../assets/work/YokoDubai.png';
import ksCampaign from '../assets/work/K&S.png';

// Import brand logos
import sportsbayLogo from '../assets/brands/brand4.png';
import chickingLogo from '../assets/brands/brand3.png';
import neptuneYachtsLogo from '../assets/brands/brand7.png';
import yokoLogo from '../assets/brands/brand12.png';
import ksLogo from '../assets/brands/brand4.png';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{children}</h2>
    <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
  </div>
);

const workItems = [
  {
    img: sportsbayCampaign,
    logo: sportsbayLogo,
    title: "SportsBay",
    desc: "Instagram Reel creation and promotion for sports equipment retailer.",
    link: "https://www.instagram.com/reel/DJpHIaFzRUT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
  },
  {
    img: chickingCampaign,
    logo: chickingLogo,
    title: "Chicking",
    desc: "Viral TikTok video production for fast food restaurant chain.",
    link: "https://www.tiktok.com/@chickinguae"
  },
  {
    img: neptuneYachtsCampaign,
    logo: neptuneYachtsLogo,
    title: "Neptune Yachts",
    desc: "Luxury lifestyle content strategy and social media management.",
    link: "https://www.instagram.com/reel/DF7vcYOtr5X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
  },
  {
    img: yokoDubaiCampaign,
    logo: yokoLogo,
    title: "Yoko Sizzlers",
    desc: "Food photography and Instagram content creation for restaurant.",
    link: "https://www.instagram.com/reel/C_dTbS7SRyj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
  },
  {
    img: ksCampaign,
    logo: ksLogo,
    title: "K&S",
    desc: "Brand identity and digital marketing campaign for retail store.",
    link: "https://www.instagram.com/explore/tags/kscampaign"
  },
  {
    isExtra: true,
    title: "And many more ongoing projects...",
    desc: "From AI-powered ad campaigns to stunning poster designs, digital photography, and creative content for leading brands. The journey of innovation and impact continues—driven by data, design, and the latest in generative AI.",
    ai: true,
  }
];

// Gradient Card for each work item
function WorkGradientCard({ img, logo, title, desc, link, isExtra, ai }: { img?: string, logo?: string, title: string, desc: string, link?: string, isExtra?: boolean, ai?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;
      setRotation({ x: rotateX, y: rotateY });
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-[32px] overflow-hidden shadow-xl mx-auto flex flex-col justify-between ${isExtra ? 'bg-black' : ''}`}
      style={{
        width: "100%",
        maxWidth: 360,
        height: 450,
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Sparkling effect background for extra card (always visible) */}
      {isExtra && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore particleDensity={24} maxSize={2} minSize={0.7} speed={1} className="absolute inset-0 w-full h-full" background="transparent" />
        </div>
      )}
      {/* Overlays and glows (z-0) */}
      {!isExtra && (
        <>
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, #000000 0%, #000000 70%)" }}
            animate={{ z: 0 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2/3 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.7) -10%, rgba(79, 70, 229, 0) 70%),radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.7) -10%, rgba(79, 70, 229, 0) 70%)`,
              filter: "blur(40px)",
            }}
            animate={{ opacity: isHovered ? 0.9 : 0.8, y: isHovered ? rotation.x * 0.5 : 0, z: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(2px)",
            }}
            animate={{
              opacity: isHovered ? 0.7 : 0.5,
              rotateX: -rotation.x * 0.2,
              rotateY: -rotation.y * 0.2,
              z: 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </>
      )}
      {/* Card content (z-10) */}
      <div className={`relative z-10 flex flex-col h-full justify-between ${isExtra ? 'items-start text-left' : ''}`}>
        {/* Top row: title and logo or AI icon */}
        <div className={`flex items-center justify-between px-7 pt-7 pb-2 w-full ${isExtra ? 'pl-7 pr-7' : ''}`}>
          <h3 className={`text-xl font-bold text-white pr-2 ${isExtra ? 'truncate text-left' : 'truncate'}`} style={{ maxWidth: 180 }}>{title}</h3>
          {ai ? (
            <motion.div
              className="rounded-full p-2 shadow-md flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-blue-400 via-fuchsia-400 to-indigo-600"
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0px 0px #fff, 0 0 0px 0px #a3e3ff",
                  "0 0 8px 4px #fff, 0 0 16px 8px #a3e3ff",
                  "0 0 0px 0px #fff, 0 0 0px 0px #a3e3ff"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
            >
              {/* Gemini-like AI icon (stylized star/atom) */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="10" fill="url(#ai-gradient)" />
                <circle cx="14" cy="14" r="5" fill="#fff" fillOpacity="0.8" />
                <defs>
                  <radialGradient id="ai-gradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                    <stop offset="0%" stopColor="#a3e3ff" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          ) : (
            <div className="bg-white/90 rounded-full p-2 shadow-md flex items-center justify-center w-12 h-12">
              {logo && <img src={logo} alt={title + ' logo'} className="w-8 h-8 object-contain" />}
            </div>
          )}
        </div>
        {/* Card image centered with margin (skip for extra card) */}
        {!isExtra && img && (
          <div className="flex justify-center items-center my-3 px-7">
            <img src={img} alt={title} className="rounded-xl object-cover max-h-32 w-auto mx-auto shadow-lg border border-white/10" style={{ maxWidth: '100%', background: '#181c2a' }} />
          </div>
        )}
        {/* Description */}
        <div className={`px-7 mt-2 mb-3 flex-1 flex flex-col justify-center ${isExtra ? 'text-left items-start' : 'text-center'}`}>
          <p className={`text-base text-gray-300 mb-4 ${isExtra ? 'text-left' : 'text-center'}`}>{desc}</p>
        </div>
        {/* View Campaign button (skip for extra card) */}
        {!isExtra && link && (
          <div className="flex justify-center pb-7 pt-2 relative z-20">
            <button
              onClick={() => {
                try {
                  window.open(link, '_blank', 'noopener,noreferrer');
                } catch (error) {
                  console.error('Error opening link:', error);
                  // Fallback: try to navigate directly
                  window.location.href = link;
                }
              }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-md transition-all duration-200 text-sm group cursor-pointer transform hover:scale-105 active:scale-95"
            >
              View Campaign
              <svg className="ml-2 w-4 h-4" width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="bg-[#030303] overflow-x-hidden py-20">
      <div className="container mx-auto px-6 overflow-x-hidden">
        <div className="text-center mb-8">
          <SectionTitle>Brands I've Collaborated With</SectionTitle>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">I've had the privilege of working with a diverse range of fantastic brands across multiple industries.</p>
        </div>
        {/* Brand Carousel */}
        <div className="mb-20 max-w-full overflow-x-hidden">
          <BrandCarousel speed={30} pauseOnHover={true} />
        </div>
        <div className="text-center mb-16">
          <SectionTitle>My Work</SectionTitle>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects and campaigns that showcase my skills in digital marketing and content creation.
          </p>
        </div>
        {/* Gradient Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {workItems.map((item, idx) => (
            <WorkGradientCard key={item.title + (item.isExtra ? '-extra' : '')} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}