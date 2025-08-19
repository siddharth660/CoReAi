import { Button } from "./ui/button";
import { Snowflake, Home, Upload, Mail, BarChart3, Info } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "upload", label: "Resume", icon: Upload },
    { id: "outreach", label: "Outreach", icon: Mail },
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-30 blur animate-pulse-glow"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text-primary">ColdReach AI</h1>
                <p className="text-xs text-muted-foreground">AI Job Outreach</p>
              </div>
            </div>
            
            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => onPageChange(item.id)}
                    className={`interactive-button relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "gradient-primary text-white shadow-lg glow-primary" 
                        : "text-foreground-secondary hover:text-foreground hover:bg-glass-bg"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl animate-pulse"></div>
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="interactive-button glass-card w-10 h-10 rounded-full"
                >
                  <BarChart3 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}