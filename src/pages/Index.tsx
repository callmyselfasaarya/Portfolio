

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DashboardStats from '@/components/DashboardStats';
import JourneyTimeline from '@/components/JourneyTimeline';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SocialProofSection from '@/components/SocialProofSection';
import BlogSection from '@/components/BlogSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <DashboardStats />
      <JourneyTimeline />
      <AboutSection />
      <ProjectsSection />
      <SocialProofSection />
      <BlogSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
