import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FacultySection = () => {
  const faculty = [
    {
      name: "Dr. Soumik Pandey",
      subject: "Mathematics",
      experience: "15+ Years",
      qualification: "B.Sc(Math), M.Sc(Math), Ph.D(Applied Math), B.Ed, NET(JRF), WB SET AND GATE(MA)",
      image: ""
    },
    {
      name: "Mr. Abhik Halder",
      subject: "Physics", 
      experience: "12 Years",
      qualification: "MSc in Physics, Pursuing Ph.D, B.Ed, NET ",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Sanjay Sir",
      subject: "Chemistry",
      experience: "10 Years",
      qualification: "Msc(Chemistry), Med, SET, NET",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Expert <span className="text-blue-600">Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from the best - IIT/NIT alumni and experienced educators dedicated to your success
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {faculty.map((teacher, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-orange-400 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {teacher.experience}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                <div className="text-orange-500 font-semibold mb-1">{teacher.subject}</div>
                <div className="text-gray-600 text-sm mb-4">{teacher.qualification}</div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-4 text-xs text-gray-500">
                    {teacher.name === "Sanjay Sir" ? (
                      <>
                        <span>Advisory Member</span>
                        <span>•</span>
                        <span>Advisory Support</span>
                      </>
                    ) : (
                      <>
                        <span>Expert Faculty</span>
                        <span>•</span>
                        <span>Doubt Clearing</span>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
