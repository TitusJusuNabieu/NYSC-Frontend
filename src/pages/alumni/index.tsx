import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, MapPin, Building, GraduationCap, Mail, Phone, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Alumni {
  id: string;
  name: string;
  batch: string;
  occupation: string;
  company: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  image: string;
}

const AlumniPage = () => {
  const alumni: Alumni[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      batch: '2020',
      occupation: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Freetown',
      email: 'sarah@example.com',
      phone: '+232 XX XXX XXX',
      linkedin: 'linkedin.com/in/sarah',
      image: '/images/alumni/sarah.jpg'
    },
    // Add more alumni
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Network</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Connect with fellow NYS alumni and build lasting relationships
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="container mx-auto px-4 lg:px-8 mt-8">
          <Card className="bg-white p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input className="pl-10" placeholder="Search alumni by name, batch, or location..." />
            </div>
          </Card>
        </div>

        {/* Alumni Grid */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((person) => (
              <Card key={person.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Batch {person.batch}
                    </p>
                    <p className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      {person.occupation} at {person.company}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {person.location}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
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

export default AlumniPage;