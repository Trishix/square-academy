import React from 'react';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import AboutSection from '../components/AboutSection';
import ResultsSection from '../components/ResultsSection';
import FacultySection from '../components/FacultySection';
import WhyChooseSection from '../components/WhyChooseSection';
import FeedbackSection from '../components/FeedbackSection';
import DemoBookingSection from '../components/DemoBookingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <ResultsSection />
      <FacultySection />
      <WhyChooseSection />
      {/* <FeedbackSection /> */}
      {/* <DemoBookingSection /> */}
      <ContactSection />
      <Footer />
      {/* <ChatbotWidget /> */}
    </div>
  );
};

export default Index;
