import React from 'react';
import { Megaphone, Clapperboard, Target, Users, Briefcase, ThumbsUp, Bot, BarChart2, Mail, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { GlowingEffect } from './GlowingEffect';
import { Skeleton } from './ui/ai-tools-animation';

const skills = [
  {
    icon: <Megaphone size={24} strokeWidth={1.5} />,
    title: 'Social Media Management',
    desc: 'End-to-end content planning, posting, and engagement across Instagram, Facebook, and TikTok.',
    tag: 'Engagement',
    tagColor: 'text-blue-400',
    bg: 'bg-gradient-to-tr from-purple-400 via-pink-300 to-orange-300',
  },
  {
    icon: <Clapperboard size={24} strokeWidth={1.5} />,
    title: 'Content Creation',
    desc: 'Developing engaging visuals, videos, and copy tailored for social media, ads, and brand campaigns.',
    tag: 'Creativity',
    tagColor: 'text-pink-300',
    bg: 'bg-gradient-to-tr from-pink-400 via-orange-300 to-yellow-200',
  },
  {
    icon: <Target size={24} strokeWidth={1.5} />,
    title: 'Ad Campaigns',
    desc: 'Planning and managing Meta ad campaigns to boost reach, engagement, and lead generation.',
    tag: 'Growth',
    tagColor: 'text-orange-300',
    bg: 'bg-gradient-to-tr from-yellow-200 via-orange-200 to-pink-300',
  },
  {
    customIcon: <Skeleton />,
    title: 'AI Hub',
    desc: 'Leveraging cutting-edge AI tools to enhance productivity, automate workflows, and create data-driven marketing strategies.',
    tag: 'AI Powered',
    tagColor: 'text-purple-400',
    bg: 'bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-200',
    extraClass: 'md:col-span-2 md:row-start-2',
    hasCustomAnimation: true,
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: 'CRM & Lead Management',
    desc: 'Tracking, organizing, and following up with leads to support conversions and improve campaign performance.',
    tag: 'Retention',
    tagColor: 'text-green-300',
    bg: 'bg-gradient-to-tr from-green-300 via-teal-400 to-blue-300',
  },
  {
    icon: <Briefcase size={24} strokeWidth={1.5} />,
    title: 'Client Management',
    desc: 'Maintaining strong client partnerships through clear communication and goal-driven collaboration.',
    tag: 'Collaboration',
    tagColor: 'text-indigo-300',
    bg: 'bg-gradient-to-tr from-indigo-400 via-blue-300 to-purple-200',
  },
  {
    icon: <ThumbsUp size={24} strokeWidth={1.5} />,
    title: 'Team Player',
    desc: 'Collaborating seamlessly with creative teams, clients, and vendors to deliver successful campaigns.',
    tag: 'Teamwork',
    tagColor: 'text-cyan-300',
    bg: 'bg-gradient-to-tr from-cyan-400 via-blue-200 to-green-200',
  },
  {
    icon: <BarChart2 size={24} strokeWidth={1.5} />,
    title: 'SEO & Analytics',
    desc: 'Optimizing content for search engines and analyzing data to drive measurable results and ROI.',
    tag: 'Visibility',
    tagColor: 'text-yellow-300',
    bg: 'bg-gradient-to-tr from-yellow-300 via-orange-200 to-pink-200',
  },
  {
    icon: <Mail size={24} strokeWidth={1.5} />,
    title: 'Email Marketing Automation',
    desc: 'Designing and automating email campaigns to nurture leads and maximize conversions.',
    tag: 'Automation',
    tagColor: 'text-red-300',
    bg: 'bg-gradient-to-tr from-red-300 via-pink-200 to-yellow-100',
  },
  {
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    title: 'Photography & Video Editing',
    desc: 'Creating professional visual content including portraits, product photography, and engaging video edits for social media and marketing campaigns.',
    tag: 'Visual Content',
    tagColor: 'text-lime-300',
    bg: 'bg-gradient-to-tr from-lime-300 via-green-200 to-blue-100',
    extraClass: 'md:col-span-2',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
    },
  }),
  hover: {
    scale: 1.04,
    boxShadow: '0 8px 32px 0 rgba(80, 0, 120, 0.18)',
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-14 text-center mx-auto">
          <span
            className="inline-block mb-5 rounded-lg"
            style={{ padding: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span
              className="uppercase tracking-widest text-xs font-bold text-blue-400"
              style={{ letterSpacing: '0.1em' }}
            >
              My Expertise
            </span>
          </span>
          <h2 className="headline mb-3 text-white font-normal" style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '48px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Unlock <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent">Digital Marketing Superpowers</span>
          </h2>
          <p className="text-lg text-gray-200">
            Accelerate your workflow with innovative tools and expertise designed for modern brands, powered by next-generation marketing strategies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className={`relative group rounded-2xl backdrop-blur-md border border-white/10 p-8 flex flex-col overflow-hidden ${skill.extraClass || ''}`}
              style={{ 
                background: 'rgba(20, 20, 25, 0.7)',
                boxShadow: '2px 4px 16px 0px rgba(0, 0, 0, 0.3) inset'
              }}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Animated Glowing Border */}
              <GlowingEffect
                proximity={100}
                spread={30}
                blur={2}
                borderWidth={1}
                className="rounded-2xl"
              />
              
              {skill.hasCustomAnimation ? (
                <div className="mb-2">{skill.customIcon}</div>
              ) : (
                <div className={`mb-5 flex items-center justify-center w-12 h-12 rounded-full z-10 ${skill.bg} shadow-lg`}>
                  {skill.icon}
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-white mb-2 z-10">{skill.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow z-10">{skill.desc}</p>
              <span className={`inline-block ${skill.tagColor} font-bold text-xs uppercase tracking-wide z-10`}>{skill.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}