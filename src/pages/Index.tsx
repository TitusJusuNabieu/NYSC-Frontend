import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Users, Target, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { newsItems } from '@/data/news';
import { Link } from 'react-router-dom';
import { title } from 'process';


const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
    submenu: [
      { title: "Overview", href: "/about/overview" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Our History", href: "/about/our-history" },
      { title: "Vision & Mission", href: "/about/vision-and-mission" },
      { title: "Our Objectives", href: "/about/our-objectives" }
    ]
  },
  {
    title: "Programs",
    href: "#",
    submenu: [
      { title: "Admission Requirements", href: "/programs/admission-requirement" },
      { title: "Formal Programs", href: "/programs/formal" },
      { title: "Non-Formal Programs", href: "/programs/non-formal" }
    ]
  },
  {
    title: "Media Center",
    href: "#",
    submenu: [
      { title: "News & Updates", href: "/news" },
      { title: "Photo Gallery", href: "/media-center/gallery" },
      { title: "Publications", href: "/media-center/publications" },
      { title: "Success Stories", href: "/success-stories" }
    ]
  },
  {
    title: "Community",
    href: "#",
    submenu: [
      { title: "Alumni Network", href: "/alumni" },
      { title: "Book of Life", href: "/book-of-life" }
    ]
  },
  {
    title: "Contact",
    href: "/contact"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Our Service - Our Future",
      subtitle: "Join the National Youth Service and contribute to nation-building while developing your professional skills.",
      image: "/images/nys-corps-members.jpeg" // Image of corps members in yellow uniform
    },
    {
      title: "Empowering Sierra Leone's Youth",
      subtitle: "Gain valuable work experience through our structured service programs in public and private sectors.",
      image: "/images/nysc-slider-1.png" // The circular NYS logo
    },
    {
      title: "Building Tomorrow's Leaders",
      subtitle: "Be part of a transformative journey that shapes the future of Sierra Leone.",
      image: "/images/slid-3.jpg" // Group photo of corps members
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold text-[#2563EB] flex items-center gap-2">
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

      {/* Hero Section with Slider */}
      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          />
        ))}
        
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <button 
            onClick={prevSlide}
            className="absolute left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
            <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8]">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section - Updated content */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">About National Youth Service</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600">
                Supervised by the Ministry of Youth Affairs, the National Youth Service (NYS) is a national programme that promotes youth participation in governance. Established by an Act of Parliament in 2016, we provide newly qualified graduates with opportunities to obtain practical job experience in the public and private sectors of the economy.
              </p>
              <p className="text-gray-600">
                Our service program, launched in December 2016, directly addresses social exclusion and has successfully deployed hundreds of corps members, including our first batch of 200 graduate corps inaugurated at the Peace Keeping Military Center in September 2018.
              </p>
              <div className="flex gap-4">
                <Link to="/apply">
                  <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                    Apply for NYS
                  </Button>
                </Link>
                <Link to="/about/overview">
                  <Button variant="outline" className="hover:bg-[#2563EB] hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg flex items-center justify-center p-8">
              <img 
                src="/images/nys-logo.png" 
                alt="National Youth Service Logo" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated content */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-[#2563EB] mb-4" />
                <CardTitle>Youth Empowerment</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Support youth empowerment and create employment opportunities through structured service programs and practical experience.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-[#2563EB] mb-4" />
                <CardTitle>National Development</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Provide a platform for youth to contribute meaningfully to national development while gaining valuable work experience.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-8 w-8 text-[#2563EB] mb-4" />
                <CardTitle>Governance Participation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Promote active youth participation in governance and decision-making processes across public and private sectors.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.slice(0, 4).map((news) => (
              <Card key={news.id}>
                {news.image && (
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                    {news.category}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <Link 
                    to={`/news/${news.id}`}
                    className="inline-flex items-center text-[#2563EB] hover:text-[#1d4ed8] font-semibold transition-colors"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/news">
              <Button variant="outline" className="hover:bg-[#2563EB] hover:text-white">
                View All News
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;