import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/dashboard/ImageGallery"
import { NewsManager } from "@/components/dashboard/NewsManager"
import { PublicationsManager } from "@/components/dashboard/PublicationsManager"
import { UserManagement } from "@/components/dashboard/UserManagement"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import { Overview } from "@/components/dashboard/Overview"
import { LineChart, BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from "recharts"
import { CalendarDays, Users, Image, FileText, Newspaper, ArrowUpRight, ArrowDownRight,UserCircle,Settings,LogOut } from "lucide-react"

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

export default function DashboardPage() {
  // Sample data for charts
  const activityData = [
    { name: "Jan", users: 400, publications: 240, news: 180, images: 320 },
    { name: "Feb", users: 430, publications: 250, news: 210, images: 340 },
    { name: "Mar", users: 450, publications: 260, news: 190, images: 380 },
    { name: "Apr", users: 470, publications: 255, news: 230, images: 400 },
    { name: "May", users: 540, publications: 290, news: 220, images: 450 },
    { name: "Jun", users: 580, publications: 310, news: 250, images: 470 }
  ];

  const contentDistribution = [
    { name: "Images", value: 470 },
    { name: "News", value: 250 },
    { name: "Publications", value: 310 },
  ];

  const recentUsers = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Editor", status: "Active", lastActive: "Today" },
    { id: 2, name: "Sarah Miller", email: "sarah@example.com", role: "Admin", status: "Active", lastActive: "Yesterday" },
    { id: 3, name: "Marcus Reid", email: "marcus@example.com", role: "Contributor", status: "Inactive", lastActive: "3 days ago" },
    { id: 4, name: "Taylor Wong", email: "taylor@example.com", role: "Viewer", status: "Active", lastActive: "Today" },
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
  <div className=" mx-auto px-4 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <a href="/" className="text-xl font-bold text-[#1B4332] flex items-center gap-2">
        <img src="/images/nys-logo.jpg" alt="NYS Logo" className="h-12 w-12 rounded-full" />
        NYS Admin Dashboard
      </a>
      
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, Admin</span>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center space-x-2 hover:text-[#1B4332]">
              <UserCircle className="h-8 w-8" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-white border rounded-md shadow-lg p-1">
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 rounded-sm px-2 py-1.5 flex gap-4">
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 rounded-sm px-2 py-1.5 flex gap-4">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1 bg-gray-200" />
            <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 rounded-sm px-2 py-1.5 flex gap-4">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</nav>
    <div className="flex-1 space-y-4 p-6 pt-6 bg-gray-50 mt-16">
        
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-500">February 25, 2025</span>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-white border">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gallery">Image Gallery</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {/* Statistics cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <p className="text-2xl font-bold">2,851</p>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>12% from last month</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Image Gallery</p>
                    <p className="text-2xl font-bold">1,280</p>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>8% from last month</span>
                    </div>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Image className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Publications</p>
                    <p className="text-2xl font-bold">842</p>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>5% from last month</span>
                    </div>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">News Articles</p>
                    <p className="text-2xl font-bold">576</p>
                    <div className="flex items-center text-sm text-red-500">
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                      <span>3% from last month</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Newspaper className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts section */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>
                  Monthly activity across all categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="publications" stroke="#f59e0b" strokeWidth={2} />
                    <Line type="monotone" dataKey="news" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="images" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Content Distribution</CardTitle>
                <CardDescription>
                  Breakdown of current content
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={contentDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {contentDistribution.map((entry, index) => {
                        const colors = ["#8b5cf6", "#10b981", "#f59e0b"];
                        return <Pie key={`cell-${index}`} fill={colors[index % colors.length]} dataKey={2} />;
                      })}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Table section */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>
                Users who recently accessed the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Email</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Role</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{user.name}</td>
                        <td className="py-3 px-4 text-gray-500">{user.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.role === "Admin" ? "bg-purple-100 text-purple-800" : 
                            user.role === "Editor" ? "bg-blue-100 text-blue-800" : 
                            user.role === "Contributor" ? "bg-amber-100 text-amber-800" : 
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === "Active" ? "bg-green-100 text-green-800" : 
                            "bg-red-100 text-red-800"
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-500">{user.lastActive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Overview />
        </TabsContent>
        
        <TabsContent value="gallery" className="space-y-4">
          <ImageGallery />
        </TabsContent>
        
        <TabsContent value="news" className="space-y-4">
          <NewsManager />
        </TabsContent>
        
        <TabsContent value="publications" className="space-y-4">
          <PublicationsManager />
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <UserManagement />
        </TabsContent>
      </Tabs>
    </div>
    <footer className="bg-[#2563EB] text-white py-12">
  <div className="container mx-auto px-4 lg:px-8">
    <div className=" text-center text-blue-100">
      <p>© {new Date().getFullYear()} National Youth Service. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </>
  )
}