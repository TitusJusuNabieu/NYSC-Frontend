import React from 'react';
import { Phone, Mail, MapPin, Send, User, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const ContactPage = () => {

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
      <div className="min-h-screen bg-white">
        {/* Hero Section with Pattern */}
        <div className="relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
          <div className="relative max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Let's Start a
                <span className="block text-white">Conversation</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
                Whether you have a question, feedback, or just want to say hello, we're here to help and would love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Hours Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 text-blue-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-semibold">Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 text-blue-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-sm text-gray-600">
                  N6 College Road, Leicester,<br />
                  Freetown, Republic of Sierra Leone
                </p>
              </div>

              {/* Contact Methods Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 text-blue-600 mb-4">
                  <Phone className="w-5 h-5" />
                  <h3 className="font-semibold">Contact</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    Phone: <a href="tel:+23278909924" className="text-blue-600 hover:text-blue-700">+232 78909924</a>
                  </p>
                  <p className="text-gray-600">
                    Email: <a href="mailto:youthservice@nys.gov.sl" className="text-blue-600 hover:text-blue-700">youthservice@nys.gov.sl</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="pl-10 w-full rounded-lg border border-gray-200 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="pl-10 w-full rounded-lg border border-gray-200 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        rows={6}
                        className="pl-10 w-full rounded-lg border border-gray-200 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
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

export default ContactPage;