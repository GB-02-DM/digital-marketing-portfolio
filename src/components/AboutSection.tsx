import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { IconCloud } from './IconCloud';
import aboutMeImage from '../assets/about_me_image.jpg';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{children}</h2>
    <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
  </div>
);

// Digital Marketing focused icon slugs
const digitalMarketingIcons = [
  "facebook",
  "instagram", 
  "tiktok",
  "youtube",
  "linkedin",
  "twitter",
  "googleads",
  "meta",
  "mailchimp",
  "hubspot",
  "salesforce",
  "shopify",
  "wordpress",
  "canva",
  "adobephotoshop",
  "adobeillustrator",
  "figma",
  "googleanalytics",
  "semrush",
  "hootsuite",
  "buffer",
  "zapier",
  "notion",
  "slack",
  "zoom",
  "whatsapp",
  "telegram",
  "pinterest",
  "snapchat",
  "reddit",
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-[#030303]">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        
        {/* Horizontal Layout Container with Equal Heights */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          
          {/* Left Side - 3D Icon Animation (40% width) */}
          <motion.div 
            className="w-full lg:w-2/5 flex items-center justify-center min-h-[400px]"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
              <IconCloud iconSlugs={digitalMarketingIcons} />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>
          
          {/* Right Side - Text Content (60% width) */}
          <motion.div 
            className="w-full lg:w-3/5 flex flex-col justify-center min-h-[400px] py-8"
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-lg lg:text-xl text-gray-300 space-y-8 leading-relaxed">
              <p>
                I specialize in <span className="text-indigo-400 font-semibold">AI-powered content creation</span>, video production, CRM, and campaign strategy that connects with real audiences and drives organic leads. With hands-on experience across real estate, F&B, fashion, and events, I've worked with diverse brands to build visibility, boost engagement, and deliver results that matter.
              </p>
              
              <p>
                Whether I'm scripting a reel, directing a shoot, or planning a Meta/Google Ads campaign, I bring <span className="text-purple-400 font-semibold">AI-enhanced productivity</span> and strategic thinking to everything I do. By combining traditional marketing expertise with cutting-edge AI tools, I deliver campaigns that are both creative and data-driven.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Black and White About Me Image */}
        <motion.div 
          className="mt-20 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 mix-blend-overlay"></div>
            <img 
              src={aboutMeImage} 
              alt="About Me" 
              className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              style={{ maxHeight: "600px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}