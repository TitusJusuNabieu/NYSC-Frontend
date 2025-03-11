import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "#",
    submenu: [
      { title: "Overview", href: "#" },
      { title: "Our History", href: "/about/history" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      { title: "Core Values", href: "/about/core-values" }
    ]
  },
  {
    title: "Programs",
    href: "#",
    submenu: [
      { title: "Service Year", href: "/service-year" },
      { title: "Training & Development", href: "/training" },
      { title: "Deployment", href: "/deployment" },
      { title: "Skills Acquisition", href: "/skills" }
    ]
  },
  {
    title: "Media Center",
    href: "#",
    submenu: [
      { title: "News & Updates", href: "/news" },
      { title: "Photo Gallery", href: "/gallery" },
      { title: "Press Releases", href: "/press" },
      { title: "Publications", href: "/publications" }
    ]
  },
  {
    title: "Contact",
    href: "/contact"
  }
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-bold text-[#2563EB] flex items-center gap-2">
              <img src="/images/nys-logo.jpg" alt="NYS Logo" className="h-12 w-12 rounded-full" />
              National Youth Service
            </Link>
            
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
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#2563EB] text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-4">National Youth Service</h3>
              <p className="text-blue-100">Empowering youth through service and leadership development.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-blue-100 hover:text-white">Home</Link>
                <Link to="#" className="block text-blue-100 hover:text-white">About</Link>
                <Link to="/programs" className="block text-blue-100 hover:text-white">Programs</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <Link to="/news" className="block text-blue-100 hover:text-white">News</Link>
                <Link to="/events" className="block text-blue-100 hover:text-white">Events</Link>
                <Link to="/contact" className="block text-blue-100 hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-blue-100 hover:text-white">Facebook</a>
                <a href="#" className="block text-blue-100 hover:text-white">Twitter</a>
                <a href="#" className="block text-blue-100 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;