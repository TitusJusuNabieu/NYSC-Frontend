import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, Target, BookOpen, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

interface Section {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const OrganizationOverview: React.FC = () => {
  const sections: Section[] = [
    {
      title: 'Our Mission',
      content: 'The National Youth Service (NYS) is dedicated to empowering young graduates through structured service programs and practical experience in both public and private sectors.',
      icon: <Target className="h-8 w-8" />
    },
    {
      title: 'Social Impact',
      content: 'We address social exclusion by providing opportunities for employment, skills development, and active participation in governance, contributing to national development.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Global Context',
      content: 'As part of the UN World Programme of Action for Youth, we implement national youth policies that combine development and rights-based approaches.',
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: 'Knowledge Building',
      content: 'We focus on building social capital through networks, relationships, and trust, creating a foundation for sustainable economic and social development.',
      icon: <BookOpen className="h-8 w-8" />
    }
  ];
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

  return (
    <>
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
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
          <div className="relative pt-32 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">About NYS</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Building a stronger Sierra Leone through youth empowerment and service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-8 mt-16 pb-16">
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <CardHeader className="bg-gradient-to-r from-green-200 to-blue-400 text-white p-6">
              <CardTitle className="text-2xl text-black">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 leading-relaxed">
                Social exclusion is a multi-dimensional phenomenon that has gained worldwide attention in the policy world. Policies addressing exclusion have been effective in addressing problems arising from the lack of employment, poor skills, low income, high crime environments, poor housing and poor health among youth.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The National Youth Service was established in response to the United Nations call for Member States to implement the World Programme of Action for Youth. Our mission aligns with both development and rights-based approaches to youth empowerment.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-200 to-blue-400 text-black p-6">
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-200 to-blue-400 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl text-black font-bold mb-2">1000+</div>
                <div className="text-blue-100 text-black">Corps Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-black">50+</div>
                <div className="text-blue-100 text-black">Partner Organizations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-black">7+</div>
                <div className="text-blue-100 text-black">Years of Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-black">16</div>
                <div className="text-blue-100 text-black">Districts Covered</div>
              </div>
            </div>
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

export default OrganizationOverview;