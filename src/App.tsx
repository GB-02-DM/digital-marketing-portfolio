import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NavBar, NavItem } from "./components/NavBar";
import { Home, User, Briefcase, Mail, Sparkles } from "lucide-react";

const navItems: NavItem[] = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Skills", url: "#skills", icon: Sparkles },
  { name: "Work", url: "#work", icon: Briefcase },
  { name: "Contact", url: "#contact", icon: Mail },
];

function PortfolioPage() {
  return (
    <div className="bg-[#030303] text-gray-200 font-sans">
      <NavBar items={navItems} />
      <main>
        <HeroSection />
        <div className="bg-gradient-to-b from-[#030303] to-[#111827]">
          <AboutSection />
          <SkillsSection />
        </div>
        <div className="bg-[#111827]">
          <WorkSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <AnimatePresence
        onExitComplete={() => setShowContent(true)}
        mode="wait"
      >
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {showContent && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#030303] min-h-screen"
        >
          <PortfolioPage />
        </motion.div>
      )}
    </>
  );
}