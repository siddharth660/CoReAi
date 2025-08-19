import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Building2, Clock, Mail, TrendingUp, CheckCircle, AlertCircle, Eye, Users, Target, Zap, ArrowRight, Calendar, BarChart3, Upload } from "lucide-react";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const applications = [
    {
      company: "TechCorp",
      role: "Senior Software Engineer",
      status: "Responded",
      appliedDate: "Jan 15, 2024",
      responseRate: 85,
      logo: "🚀"
    },
    {
      company: "InnovateAI",
      role: "Full Stack Developer",
      status: "Awaiting Reply",
      appliedDate: "Jan 12, 2024",
      responseRate: 65,
      logo: "🤖"
    },
    {
      company: "DataFlow",
      role: "Backend Engineer",
      status: "Applied",
      appliedDate: "Jan 10, 2024",
      responseRate: 45,
      logo: "📊"
    },
    {
      company: "CloudTech",
      role: "DevOps Engineer",
      status: "Applied",
      appliedDate: "Jan 8, 2024",
      responseRate: 30,
      logo: "☁️"
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      status: "Interview Scheduled",
      appliedDate: "Jan 5, 2024",
      responseRate: 95,
      logo: "⚡"
    }
  ];

  const followUps = [
    {
      company: "InnovateAI",
      dueDate: "Jan 20",
      type: "Initial Follow-up",
      priority: "high"
    },
    {
      company: "CloudTech",
      dueDate: "Jan 22",
      type: "Status Check",
      priority: "medium"
    },
    {
      company: "DataFlow",
      dueDate: "Jan 25",
      type: "Thank You Note",
      priority: "low"
    }
  ];

  const stats = [
    { 
      label: "Total Applications", 
      value: "24", 
      change: "+8 this week",
      icon: Mail, 
      color: "text-blue-500",
      bgColor: "from-blue-500 to-cyan-500"
    },
    { 
      label: "Response Rate", 
      value: "42%", 
      change: "+12% this month",
      icon: TrendingUp, 
      color: "text-green-500",
      bgColor: "from-green-500 to-teal-500"
    },
    { 
      label: "Open Rate", 
      value: "78%", 
      change: "+5% this week",
      icon: Eye, 
      color: "text-purple-500",
      bgColor: "from-purple-500 to-pink-500"
    },
    { 
      label: "Interviews", 
      value: "5", 
      change: "+3 scheduled",
      icon: Users, 
      color: "text-orange-500",
      bgColor: "from-orange-500 to-yellow-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Responded": return "bg-green-500 text-white";
      case "Interview Scheduled": return "bg-purple-500 text-white";
      case "Awaiting Reply": return "bg-yellow-500 text-white";
      case "Applied": return "bg-blue-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Responded": return CheckCircle;
      case "Interview Scheduled": return Users;
      case "Awaiting Reply": return Clock;
      case "Applied": return Mail;
      default: return AlertCircle;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-red-400 bg-red-500/10";
      case "medium": return "border-yellow-400 bg-yellow-500/10";
      case "low": return "border-green-400 bg-green-500/10";
      default: return "border-border bg-glass-bg";
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <BarChart3 className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium gradient-text-primary">Job Tracking Dashboard</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-primary">Your Progress</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl">
            Monitor your applications, track responses, and stay on top of follow-ups
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="interactive-card glass-card p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.bgColor} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono text-foreground">{stat.value}</div>
                    <div className="text-xs text-green-500 font-medium">{stat.change}</div>
                  </div>
                </div>
                <div>
                  <p className="text-foreground-secondary text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Applications Sent */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Applications Sent</h3>
                    <p className="text-foreground-secondary text-sm">Track your outreach progress</p>
                  </div>
                </div>
                <Button 
                  onClick={() => onNavigate("outreach")}
                  className="interactive-button gradient-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg glow-primary"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Send New Email
                </Button>
              </div>

              <div className="space-y-4">
                {applications.map((app, index) => {
                  const StatusIcon = getStatusIcon(app.status);
                  return (
                    <div key={index} className="interactive-card glass p-4 rounded-2xl border border-border hover:border-purple-300 hover:bg-purple-500/5 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-2xl">
                            {app.logo}
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground">{app.company}</h4>
                            <p className="text-foreground-secondary text-sm">{app.role}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Calendar className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{app.appliedDate}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge className={`${getStatusColor(app.status)} mb-3 text-xs font-semibold px-3 py-1 rounded-xl`}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {app.status}
                          </Badge>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs text-foreground-secondary">Response likelihood</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Progress value={app.responseRate} className="w-20 h-2 rounded-full bg-glass-bg" />
                              <span className="text-xs font-mono font-bold text-foreground">{app.responseRate}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Follow-ups Needed */}
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-500" />
                Follow-ups Needed
              </h3>
              
              <div className="space-y-4">
                {followUps.map((followUp, index) => (
                  <div 
                    key={index} 
                    className={`interactive-card p-4 rounded-2xl border-2 ${getPriorityColor(followUp.priority)} transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-sm">{followUp.company}</h4>
                      <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {followUp.priority}
                      </Badge>
                    </div>
                    <p className="text-foreground-secondary text-xs">{followUp.type}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Due: {followUp.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => onNavigate("outreach")}
                className="interactive-button w-full mt-6 gradient-secondary text-white py-3 rounded-xl font-semibold shadow-lg glow-secondary"
              >
                Send Follow-up
              </Button>
            </div>

            {/* Email Performance */}
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Email Performance
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary">This Week</span>
                  <span className="text-green-500 font-semibold">+12% ↗</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary text-sm">Emails Sent</span>
                    <span className="text-foreground font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary text-sm">Opened</span>
                    <span className="text-foreground font-semibold">6 (75%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary text-sm">Replied</span>
                    <span className="text-foreground font-semibold">3 (38%)</span>
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="pt-4">
                  <div className="h-16 flex items-end space-x-1 mb-2">
                    {[40, 60, 35, 80, 45, 70, 55].map((height, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-60 hover:opacity-100 transition-opacity duration-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs text-center">Last 7 days</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => onNavigate("upload")}
                  className="interactive-button w-full glass border-2 border-border hover:border-blue-400 hover:bg-blue-500/5 text-foreground py-3 rounded-xl font-medium"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Update Resume
                </Button>
                <Button 
                  onClick={() => onNavigate("outreach")}
                  className="interactive-button w-full glass border-2 border-border hover:border-purple-400 hover:bg-purple-500/5 text-foreground py-3 rounded-xl font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  New Campaign
                </Button>
                <Button 
                  onClick={() => onNavigate("about")}
                  className="interactive-button w-full glass border-2 border-border hover:border-teal-400 hover:bg-teal-500/5 text-foreground py-3 rounded-xl font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}