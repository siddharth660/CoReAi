import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Upload, FileText, CheckCircle, Brain, Sparkles, Target, Zap, ArrowRight, Cloud, Mail } from "lucide-react";

interface ResumeUploadPageProps {
  onNavigate: (page: string) => void;
}

export default function ResumeUploadPage({ onNavigate }: ResumeUploadPageProps) {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'analyzing' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = () => {
    setUploadState('uploading');
    setProgress(0);

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setUploadState('analyzing');

          // Simulate analysis
          setTimeout(() => {
            setUploadState('complete');
          }, 3000);

          return 100;
        }
        return prev + 8;
      });
    }, 150);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload();
  };

  const mockAnalysis = {
    jobCategories: ["Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "DevOps Engineer"],
    skills: ["React", "JavaScript", "TypeScript", "Python", "Node.js", "SQL", "Git", "AWS", "Docker", "MongoDB", "GraphQL", "REST APIs"],
    recommendation: "Based on your experience and skills, we suggest targeting Software Engineer, Data Analyst, and Product Manager roles. Your technical background shows strong potential for senior-level positions."
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <Brain className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium gradient-text-primary">AI-Powered Analysis</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-primary">Resume Analysis</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Upload your resume to get AI-powered insights and personalized job recommendations
          </p>
        </div>

        {uploadState === 'idle' && (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-12 rounded-3xl">
              <div
                className={`border-2 border-dashed rounded-2xl p-16 text-center transition-all duration-500 ${isDragOver
                  ? 'border-blue-400 bg-blue-500/10 scale-105 glow-primary'
                  : 'border-border hover:border-blue-300 hover:bg-blue-500/5'
                  }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-xl glow-primary animate-float">
                    <Cloud className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Drop your resume here
                </h3>
                <p className="text-foreground-secondary mb-8">
                  Or click to browse • Supports PDF, DOC, DOCX • Max 10MB
                </p>

                <Button
                  onClick={handleFileUpload}
                  className="interactive-button gradient-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-lg glow-primary"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Choose File
                </Button>
              </div>
            </div>
          </div>
        )}

        {(uploadState === 'uploading' || uploadState === 'analyzing') && (
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-12 rounded-3xl text-center">
              <div className="space-y-8">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto rounded-2xl gradient-secondary flex items-center justify-center shadow-xl animate-pulse-glow">
                    <Brain className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-glow"></div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {uploadState === 'uploading' ? 'Uploading Resume...' : 'AI Analysis in Progress...'}
                  </h3>

                  <div className="max-w-md mx-auto space-y-4">
                    <div className="relative">
                      <Progress
                        value={uploadState === 'uploading' ? progress : 100}
                        className="h-3 rounded-full bg-glass-bg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 blur-sm"></div>
                    </div>

                    <p className="text-foreground-secondary font-mono">
                      {uploadState === 'uploading'
                        ? `${progress}% uploaded`
                        : 'Extracting skills, experience, and qualifications...'
                      }
                    </p>
                  </div>
                </div>

                {uploadState === 'analyzing' && (
                  <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                    {['Skills', 'Experience', 'Achievements'].map((item, index) => (
                      <div
                        key={item}
                        className="glass p-3 rounded-xl animate-pulse"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        <div className="w-8 h-8 mx-auto rounded-lg gradient-primary mb-2 shimmer"></div>
                        <p className="text-xs text-foreground-secondary">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {uploadState === 'complete' && (
          <div className="space-y-8">
            {/* Success Header */}
            <div className="text-center">
              <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-xl glow-teal">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-foreground">Analysis Complete!</h3>
                    <p className="text-foreground-secondary">Your resume has been processed successfully</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis Results Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Job Categories */}
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Job Categories Matched</h4>
                    <p className="text-foreground-secondary text-sm">Based on your experience</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {mockAnalysis.jobCategories.map((category, index) => (
                    <Badge
                      key={index}
                      className="interactive-button gradient-primary text-white border-none px-4 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Skills Detected</h4>
                    <p className="text-foreground-secondary text-sm">Technical and soft skills</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mockAnalysis.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="interactive-button bg-glass-bg border border-border text-foreground hover:border-purple-400 hover:bg-purple-500/10 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Card */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
              <div className="relative">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-xl glow-orange flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">AI Recommendation</h4>
                    <p className="text-foreground-secondary leading-relaxed">{mockAnalysis.recommendation}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    onClick={() => onNavigate("outreach")}
                    className="interactive-button gradient-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg glow-primary group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Start Email Outreach
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => onNavigate("dashboard")}
                    className="interactive-card border-2 border-border hover:border-purple-400 hover:bg-purple-500/5 px-6 py-3 rounded-xl font-semibold"
                  >
                    View Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}