'use client';
import React, { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  const [accentColor, setAccentColor] = useState('#ff0000');
  const colorOptions = [
    '#ffffff',
    '#f43f5e',
    '#f97316',
    '#facc15',
    '#84cc16',
    '#22d3ee',
    '#8b5cf6',
  ];

  return (
    <>
      <HeroSection
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        colorOptions={colorOptions}
      />
      <AboutSection accentColor={accentColor} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
