import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlayCircle, ThumbsUp, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SuccessStory {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  views: number;
}

const SuccessStoriesPage = () => {
  const stories: SuccessStory[] = [
    {
      id: '1',
      title: 'From Corps Member to CEO',
      description: 'How NYS shaped my entrepreneurial journey',
      youtubeId: 'VIDEO_ID_1',
      date: 'March 15, 2024',
      views: 1200
    },
    // Add more stories
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Inspiring journeys of our corps members and alumni
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${story.youtubeId}/maxresdefault.jpg`}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{story.date}</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {story.views}
                      </span>
                      <Share2 className="h-4 w-4 cursor-pointer hover:text-[#1B4332]" />
                    </div>
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

export default SuccessStoriesPage;