import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NYS</h1>
            <p className="text-xl text-blue-100">
              Empowering youth through service and leadership development since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Navigation Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-4">About Us</h3>
                  <nav className="space-y-2">
                    <Link 
                      to="#"
                      className="block px-4 py-2 text-blue-600 bg-blue-50 rounded-md"
                    >
                      Overview
                    </Link>
                    <Link 
                      to="/about/history"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      Our History
                    </Link>
                    {/* Add other navigation items */}
                  </nav>
                </div>
              </div>

              {/* Content Area */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6">Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">
                      The National Youth Service (NYS) is a government initiative established by an Act of Parliament in 2016. Our primary mission is to provide newly qualified graduates with opportunities to obtain practical job experience in both public and private sectors of the economy.
                    </p>
                    {/* Add more content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;