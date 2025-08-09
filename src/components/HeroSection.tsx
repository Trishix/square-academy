import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-800 to-orange-600 text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-blue-700 text-white overflow-hidden"> 

      {/* Background Image */}
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Logo with White Background */}
      <div className="absolute top-6 left-6 z-20 bg-white p-2 rounded-xl shadow-lg">
        <img
          src="/LOGO_SquareAcademy.png"
          alt="Square Academy Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Excel in <span className="text-orange-400">JEE & NEET</span> with
            <br />
            <span className="text-blue-300">Square Academy</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto animate-fade-in">
            Personalized learning from Class 6 to 12 with expert faculty and proven results
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={scrollToDemo}
            >
              Book a Free Demo Class
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-orange-600 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Courses
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
