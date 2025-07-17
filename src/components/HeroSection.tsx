import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedButton } from './AnimatedButton';
import heroImage from '../assets/hero_image.png';

const CircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" />
  </svg>
);

function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  const cn = (...inputs: (string | undefined)[]) => inputs.filter(Boolean).join(' ');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const GlidingRolesAnimation = () => {
  const [roleNumber, setRoleNumber] = useState(0);
  const roles = useMemo(
    () => ["Digital Marketing Specialist", "Content Strategist", "CRM Expert", "Video Producer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (roleNumber === roles.length - 1) {
        setRoleNumber(0);
      } else {
        setRoleNumber(roleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [roleNumber, roles]);

  return (
    <div className="relative w-full h-32 flex items-center">
      {roles.map((role, index) => (
        <motion.span
          key={index}
          className="absolute bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 font-semibold whitespace-nowrap leading-relaxed"
          style={{ 
            top: '50%', 
            transform: roleNumber === index ? 'translateY(-50%)' : `translateY(${roleNumber > index ? -200 : 200}%)`,
            opacity: roleNumber === index ? 1 : 0,
            transition: 'transform 0.5s spring(50), opacity 0.5s ease'
          }}
          initial={{ opacity: 0, y: "-100%" }}
          transition={{ type: "spring", stiffness: 50 }}
          animate={
            roleNumber === index
              ? {
                  y: "-50%",
                  opacity: 1,
                }
              : {
                  y: roleNumber > index ? "-200%" : "200%",
                  opacity: 0,
                }
          }
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-visible bg-[#030303] py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 overflow-visible">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Hi, I'm Gopika Babu
                </span>
                <div className="text-2xl sm:text-4xl md:text-5xl font-semibold mt-8">
                  <GlidingRolesAnimation />
                </div>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto md:mx-0 px-4 md:px-0">
                A Dubai-based social media marketer with a creative edge and a passion for turning ideas into impactful content.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex justify-center md:justify-start items-center"
            >
              <AnimatedButton
                as="a"
                href="#work"
                borderRadius="1.75rem"
                containerClassName="h-14 w-64"
                className="bg-white/10 hover:bg-white/20 font-bold"
                borderClassName="bg-[radial-gradient(#fb7185_40%,transparent_60%)]"
                duration={5000}
              >
                AI Powered DM Specialist
              </AnimatedButton>
            </motion.div>
          </div>
          
          {/* Portrait Image with Cinematic Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 1.2,
              type: "spring",
              damping: 15,
              stiffness: 100
            }}
            className="relative mt-12 md:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              
              {/* Portrait image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10">
                <img 
                  src={heroImage} 
                  alt="Gopika Babu" 
                  className="w-full h-full object-cover"
                />
                
                {/* Cinematic overlay - reduced opacity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                
                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-rose-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}