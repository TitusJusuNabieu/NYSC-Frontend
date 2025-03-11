import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Filter, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CorpsMember {
  id: string;
  name: string;
  year: string;
  batch: string;
  state: string;
  serviceNumber: string;
}

const BookOfLifePage = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const years = ['all', '2024', '2023', '2022', '2021', '2020'];
  
  const corpsMembers: CorpsMember[] = [
    {
      id: '1',
      name: 'John Doe',
      year: '2023',
      batch: 'A',
      state: 'Western Area',
      serviceNumber: 'NYS/2023/001'
    },
    // Add more members
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Book of Life</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Honoring all who have served through the National Youth Service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="container mx-auto px-4 lg:px-8 mt-8">
          <Card className="bg-white p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input className="pl-10" placeholder="Search by name or service number..." />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    className={selectedYear === year ? "bg-[#1B4332]" : ""}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Corps Members List */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Number</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {corpsMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.batch}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.state}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.serviceNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookOfLifePage;