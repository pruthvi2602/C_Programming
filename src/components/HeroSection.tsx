import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, BookOpen, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              C Programming
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in text-shadow">
            Learn, Practice, and Master the Foundations of Programming
          </p>

          {/* Course Code */}
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-lg font-semibold">CEUC101 - CHARUSAT</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group min-w-48"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Explore Materials
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Code className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Theory Assessment</h3>
              <p className="text-white/80">Comprehensive question sets and quizzes</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Practical Assessment</h3>
              <p className="text-white/80">Hands-on coding assignments</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Study Materials</h3>
              <p className="text-white/80">Lecture slides, notes, and resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-white/20 animate-float">
        <Code className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/20 animate-float" style={{ animationDelay: '1s' }}>
        <BookOpen className="h-12 w-12" />
      </div>
    </section>
  );
};

export default HeroSection;