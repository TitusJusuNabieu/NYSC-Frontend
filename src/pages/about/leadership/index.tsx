import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

interface Leader {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface Department {
  name: string;
  description: string;
  leaders: Leader[];
}

const LeadershipPage: React.FC = () => {
  const departments: Department[] =[
    {
      name: 'Executive Department',
      description:
        'The Executive Department is responsible for the overall management and strategic direction of the National Youth Service.',
      leaders: [
        {
          name: 'Mr. Mohamed Onanah Jalloh',
          position: 'Executive Director',
          description:
            'The Executive Director of the National Youth Service (NYS), Mr. Mohamed Onanah Jalloh, has called on members of staff to rededicate themselves to duty. He emphasized the importance of teamwork and the care of Corps members. He also tasked the Deputy Executive Director and other departmental heads with the responsibility to effectively supervise and monitor the activities of all staff members.',
          image: '/images/dir.png',
        },
        {
          name: 'Mr. Paul Saffa Tapema',
          position: 'Deputy Executive Director',
          description:
            'The Deputy Executive Director, Mr. Paul Saffa Tapema, encouraged staff members to raise their concerns and resolved some of the concerns raised. He joined the Executive Director in re-echoing the call for dedication and teamwork. He is responsible for effectively supervising and monitoring the activities of all staff members to ensure efficiency and effectiveness at work.',
          image: '/images/asdir.png',
        },
      ],
    },
    {
      name: 'Monitoring and Evaluation Department',
      description:
        'The Monitoring and Evaluation (M&E) Department is responsible for conducting quarterly monitoring and evaluation exercises. The department is led by the Director of Research, Monitoring, and Evaluation, who oversees the coordination and reporting of the scheme. M&E is a process that helps improve performance and achieve results by assessing the performance of projects, institutions, and programs.',
      leaders: [
        {
          name: 'Director of Research, Monitoring and Evaluation',
          position: 'Director',
          description:
            'The Director of Research, Monitoring and Evaluation leads the M&E Department, overseeing the coordination and reporting of the scheme. The department conducts quarterly monitoring and evaluation exercises to improve performance and achieve results.',
          image: '/images/M&Eh.png',
        },
      ],
    },
    {
      name: 'Finance and Administrative Department',
      description:
        'The Finance and Administrative Department is committed to the highest ideals of effective financial service delivery and maintaining office standards. The department provides administrative and financial management services to the scheme and its public in a timely, efficient, and honest manner. It includes three units: Account Unit, Administration Unit, Human Resources Unit, and Procurement Unit.',
      leaders: [
        {
          name: 'Finance and Administrative Director',
          position: 'Director',
          description:
            'The Finance and Administrative Director leads the department, advising management on financial matters, preparing annual budgets, managing funds, establishing internal control systems, and ensuring compliance with financial regulations and guidelines.',
          image: '/images/finance.png',
        },
      ],
    },
    {
      name: 'Programms, Recrutment and Trannig Department',
      description:
        'The Finance and Administrative Department is committed to the highest ideals of effective financial service delivery and maintaining office standards. The department provides administrative and financial management services to the scheme and its public in a timely, efficient, and honest manner. It includes three units: Account Unit, Administration Unit, Human Resources Unit, and Procurement Unit.',
      leaders: [
        {
          name: 'Finance and Administrative Director',
          position: 'Director',
          description:
            'The Finance and Administrative Director leads the department, advising management on financial matters, preparing annual budgets, managing funds, establishing internal control systems, and ensuring compliance with financial regulations and guidelines.',
          image: '/images/finance.png',
        },
      ],
    },
    {
      name: 'Communications Department',
      description:
        'The Communications Department is responsible for implementing both internal and external communications. The Director of Communications works with junior personnel and other department directors to develop suitable communications plans and strategies. The department ensures consistent and accurate representation of NYS values and objectives in all communications. It also builds relationships with stakeholders and media personnel, leading to increased media and social media presence. The department collaborates with the Human Resources department for recruitment and works closely with creative teams to develop media content.',
      leaders: [
        {
          name: 'Director of Communications',
          position: 'Director',
          description:
            'The Director of Communications leads the department, ensuring effective communication and IT support. They work with other departments to develop communication strategies, build relationships with stakeholders and media, and collaborate on media content development. The Director also partners with the Human Resources department for recruitment and ensures the department meets its goals and objectives.',
          image: '/images/comm.png',
        },
      ]},
      {
        name: 'Enterprenurship and Investment Department',
        description:
          'The Enterprenurship and Investment Department is committed to the highest ideals of effective financial service delivery and maintaining office standards. The department provides administrative and financial management services to the scheme and its public in a timely, efficient, and honest manner. It includes three units: Account Unit, Administration Unit, Human Resources Unit, and Procurement Unit.',
        leaders: [
          {
            name: 'Finance and Administrative Director',
            position: 'Director',
            description:
              'The Finance and Administrative Director leads the department, advising management on financial matters, preparing annual budgets, managing funds, establishing internal control systems, and ensuring compliance with financial regulations and guidelines.',
            image: '/images/finance.png',
          },
        ],
      },
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
      <div className="min-h-screen bg-gray-50">
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
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
          <div className="relative pt-32 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Leadership</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Meet the dedicated team driving youth development and national service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="container mx-auto px-4 lg:px-8 mt-8 pb-16">
          {departments.map((department, index) => (
            <section key={index} className="mb-12">
              <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-200 to-blue-400 text-black p-6">
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8" />
                    <div>
                      <CardTitle className="text-2xl mb-2">{department.name}</CardTitle>
                      <p className="text-blue-100 text-sm text-black">{department.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {department.leaders.map((leader, leaderIndex) => (
                      <Card key={leaderIndex} className="overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-64">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-fit"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                            <p className="text-sm text-gray-200">{leader.position}</p>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-gray-600 leading-relaxed">{leader.description}</p>
                          <div className="mt-4 flex items-center text-blue-600 font-medium group cursor-pointer">
                            Read more
                            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        {/* Leadership Stats */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">4+</div>
                <div className="text-blue-100">Departments</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Dedication</div>
              </div>
            </div>
          </div>
        </div> */}
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

export default LeadershipPage;