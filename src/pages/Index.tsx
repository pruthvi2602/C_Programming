import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CourseOutcome from '@/components/CourseOutcome';
import MainSections from '@/components/MainSections';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast({
        title: "Search functionality",
        description: `Searching for: "${query}". This feature will be implemented with backend integration.`,
      });
    }
  };

  const handleMenuClick = () => {
    toast({
      title: "Mobile menu",
      description: "Mobile navigation menu would open here",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} onMenuClick={handleMenuClick} />
      
      <main>
        <HeroSection />
        <CourseOutcome />
        <MainSections />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
