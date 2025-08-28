import { Header } from '@/components/layout/Header';
import { ProductivityDashboard } from '@/components/dashboard/ProductivityDashboard';
import { TaskManager } from '@/components/dashboard/TaskManager';
import { AIChat } from '@/components/dashboard/AIChat';
import { DocumentAnalyzer } from '@/components/dashboard/DocumentAnalyzer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/AuthContext';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  BarChart3,
  FileText,
  MessageSquare,
  Clock,
  TrendingUp,
  Zap,
  Users,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center animate-float">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          {/* Welcome Header */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {greeting}, {user?.name}! 👋
                </h1>
                <p className="text-muted-foreground">
                  Here's your productivity overview for today
                </p>
              </div>
              <Badge className="gradient-primary text-white border-0 animate-bounce-in self-start md:self-center">
                <Zap className="w-4 h-4 mr-2" />
                AI Powered
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8">
              <Card className="card-glass p-4 hover:scale-105 transition-smooth animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Tasks Today</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glass p-4 hover:scale-105 transition-smooth animate-fade-in animation-delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">89%</div>
                    <p className="text-xs text-muted-foreground">Productivity</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glass p-4 hover:scale-105 transition-smooth animate-fade-in animation-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">6.2h</div>
                    <p className="text-xs text-muted-foreground">Focus Time</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glass p-4 hover:scale-105 transition-smooth animate-fade-in animation-delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Meetings</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6 md:space-y-8">
              <Card className="card-glass p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center animate-float">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">Smart Task Management</h3>
                    <p className="text-sm text-muted-foreground">AI-powered prioritization and automation</p>
                  </div>
                </div>
                <TaskManager />
              </Card>

              <Card className="card-glass p-6 md:p-8 animate-fade-in animation-delay-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center animate-float animation-delay-500">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">Productivity Analytics</h3>
                    <p className="text-sm text-muted-foreground">Deep insights into your work patterns</p>
                  </div>
                </div>
                <ProductivityDashboard />
              </Card>
            </div>

            <div className="space-y-6 md:space-y-8">
              <Card className="card-glass p-6 md:p-8 animate-fade-in animation-delay-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center animate-float animation-delay-1000">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">AI Assistant Chat</h3>
                    <p className="text-sm text-muted-foreground">Natural language productivity companion</p>
                  </div>
                </div>
                <AIChat />
              </Card>

              <Card className="card-glass p-6 md:p-8 animate-fade-in animation-delay-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center animate-float animation-delay-1500">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">Document Intelligence</h3>
                    <p className="text-sm text-muted-foreground">Automated analysis and insights</p>
                  </div>
                </div>
                <DocumentAnalyzer />
              </Card>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;