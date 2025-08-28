import { Header } from '@/components/layout/Header';
import { ProductivityDashboard } from '@/components/dashboard/ProductivityDashboard';
import { TaskManager } from '@/components/dashboard/TaskManager';
import { AIChat } from '@/components/dashboard/AIChat';
import { DocumentAnalyzer } from '@/components/dashboard/DocumentAnalyzer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3,
  FileText,
  MessageSquare,
  Calendar,
  Clock,
  Code2,
  Palette,
  Database,
  Smartphone,
  Shield
} from 'lucide-react';
import aiHeroImage from '@/assets/ai-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-secondary opacity-50"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white border-0 mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  DAMIJOSH AI Platform
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Intelligent
                  <span className="gradient-primary bg-clip-text text-transparent block">
                    Productivity Assistant
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your workflow with AI-driven task management, document analysis, 
                  and intelligent automation. Built for professionals who demand excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">87%</div>
                  <p className="text-sm text-muted-foreground">Productivity Boost</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">4.2h</div>
                  <p className="text-sm text-muted-foreground">Time Saved Daily</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">98%</div>
                  <p className="text-sm text-muted-foreground">User Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={aiHeroImage} 
                alt="AI Neural Network Visualization" 
                className="relative z-10 rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="gradient-primary text-white border-0 mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Advanced Features
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to
              <span className="gradient-primary bg-clip-text text-transparent"> Supercharge Productivity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of work with AI-powered tools designed to enhance every aspect of your productivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <Card className="card-glass p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Smart Task Management</h3>
                    <p className="text-muted-foreground">AI-powered prioritization and automation</p>
                  </div>
                </div>
                <TaskManager />
              </Card>

              <Card className="card-glass p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Productivity Analytics</h3>
                    <p className="text-muted-foreground">Deep insights into your work patterns</p>
                  </div>
                </div>
                <ProductivityDashboard />
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="card-glass p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">AI Assistant Chat</h3>
                    <p className="text-muted-foreground">Natural language productivity companion</p>
                  </div>
                </div>
                <AIChat />
              </Card>

              <Card className="card-glass p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Document Intelligence</h3>
                    <p className="text-muted-foreground">Automated analysis and insights</p>
                  </div>
                </div>
                <DocumentAnalyzer />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="gradient-primary text-white border-0 mb-4">
              <Code2 className="w-4 h-4 mr-2" />
              Built with Modern Technology
            </Badge>
            <h3 className="text-3xl font-bold mb-4">Portfolio Showcase</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This productivity dashboard demonstrates modern web development practices using 
              the latest technologies and best practices for enterprise-grade applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="card-glass p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">React + TypeScript</h4>
              <p className="text-muted-foreground text-sm">
                Built with modern React 18, TypeScript for type safety, and functional components with hooks.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-success" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Tailwind + shadcn/ui</h4>
              <p className="text-muted-foreground text-sm">
                Responsive design with Tailwind CSS and beautiful UI components from shadcn/ui library.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-warning" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Supabase Integration</h4>
              <p className="text-muted-foreground text-sm">
                Connected to Supabase for authentication, real-time database, and backend services.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Mobile Responsive</h4>
              <p className="text-muted-foreground text-sm">
                Fully responsive design that works perfectly on desktop, tablet, and mobile devices.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-destructive" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Security First</h4>
              <p className="text-muted-foreground text-sm">
                Implements security best practices with proper authentication and data protection.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Performance Optimized</h4>
              <p className="text-muted-foreground text-sm">
                Built with Vite for lightning-fast development and optimized production builds.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-semibold text-lg">DAMIJOSH Portfolio Project</span>
              </div>
              <div className="text-muted-foreground">
                Demonstrating full-stack development capabilities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/30">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">DAMIJOSH</div>
                <div className="text-xs text-muted-foreground">AI Productivity Assistant</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and modern AI integration patterns
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
