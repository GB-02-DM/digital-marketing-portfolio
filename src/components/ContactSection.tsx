import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import contactImage from '../assets/Contact_us_image.jpg';
import { motion } from 'framer-motion';
import Scene from './AnimatedBackground';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{children}</h2>
    <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
  </div>
);

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-[#030303] relative overflow-hidden">
      {/* 3D Animated Background */}
      <Scene />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle>Let's Connect</SectionTitle>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Image and Contact Info */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
              <img 
                src={contactImage} 
                alt="Contact Me" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: "320px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Contact Info - Reordered as requested: phone, location, email */}
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 backdrop-blur-sm overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-indigo-400 flex items-center">
                    <Phone className="w-5 h-5 mr-2" /> Phone
                  </h3>
                  <span className="text-base text-gray-300 break-words">+971 50 124 3039</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-indigo-400 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" /> Location
                  </h3>
                  <span className="text-base text-gray-300 break-words">Dubai, UAE</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-indigo-400 flex items-center">
                    <Mail className="w-5 h-5 mr-2" /> Email
                  </h3>
                  <a href="mailto:gopikab02@gmail.com" className="text-base text-gray-300 hover:text-white break-all">gopikab02@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Contact Form */}
          <motion.form
            className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left leading-tight">
                  <span className="text-white">Let's</span>
                  <motion.span 
                    className="font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 text-transparent bg-clip-text mx-2"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    Collaborate !
                  </motion.span>
                </h2>
              </motion.div>
            </motion.div>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              />
            </div>
            <div className="mb-4">
              <textarea 
                rows={5} 
                placeholder="Your Message" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}