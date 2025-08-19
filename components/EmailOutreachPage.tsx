import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Mail, Send, RefreshCw, User, Building, Sparkles, Zap, ArrowRight, MessageCircle, Clock } from "lucide-react";

interface EmailOutreachPageProps {
  onNavigate: (page: string) => void;
}

export default function EmailOutreachPage({ onNavigate }: EmailOutreachPageProps) {
  const [selectedTone, setSelectedTone] = useState("professional");
  const [selectedEmail, setSelectedEmail] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  const emailDrafts = [
    {
      tone: "Professional",
      subject: "Software Engineer Opportunity - Strategic Partnership",
      preview: "Dear Hiring Manager, I hope this email finds you well...",
      content: `Dear Hiring Manager,

I hope this email finds you well. I came across your company's innovative work in the technology sector and was impressed by your commitment to cutting-edge solutions and digital transformation.

As a passionate software engineer with extensive experience in React, Python, and cloud technologies, I believe I could contribute meaningfully to your engineering team. I've been following your recent product launches and company growth, and I'm excited about the possibility of contributing to your continued success.

My background includes:
• Full-stack development with modern frameworks
• Cloud architecture and scalable systems design
• Agile development methodologies and team leadership

Would you be open to a brief conversation about potential opportunities? I'd be happy to share my portfolio and discuss how my technical expertise can add value to your engineering initiatives.

Best regards,
[Your Name]`,
      responseRate: "85%",
      openRate: "92%"
    },
    {
      tone: "Friendly",
      subject: "Excited About Joining Your Amazing Team! 🚀",
      preview: "Hi there! I've been following your company for a while...",
      content: `Hi there!

I've been following your company for a while now, and I'm genuinely excited about the possibility of joining your team. Your approach to solving complex technical challenges really resonates with me, and I love the innovative culture you've built.

I'm a software engineer with a strong passion for full-stack development, particularly with React and Node.js. I've worked on several projects that mirror the challenges your team faces, and I'd love to bring that experience and enthusiasm to your organization.

What really draws me to your company is your commitment to both technical excellence and positive team culture. I believe great software comes from great teams, and I'd be thrilled to contribute to both.

I'd appreciate the opportunity to chat about how I might fit into your current projects. Are you available for a quick call this week? I promise it'll be worth your time!

Looking forward to hearing from you!

Cheers,
[Your Name]`,
      responseRate: "78%",
      openRate: "96%"
    },
    {
      tone: "Persuasive",
      subject: "How I Can Help Scale Your Engineering Team",
      preview: "I noticed your recent Series B funding announcement...",
      content: `Dear [Hiring Manager Name],

I noticed your recent Series B funding announcement and the ambitious growth plans outlined in your latest blog post. Congratulations on this significant milestone!

As you scale your engineering team, I believe my experience building and optimizing high-performance applications could be valuable to your continued growth. Here's what I bring to the table:

📈 **Proven Track Record**: Successfully led development of applications serving 100K+ users
⚡ **Performance Optimization**: Improved application speed by 40% through strategic refactoring
🔧 **Technical Leadership**: Mentored junior developers and established coding best practices
☁️ **Scalability Expertise**: Designed cloud-native architectures handling massive traffic spikes

I understand the challenges of rapid scaling - maintaining code quality while shipping fast, building robust systems that grow with user demand, and fostering a collaborative engineering culture.

I'd love to discuss how my experience can help you navigate these challenges and achieve your ambitious goals. Could we schedule a 15-minute call this week?

Looking forward to contributing to your success,
[Your Name]

P.S. I've attached my portfolio showcasing projects similar to your technical stack.`,
      responseRate: "91%",
      openRate: "89%"
    }
  ];

  const handleGenerateEmail = () => {
    setIsGenerating(true);
    setShowTyping(true);
    setTypingText("");
    
    // Simulate AI generating text
    const newEmail = emailDrafts[(selectedEmail + 1) % emailDrafts.length];
    const words = newEmail.content.split(' ');
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < Math.min(words.length, 20)) {
        setTypingText(prev => prev + (prev ? ' ' : '') + words[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowTyping(false);
          setSelectedEmail((selectedEmail + 1) % emailDrafts.length);
          setIsGenerating(false);
        }, 1000);
      }
    }, 100);
  };

  const currentEmail = emailDrafts[selectedEmail];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <MessageCircle className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm font-medium gradient-text-secondary">AI Email Generator</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-secondary">Email Outreach</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Generate personalized cold emails that get responses from hiring managers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Email Generation */}
          <div className="space-y-6">
            {/* Generator Controls */}
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">AI Email Generator</h3>
                  <p className="text-foreground-secondary text-sm">Craft the perfect cold email</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Email Tone
                  </label>
                  <Select value={selectedTone} onValueChange={setSelectedTone}>
                    <SelectTrigger className="glass border-border text-foreground h-12 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-border rounded-xl">
                      <SelectItem value="professional">💼 Professional</SelectItem>
                      <SelectItem value="friendly">😊 Friendly</SelectItem>
                      <SelectItem value="persuasive">🎯 Persuasive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleGenerateEmail}
                  disabled={isGenerating}
                  className="interactive-button w-full gradient-secondary text-white py-4 rounded-xl font-semibold shadow-lg glow-secondary group"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Generating Magic...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Generate Email
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Email Drafts List */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-lg font-bold text-foreground mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                Generated Drafts
              </h4>
              
              <div className="space-y-4">
                {emailDrafts.map((draft, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedEmail(index)}
                    className={`interactive-card p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
                      selectedEmail === index 
                        ? 'border-purple-400 bg-purple-500/10 glow-secondary' 
                        : 'border-border hover:border-purple-300 hover:bg-purple-500/5'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                            {draft.tone}
                          </Badge>
                          {selectedEmail === index && (
                            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full">
                              Active
                            </Badge>
                          )}
                        </div>
                        <h5 className="font-semibold text-foreground text-sm mb-1">{draft.subject}</h5>
                        <p className="text-foreground-secondary text-xs leading-relaxed">{draft.preview}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-4 text-foreground-secondary">
                        <span>📈 {draft.responseRate} response</span>
                        <span>👀 {draft.openRate} open</span>
                      </div>
                      <Clock className="w-3 h-3 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Email Preview */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Email Preview</h3>
                    <p className="text-foreground-secondary text-sm">Live preview of your email</p>
                  </div>
                </div>
                <Button
                  onClick={() => onNavigate("dashboard")}
                  className="interactive-button gradient-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg glow-primary group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Send Email
                </Button>
              </div>

              {/* Email Header */}
              <div className="space-y-6">
                <div className="glass p-4 rounded-2xl border border-border">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your Name</p>
                      <p className="text-foreground-secondary text-sm">your.email@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground-secondary text-sm">To: hiring@company.com</span>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Subject Line</label>
                  <div className="glass p-4 rounded-2xl border border-border">
                    <p className="text-foreground font-medium">{currentEmail.subject}</p>
                  </div>
                </div>

                {/* Email Body */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Message</label>
                  <div className="relative">
                    {showTyping && (
                      <div className="absolute inset-0 glass p-4 rounded-2xl border border-purple-400 bg-purple-500/5 z-10">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                          <span className="text-sm text-purple-600 font-medium">AI is writing...</span>
                        </div>
                        <p className="text-foreground font-mono text-sm leading-relaxed">
                          {typingText}
                          <span className="inline-block w-2 h-5 bg-purple-500 ml-1 animate-pulse"></span>
                        </p>
                      </div>
                    )}
                    
                    <Textarea 
                      value={currentEmail.content}
                      rows={14}
                      className="glass border-border text-foreground resize-none rounded-2xl p-4 leading-relaxed"
                      readOnly
                    />
                  </div>
                </div>

                {/* Email Actions */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    onClick={() => onNavigate("dashboard")}
                    className="interactive-button flex-1 gradient-primary text-white py-3 rounded-xl font-semibold shadow-lg glow-primary"
                  >
                    Send Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="interactive-card border-2 border-border hover:border-teal-400 hover:bg-teal-500/5 px-6 py-3 rounded-xl font-semibold"
                  >
                    Save Draft
                  </Button>
                </div>

                {/* Email Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="glass p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold font-mono gradient-text-primary">{currentEmail.responseRate}</div>
                    <div className="text-xs text-foreground-secondary">Expected Response</div>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold font-mono gradient-text-secondary">{currentEmail.openRate}</div>
                    <div className="text-xs text-foreground-secondary">Open Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}