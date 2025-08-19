import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import ResumeUploadPage from "./components/ResumeUploadPage";
import EmailOutreachPage from "./components/EmailOutreachPage";
import DashboardPage from "./components/DashboardPage";
import AboutPage from "./components/AboutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Initialize theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={handlePageChange} />;
      case "upload":
        return <ResumeUploadPage onNavigate={handlePageChange} />;
      case "outreach":
        return <EmailOutreachPage onNavigate={handlePageChange} />;
      case "dashboard":
        return <DashboardPage onNavigate={handlePageChange} />;
      case "about":
        return <AboutPage onNavigate={handlePageChange} />;
      default:
        return <LandingPage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen transition-all duration-300">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="relative overflow-hidden">
        {renderCurrentPage()}
      </main>
    </div>
  );
}