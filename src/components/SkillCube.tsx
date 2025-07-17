import React from 'react';
import { Target, Search, Clapperboard, LineChart, Users, Mail } from 'lucide-react';

const cubeSkills = [
  { name: 'Meta / Google Ads', icon: <Target size={36} strokeWidth={1.5}/> },
  { name: 'SEO', icon: <Search size={36} strokeWidth={1.5}/> },
  { name: 'Content Creation', icon: <Clapperboard size={36} strokeWidth={1.5}/> },
  { name: 'Analytics', icon: <LineChart size={36} strokeWidth={1.5}/> },
  { name: 'CRM', icon: <Users size={36} strokeWidth={1.5}/> },
  { name: 'Email Marketing', icon: <Mail size={36} strokeWidth={1.5}/> },
];

export default function SkillCube() {
  return (
    <div className="skill-cube-scene">
      <div className="skill-cube">
        {cubeSkills.map((skill, i) => (
          <div key={i} className={`skill-cube-face face-${i + 1}`}>
            <div className="text-indigo-300">{skill.icon}</div>
            <p className="mt-2 text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}