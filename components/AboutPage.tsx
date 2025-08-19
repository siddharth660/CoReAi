import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Brain, Target, Zap, Users, Mail, MapPin, Phone, Heart, Sparkles, ArrowRight, Send } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze your resume and match you with the perfect opportunities using cutting-edge technology.",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "glow-primary"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Our smart matching system identifies the most relevant companies and roles for your unique skill set and career aspirations.",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "glow-secondary"
    },
    {
      icon: Zap,
      title: "Automated Efficiency",
      description: "Save hours of manual work with intelligent email generation and automated outreach campaigns that get results.",
      gradient: "from-yellow-500 to-orange-500",
      glowColor: "glow-orange"
    },
    {
      icon: Users,
      title: "Human-Centered Design",
      description: "Built by job seekers, for job seekers. We understand the challenges and emotions of finding the right opportunity.",
      gradient: "from-teal-500 to-green-500",
      glowColor: "glow-teal"
    }
  ];

  const teamValues = [
    { icon: Heart, label: "Passion-Driven", description: "We're passionate about helping people find their dream jobs" },
    { icon: Sparkles, label: "Innovation First", description: "Constantly pushing the boundaries of AI and job search technology" },
    { icon: Users, label: "Community Focus", description: "Building a supportive community of job seekers and career growth" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm font-medium gradient-text-secondary">About ColdReach AI</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text-primary">Revolutionizing</span>
            <br />
            <span className="gradient-text-secondary">Job Search with AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed">
            We're combining artificial intelligence with personalized outreach to help 
            professionals land their dream jobs faster than ever before.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="glass-card p-10 rounded-3xl h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-xl glow-primary">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-foreground-secondary">Empowering careers through AI</p>
                </div>
              </div>
              
              <div className="space-y-6 text-foreground-secondary leading-relaxed">
                <p>
                  Our mission is to help job seekers reach the right opportunities with AI automation. 
                  We believe that finding a job shouldn't be a full-time job itself.
                </p>
                <p>
                  By leveraging cutting-edge artificial intelligence, we analyze your skills, experience, and 
                  career goals to connect you with opportunities that truly match your potential.
                </p>
                <p>
                  ColdReach AI transforms the traditional job search from a numbers game into a 
                  strategic, targeted approach that maximizes your chances of success while saving you time.
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                {teamValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-foreground-secondary">{value.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            {/* AI Illustration */}
            <div className="glass-card p-10 rounded-3xl h-full flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="relative">
                  <div className="w-40 h-40 mx-auto rounded-3xl gradient-secondary flex items-center justify-center shadow-2xl glow-secondary">
                    <Brain className="w-20 h-20 text-white" />
                  </div>
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-pulse"></div>
                  
                  {/* Floating elements around the brain */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg animate-float">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold gradient-text-secondary">AI-Driven Insights</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    Smart algorithms working around the clock to analyze opportunities, 
                    craft personalized emails, and find your perfect job match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-primary">Why Choose ColdReach AI?</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Experience the next generation of job searching with our comprehensive AI platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="interactive-card glass-card p-8 rounded-3xl group">
                  <div className="flex items-start space-x-6">
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-xl ${feature.glowColor}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}></div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-foreground-secondary leading-relaxed">{feature.description}</p>
                      <div className={`w-16 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="glass-card p-10 rounded-3xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center shadow-xl glow-teal">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
                  <p className="text-foreground-secondary">We'd love to hear from you</p>
                </div>
              </div>
              
              <p className="text-foreground-secondary leading-relaxed mb-8">
                Have questions about ColdReach AI? We'd love to hear from you. 
                Our team is here to help you succeed in your job search journey and achieve your career goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="text-foreground-secondary">hello@coldreachai.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-foreground-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-foreground-secondary">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button 
                  onClick={() => onNavigate("home")}
                  className="interactive-button gradient-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-xl glow-primary group"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-card p-10 rounded-3xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center shadow-xl glow-secondary">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
                  <p className="text-foreground-secondary">We'll get back to you soon</p>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="glass border-border text-foreground placeholder-muted-foreground h-12 rounded-xl focus:border-blue-400 focus:bg-blue-500/5 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="glass border-border text-foreground placeholder-muted-foreground h-12 rounded-xl focus:border-blue-400 focus:bg-blue-500/5 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="glass border-border text-foreground placeholder-muted-foreground h-12 rounded-xl focus:border-purple-400 focus:bg-purple-500/5 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help you?"
                    className="glass border-border text-foreground placeholder-muted-foreground h-12 rounded-xl focus:border-teal-400 focus:bg-teal-500/5 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your job search goals and how we can help..."
                    rows={5}
                    className="glass border-border text-foreground placeholder-muted-foreground rounded-xl resize-none focus:border-orange-400 focus:bg-orange-500/5 transition-all duration-300"
                  />
                </div>

                <Button 
                  type="submit"
                  className="interactive-button w-full gradient-secondary text-white py-4 rounded-2xl font-semibold shadow-xl glow-secondary group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Footer */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold gradient-text-primary">ColdReach AI</h4>
                <p className="text-foreground-secondary text-sm">Crafted with ❤️ in San Francisco</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-8 text-foreground-secondary mb-6">
              <button 
                onClick={() => onNavigate("home")}
                className="interactive-button hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate("dashboard")}
                className="interactive-button hover:text-foreground transition-colors"
              >
                Dashboard
              </button>
              <a href="#" className="interactive-button hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="interactive-button hover:text-foreground transition-colors">Terms</a>
            </div>
            
            <p className="text-muted-foreground">
              © 2024 ColdReach AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}