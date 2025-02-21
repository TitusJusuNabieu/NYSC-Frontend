
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-primary">National Youth Service</a>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">News</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-section">
            Empowering Youth for a Better Future
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 fade-in-section">
            Join us in shaping tomorrow's leaders through service, innovation, and leadership development.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in-section">What You Can Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in-section">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To equip young individuals with essential skills, leadership training, and employment opportunities to foster national development.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in-section">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a future where youth contribute meaningfully to society through service, innovation, and leadership.
              </p>
            </div>

            {/* Get Involved Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in-section">
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <p className="text-gray-600">
                Join our programs, volunteer for community service, or apply for mentorship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto fade-in-section">
            <h2 className="text-3xl font-bold mb-8">About National Youth Service</h2>
            <p className="text-gray-600 mb-6">
              The National Youth Service is dedicated to equipping young individuals with leadership and vocational skills, fostering innovation, and creating employment opportunities. Through various training programs and community initiatives, we aim to shape the next generation of leaders who will drive national development.
            </p>
            <p className="text-gray-600 mb-8">
              Our programs provide hands-on experience in different sectors, mentorship opportunities, and a network of professionals dedicated to guiding youth towards success.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Apply for NYS
                <ArrowRight size={20} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition-colors">
                Submit Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 fade-in-section">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in-section">
              <h3 className="text-xl font-semibold mb-4">Youth Training Programs Launched</h3>
              <p className="text-gray-600 mb-4">A new initiative to develop skills and create job opportunities for young individuals.</p>
              <a href="#" className="text-primary hover:text-primary-hover flex items-center gap-2 transition-colors">
                Read more
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in-section">
              <h3 className="text-xl font-semibold mb-4">National Service Day Announced</h3>
              <p className="text-gray-600 mb-4">Join us in making a positive impact through volunteering and community engagement.</p>
              <a href="#" className="text-primary hover:text-primary-hover flex items-center gap-2 transition-colors">
                Read more
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 National Youth Service. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
