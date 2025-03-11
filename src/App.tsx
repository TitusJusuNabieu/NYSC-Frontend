import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about";
import OurHistory from "./pages/about/our-history";
import VisionAndMission from "./pages/about/vision-and-mission";
import ApplyPage from "./pages/apply";
import OurObjectives from "./pages/about/our-objectives";
import OrganizationOverview from "./pages/about/overview";
import AdmissionRequirement from "./pages/programs/admission-requirement";
import NewsPage from "./pages/media-center/news";
import NewsDetail from "./pages/media-center/news/id";
import LeadershipPage from "./pages/about/leadership";
import Gallery from "./pages/media-center/gallery";
import Publications from "./pages/media-center/publications";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/admin/auth/login";
import Dashboard from "./pages/admin/dashboard";
import SuccessStories from "./pages/success-stories";
import BookOfLife from "./pages/book-of-life";
import AlumniPage from "./pages/alumni";
import FormalPrograms from "./pages/programs/formal";
import NonFormalPrograms from "./pages/programs/non-formal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="#" element={<About />} />
          <Route path="/about/our-history" element={<OurHistory />} />
          <Route path="/about/vision-and-mission" element={<VisionAndMission />} />
          <Route path="/about/overview" element={<OrganizationOverview />} />
          <Route path="/about/our-objectives" element={<OurObjectives />} />
          <Route path="/programs/admission-requirement" element={<AdmissionRequirement />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/apply" element={<ApplyPage/>}/>
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/media-center/gallery" element={<Gallery />} />
          <Route path="/media-center/publications" element={<Publications />} />
          <Route path="/about/leadership/" element={<LeadershipPage/>}/>
          <Route path="/contact" element={<Contact />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
          
          {/* New routes */}
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/book-of-life" element={<BookOfLife />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/programs/formal" element={<FormalPrograms />} />
          <Route path="/programs/non-formal" element={<NonFormalPrograms />} />
          
          {/* ... rest of the routes ... */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;