import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GraduationCap, Clock, Calendar, MapPin, Users, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Program {
  title: string;
  duration: string;
  startDate: string;
  location: string;
  capacity: string;
  description: string;
  requirements: string[];
}

const FormalProgramsPage = () => {
  const programs: Program[] = [
    {
      title: "Graduate Training Program",
      duration: "12 months",
      startDate: "September 2024",
      location: "Nationwide",
      capacity: "500 corps members",
      description: "A comprehensive training program for recent graduates, focusing on professional development and national service.",
      requirements: [
        "Bachelor's degree from an accredited institution",
        "Age between 18-35 years",
        "Sierra Leonean citizenship",
        "Completed within the last 3 years"
      ]
    },
    {
      title: "Professional Development Course",
      duration: "6 months",
      startDate: "March 2024",
      location: "Regional Centers",
      capacity: "300 corps members",
      description: "Specialized training program focusing on leadership and professional skills development.",
      requirements: [
        "Higher National Diploma or equivalent",
        "Professional certification",
        "Basic computer literacy",
        "Leadership potential"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#1B4332] to-[#1a4b83] text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
          <div className="relative pt-32 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Formal Programs</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Structured training programs for graduates and young professionals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span>{program.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span>{program.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Requirements:</h3>
                    <ul className="space-y-2">
                      {program.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormalProgramsPage;