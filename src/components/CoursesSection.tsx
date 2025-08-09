
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
  const courses = [
    {
      title: "NEET Coaching",
      subtitle: "Class 11 - 12",
      duration: "2 Years Program",
      description: "Comprehensive medical entrance preparation with focus on Biology, Chemistry, and Physics.",
      highlights: [
        "Subject-wise expert faculty",
        "Regular mock tests",
        "Doubt clearing sessions",
        "Study material included"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "JEE Coaching", 
      subtitle: "Class 11 - 12",
      duration: "2 Years Program",
      description: "Complete engineering entrance preparation covering Physics, Chemistry, and Mathematics.",
      highlights: [
        "IIT/NIT alumni teachers",
        "Advanced problem solving",
        "Regular assessments",
        "Personalized attention"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Foundation Program",
      subtitle: "Class 6 - 10",
      duration: "Flexible Duration",
      description: "Strong foundation building in Science and Mathematics for future competitive exams.",
      highlights: [
        "Concept clarity focus",
        "Interactive learning",
        "Regular progress tracking",
        "Parent-teacher meetings"
      ],
      color: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive programs designed for different academic levels
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold text-white">{course.title.charAt(0)}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{course.title}</CardTitle>
                <p className="text-orange-500 font-semibold">{course.subtitle}</p>
                <p className="text-sm text-gray-500">{course.duration}</p>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="space-y-2 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
