import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  Code2,
  Palette,
  Database,
  Smartphone,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Globe,
  ArrowRight
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-secondary opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="gradient-primary text-white border-0 animate-bounce-in">
              <Brain className="w-4 h-4 mr-2" />
              About DAMIJOSH
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The Future of
              <span className="gradient-primary bg-clip-text text-transparent block">
                Productivity is Here
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DAMIJOSH represents the cutting edge of AI-powered productivity solutions, 
              designed to revolutionize how professionals work, collaborate, and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="gradient-primary text-white border-0">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold">
                Empowering Every Professional with 
                <span className="gradient-primary bg-clip-text text-transparent"> AI Intelligence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that artificial intelligence should enhance human capabilities, not replace them. 
                Our platform combines advanced AI algorithms with intuitive design to create tools that 
                adapt to your workflow, learn from your habits, and amplify your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button className="gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-300">
              <Card className="card-glass p-6 hover:scale-105 transition-smooth">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 animate-float">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">10K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </Card>

              <Card className="card-glass p-6 hover:scale-105 transition-smooth">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 animate-float animation-delay-500">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div className="text-2xl font-bold mb-1">300%</div>
                <p className="text-sm text-muted-foreground">Productivity Gain</p>
              </Card>

              <Card className="card-glass p-6 hover:scale-105 transition-smooth">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 animate-float animation-delay-1000">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </Card>

              <Card className="card-glass p-6 hover:scale-105 transition-smooth">
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4 animate-float animation-delay-1500">
                  <Globe className="h-6 w-6 text-warning" />
                </div>
                <div className="text-2xl font-bold mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="gradient-primary text-white border-0 mb-4 animate-bounce-in">
              <Code2 className="w-4 h-4 mr-2" />
              Built with Modern Technology
            </Badge>
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
              Our platform leverages the latest technologies to deliver exceptional performance, 
              security, and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 animate-float">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">React + TypeScript</h4>
              <p className="text-muted-foreground text-sm">
                Modern React 18 with TypeScript for type safety and robust development.
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-200">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 animate-float animation-delay-500">
                <Palette className="h-6 w-6 text-success" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Tailwind + shadcn/ui</h4>
              <p className="text-muted-foreground text-sm">
                Responsive design with Tailwind CSS and beautiful UI components.
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-400">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4 animate-float animation-delay-1000">
                <Database className="h-6 w-6 text-warning" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Supabase Backend</h4>
              <p className="text-muted-foreground text-sm">
                Scalable backend with real-time database and authentication.
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-600">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 animate-float animation-delay-1500">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Mobile Responsive</h4>
              <p className="text-muted-foreground text-sm">
                Perfect experience across desktop, tablet, and mobile devices.
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-800">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 animate-float animation-delay-2000">
                <Shield className="h-6 w-6 text-destructive" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Enterprise Security</h4>
              <p className="text-muted-foreground text-sm">
                Bank-grade security with proper authentication and data protection.
              </p>
            </Card>

            <Card className="card-glass p-6 hover:scale-105 transition-smooth animate-fade-in animation-delay-1000">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 animate-float animation-delay-2500">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground text-sm">
                Optimized performance with Vite for instant loading and updates.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who have already revolutionized their workflow with DAMIJOSH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button className="gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  View Live Demo
                </Button>
              </Link>
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
              Built with passion for productivity and innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;