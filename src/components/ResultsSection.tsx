
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ResultsSection = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      achievement: "JEE Advanced AIR 147",
      quote: "Square Academy's personalized approach and excellent faculty helped me crack JEE Advanced. The regular tests and doubt sessions were incredibly helpful.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      achievement: "NEET AIR 523",
      quote: "The foundation I built at Square Academy from Class 11 made NEET preparation smooth. Teachers here truly care about each student's success.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      achievement: "JEE Main 99.2 Percentile",
      quote: "Starting from their foundation program in Class 9, Square Academy shaped my analytical thinking. The result speaks for itself!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-400">Success Stories</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real achievements from real students who trusted Square Academy with their dreams
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-orange-400"
                />
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                  <div className="text-orange-400 font-semibold text-sm">
                    {testimonial.achievement}
                  </div>
                </div>
                
                <blockquote className="text-blue-100 italic text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">200+</div>
              <div className="text-sm">JEE Qualified</div>
            </div>
            <div className="w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">150+</div>
              <div className="text-sm">NEET Qualified</div>
            </div>
            <div className="w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">98%</div>
              <div className="text-sm">Board Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
