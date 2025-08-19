import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Brain, Target, Mail, ArrowRight, Sparkles, Zap, Users } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Brain,
      title: "Resume Analysis",
      description: "AI-powered analysis extracts key skills and experience from your resume with precision.",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "glow-primary"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Advanced algorithms match you with relevant opportunities based on your profile.",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "glow-secondary"
    },
    {
      icon: Mail,
      title: "Automated Cold Emails",
      description: "Generate personalized outreach emails that get responses from hiring managers.",
      gradient: "from-teal-500 to-green-500",
      glowColor: "glow-teal"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6 animate-glow">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="text-sm font-medium gradient-text-primary">Powered by Advanced AI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text-primary">Your AI Job</span>
              <br />
              <span className="gradient-text-secondary">Outreach Partner</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
              Upload your resume. Get matched. Send smart cold emails effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                onClick={() => onNavigate("upload")}
                className="interactive-button gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl glow-primary group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline"
                className="interactive-card px-8 py-4 rounded-2xl text-lg font-semibold border-2 hover:bg-glass-bg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex flex-col items-center space-y-4 animate-float">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-xl glow-primary">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
                    <span className="text-sm font-medium text-foreground-secondary">AI Analysis</span>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-accent-teal animate-pulse" />

                <div className="flex flex-col items-center space-y-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center shadow-xl glow-secondary">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-2"></div>
                    <span className="text-sm font-medium text-foreground-secondary">Job Matching</span>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-accent-orange animate-pulse" />

                <div className="flex flex-col items-center space-y-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center shadow-xl glow-teal">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-2"></div>
                    <span className="text-sm font-medium text-foreground-secondary">Cold Emails</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-primary">Powerful Features</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Experience the future of job searching with our AI-powered platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`interactive-card glass-card p-8 rounded-3xl h-full ${feature.glowColor} group-hover:${feature.glowColor}`}>
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-20 blur-lg animate-pulse`}></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-foreground-secondary leading-relaxed">{feature.description}</p>
                      
                      <div className="pt-4">
                        <div className={`w-16 h-1 mx-auto bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold mb-8 gradient-text-primary">Join Thousands of Successful Job Seekers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10K+", label: "Resumes Analyzed" },
                { number: "85%", label: "Response Rate" },
                { number: "500+", label: "Companies Reached" },
                { number: "2.3x", label: "Faster Job Placement" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold font-mono gradient-text-secondary">{stat.number}</div>
                  <div className="text-sm text-foreground-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Land Your <span className="gradient-text-primary">Dream Job</span>?
              </h3>
              <p className="text-xl text-foreground-secondary mb-8">
                Start your AI-powered job search journey today
              </p>
              <Button 
                onClick={() => onNavigate("upload")}
                className="interactive-button gradient-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl glow-primary"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold gradient-text-primary">ColdReach AI</span>
            </div>
            
            <div className="flex items-center space-x-8 text-foreground-secondary">
              <button 
                onClick={() => onNavigate("about")}
                className="hover:text-foreground transition-colors interactive-button"
              >
                About
              </button>
              <button 
                onClick={() => onNavigate("about")}
                className="hover:text-foreground transition-colors interactive-button"
              >
                Contact
              </button>
              <a href="#" className="hover:text-foreground transition-colors interactive-button">Privacy</a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 ColdReach AI. Crafted with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}