import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/components/auth/AuthContext';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3,
  MessageSquare,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import aiHeroImage from '@/assets/ai-hero.jpg';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Moving Text */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-secondary opacity-50"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white border-0 mb-4 animate-bounce-in">
                  <Sparkles className="w-4 h-4 mr-2" />
                  DAMIJOSH AI Platform
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary">
                    Your Intelligent
                  </span>
                  <span className="gradient-primary bg-clip-text text-transparent block mt-2 animate-fade-in animation-delay-1000">
                    Productivity Assistant
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in animation-delay-500">
                  Transform your workflow with AI-driven task management, document analysis, 
                  and intelligent automation. Built for professionals who demand excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-1000">
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button className="w-full sm:w-auto gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                      Go to Dashboard
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/auth">
                    <Button className="w-full sm:w-auto gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                )}
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
                <div className="text-center animate-bounce-in animation-delay-500">
                  <div className="text-xl md:text-2xl font-bold text-primary animate-pulse-slow">87%</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Productivity Boost</p>
                </div>
                <div className="text-center animate-bounce-in animation-delay-700">
                  <div className="text-xl md:text-2xl font-bold text-accent animate-pulse-slow">4.2h</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Time Saved Daily</p>
                </div>
                <div className="text-center animate-bounce-in animation-delay-1000">
                  <div className="text-xl md:text-2xl font-bold text-success animate-pulse-slow">98%</div>
                  <p className="text-xs md:text-sm text-muted-foreground">User Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float order-first lg:order-last">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>
              <img 
                src={aiHeroImage} 
                alt="AI Neural Network Visualization" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-border/50 transition-smooth hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="gradient-primary text-white border-0 mb-4 animate-bounce-in">
              <Brain className="w-4 h-4 mr-2" />
              Key Features
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
              Everything You Need to
              <span className="gradient-primary bg-clip-text text-transparent"> Boost Productivity</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
              Experience the future of work with AI-powered tools designed for modern professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 animate-float">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Tasks</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered task prioritization and management
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-200">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 animate-float animation-delay-500">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Deep insights into your productivity patterns
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-400">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 animate-float animation-delay-1000">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Chat</h3>
              <p className="text-muted-foreground text-sm">
                Natural language productivity assistant
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-600">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 animate-float animation-delay-1500">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Automation</h3>
              <p className="text-muted-foreground text-sm">
                Streamline workflows with intelligent automation
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="animate-bounce-in">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 animate-pulse-slow">10K+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="animate-bounce-in animation-delay-200">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2 animate-pulse-slow">500K+</div>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
            </div>
            <div className="animate-bounce-in animation-delay-400">
              <div className="text-2xl md:text-3xl font-bold text-success mb-2 animate-pulse-slow">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="animate-bounce-in animation-delay-600">
              <div className="text-2xl md:text-3xl font-bold text-warning mb-2 animate-pulse-slow">24/7</div>
              <p className="text-sm text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/30">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center animate-float">
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

export default Home;