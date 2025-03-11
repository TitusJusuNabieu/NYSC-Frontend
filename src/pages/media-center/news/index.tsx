import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Search, ArrowRight, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { newsItems } from '@/data/news';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NewsPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(newsItems.map(item => item.category))];
  const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "#",
    submenu: [
      { title: "Overview", href: "/about/overview" },
      {title:"Leadership",href:"/about/leadership"},
      { title: "Our History", href: "/about/our-history" },
      { title: "Vision & Mission", href: "/about/vision-and-mission" },
      { title: "Our Objectives", href: "/about/our-objectives" }
    ]
  },
  {
    title: "Programs",
    href: "#",
    submenu: [
      { title: "Admission Requirements", href: "/programs/admission-requirement" }
    ]
  },
  {
    title: "Media Center",
    href: "#",
    submenu: [
      { title: "News & Updates", href: "/news" },
      { title: "Photo Gallery", href: "/media-center/gallery" },
      { title: "Publications", href: "/media-center/publications" }
    ]
  },
  {
    title: "Contact",
    href: "/contact"
  }
];
  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

    const DEFAULT_IMAGE = "/images/news-placeholder.jpg";
  return (
    <>
      // Update the primary color from blue to green in the navigation and buttons
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-xl font-bold text-[#1B4332] flex items-center gap-2">
              <img src="/images/nys-logo.jpg" alt="NYS Logo" className="h-12 w-12 rounded-full" />
              National Youth Service
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-[#2563EB] transition-colors py-2 flex items-center"
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <div 
                      className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/apply">
                <Button variant="default" className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                  Apply Now
                </Button>
              </Link>
            </div>
      
            <Sheet>
              <SheetTrigger className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <Link to={item.href} className="text-gray-600 hover:text-[#2563EB] transition-colors">
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block text-sm text-gray-500 hover:text-[#2563EB] transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link to="/apply">
                    <Button variant="default" className="bg-[#2563EB] hover:bg-[#1d4ed8] w-full">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
          <div className="relative pt-32 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest News & Updates</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Stay informed about our latest activities, announcements, and success stories
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search news articles..."
                    className="pl-10 bg-gray-50 border-0"
                  />
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`whitespace-nowrap ${
                      selectedCategory === category 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          {filteredNews.slice(0, 1).map((news) => (
            <Link key={news.id} to={`/news/${news.id}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative h-64 md:h-96">
                    <img
                      src={news.image ||"/images/news-placeholder.jpg"}
                      alt={news.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {news.date}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                        <Tag className="h-4 w-4 mr-2" />
                        {news.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <Button className="group/button">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* News Grid */}
        <div className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((news) => (
              <Link key={news.id} to={`/news/${news.id}`}>
                <Card className="group h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-600 text-white backdrop-blur-md bg-opacity-90">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {news.date}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {news.excerpt}
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
     <footer className="bg-[#2563EB] text-white py-12">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div>
        <Link to="/" className="inline-block">
          <h3 className="font-bold text-lg mb-4">National Youth Service</h3>
          <p className="text-blue-100">Empowering youth through service and leadership development.</p>
        </Link>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <div className="space-y-2">
          <Link to="/" className="block text-blue-100 hover:text-white">Home</Link>
          <Link to="/about/overview" className="block text-blue-100 hover:text-white">About Us</Link>
          <Link to="/programs/admission-requirement" className="block text-blue-100 hover:text-white">Programs</Link>
          <Link to="/contact" className="block text-blue-100 hover:text-white">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Media Center</h4>
        <div className="space-y-2">
          <Link to="/news" className="block text-blue-100 hover:text-white">News & Updates</Link>
          <Link to="/media-center/gallery" className="block text-blue-100 hover:text-white">Photo Gallery</Link>
          <Link to="/media-center/publications" className="block text-blue-100 hover:text-white">Publications</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Connect</h4>
        <div className="space-y-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white">LinkedIn</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white">Facebook</a>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center text-blue-100">
      <p>© {new Date().getFullYear()} National Youth Service. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </>
  );
};

export default NewsPage;