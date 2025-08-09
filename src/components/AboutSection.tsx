
import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: "1000+", label: "Students Mentored" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Faculty" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-orange-500">Square Academy</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Square Academy, we believe every student has the potential to excel. Our mission is to provide 
                  personalized, high-quality education that transforms dreams into achievements.
                </p>
                
                <p>
                  Founded with the vision of making quality education accessible, we have been nurturing young minds 
                  for over a decade. Our expert faculty, comprised of IIT/NIT alumni and experienced educators, 
                  ensures each student receives individual attention and guidance.
                </p>
                
                <p>
                  We don't just teach subjects; we build confidence, develop problem-solving skills, and instill 
                  values that last a lifetime. Our comprehensive approach combines traditional teaching methods 
                  with modern technology to create an engaging learning environment.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
