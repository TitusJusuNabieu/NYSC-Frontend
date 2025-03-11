import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Camera, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

interface GalleryImage {
  url: string;
  title: string;
  date: string;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      url: 'https://nys.gov.sl/backend/assets/img/gallery/gallery-8.jpg',
      title: 'Corps Members Training',
      date: 'March 2023'
    },
    {
      url: 'https://nys.gov.sl/backend/assets/img/gallery/Dty and MOYA[71].jpg',
      title: 'Ministry Visit',
      date: 'April 2023'
    },
    {
      url: 'https://nys.gov.sl/backend/assets/img/gallery/gallery-1.jpg',
      title: 'Community Service',
      date: 'May 2023'
    },
    {
      url: 'https://nys.gov.sl/backend/assets/img/gallery/gallery-2.jpg',
      title: 'Skills Development Workshop',
      date: 'June 2023'
    },
    {
      url: 'https://nys.gov.sl/backend/assets/img/gallery/gallery-3.jpg',
      title: 'Graduation Ceremony',
      date: 'July 2023'
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Capturing moments of service, learning, and growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 lg:px-8 mt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.date}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full bg-black/90 border-none p-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h2 className="text-white text-xl font-semibold mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-300">{selectedImage.date}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
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

export default GalleryPage;