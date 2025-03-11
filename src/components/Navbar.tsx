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
  // ... rest of the navigation items
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      {/* ... rest of the navbar code ... */}
    </nav>
  );
};

export default Navbar;