import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Target, Clock, Calendar, MapPin, Users, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Program {
  title: string;
  type: string;
  duration: string;
  schedule: string;
  location: string;
  capacity: string;
  description: string;
  skills: string[];
}

const NonFormalProgramsPage = () => {
  const programs: Program[] = [
    {
      title: "Vocational Skills Training",
      type: "Technical Skills",
      duration: "3 months",
      schedule: "Flexible",
      location: "Regional Centers",
      capacity: "200 participants",
      description: "Hands-on training in various vocational skills to enhance employability and self-reliance.",
      skills: [
        "Carpentry and Woodwork",
        "Electrical Installation",
        "Plumbing",
        "Welding and Fabrication",
        "Automotive Repair"
      ]
    },
    {
      title: "Digital Skills Program",
      type: "Technology",
      duration: "2 months",
      schedule: "Part-time",
      location: "Urban Centers",
      capacity: "150 participants",
      description: "Basic to intermediate digital skills training for youth empowerment in the modern workplace.",
      skills: [
        "Basic Computer Skills",
        "Digital Marketing",
        "Web Development Basics",
        "Social Media Management",
        "Office Productivity Tools"
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Non-Formal Programs</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Practical skills development and vocational training opportunities
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
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-[#1B4332]" />
                    <div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{program.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span>{program.schedule}</span>
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
                    <h3 className="font-semibold">Skills Covered:</h3>
                    <ul className="space-y-2">
                      {program.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Target className="h-5 w-5 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>{skill}</span>
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

export default NonFormalProgramsPage;