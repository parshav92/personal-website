"use client"
import React, { useState, useRef, useEffect } from 'react';

const skills = [
  { name: "Python", color: "bg-green-500" },
  { name: "Java", color: "bg-teal-500" },
  { name: "Tailwind", color: "bg-blue-300" },
  { name: "Bootstrap", color: "bg-purple-500" },
  { name: "Convex", color: "bg-orange-500" },
  { name: "jQuery", color: "bg-blue-400" },
  { name: "SQL", color: "bg-pink-400" },
  { name: "NextJS", color: "bg-red-500" },
  { name: "Node", color: "bg-green-600" },
  { name: "Firebase", color: "bg-yellow-500" },
  { name: "MongoDB", color: "bg-green-500" },
  { name: "Supabase", color: "bg-green-400" },
  { name: "TypeScript", color: "bg-blue-700" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "Git", color: "bg-red-600" },
  { name: "GitHub", color: "bg-black" },
  { name: "ReactJS", color: "bg-blue-600" },
  { name: "UiDesign", color: "bg-purple-400" },
  { name: "Web3", color: "bg-yellow-600" },
  { name: "Webscraping", color: "bg-green-400" },
  { name: "Solidity", color: "bg-blue-800" },
];

const SkillItem: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
  <div className="flex items-center space-x-2 hover:scale-90 transform transition-transform duration-300">
    <span className="flex items-center bg-transparent px-4 py-2 rounded-full space-x-2 font-medium border border-opacity-55">
      <span className={`w-3 h-3 rounded-full ${skill.color}`}></span>
      <span>{skill.name}</span>
    </span>
  </div>
);

const MarqueeRow: React.FC<{ skills: typeof skills; direction: 'normal' | 'reverse' }> = ({ skills, direction }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (row) {
      const playAnimation = () => {
        row.style.animationPlayState = 'running';
        row.style.transform = 'translateX(0)';
      };

      const resetAnimation = () => {
        row.style.animationPlayState = 'paused';
        row.style.transform = 'translateX(0)';
        void row.offsetWidth; // Trigger reflow
        playAnimation();
      };

      row.addEventListener('animationiteration', resetAnimation);
      return () => row.removeEventListener('animationiteration', resetAnimation);
    }
  }, []);

  return (
    <div 
      className="relative flex overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={rowRef}
        className={`flex space-x-24 animate-marquee ${direction === 'reverse' ? 'animate-marquee-reverse' : ''}`}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {skills.concat(skills).map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    // <section id="skills">
    <div className="w-full overflow-hidden py-12 relative space-y-12">
      <h1 className="text-3xl font-bold text-center mb-6">My Skills</h1>
      <MarqueeRow skills={skills.slice(0, Math.ceil(skills.length / 2))} direction="normal" />
      <MarqueeRow skills={skills.slice(Math.ceil(skills.length / 2))} direction="reverse" />
    </div>
    // </section>
  );
};

export default SkillsSection;