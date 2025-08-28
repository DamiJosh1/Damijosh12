import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Brain, 
  Zap, 
  Calendar,
  CheckCircle2,
  BarChart3
} from 'lucide-react';

export const ProductivityDashboard = () => {
  const stats = [
    {
      title: 'Tasks Completed',
      value: '18',
      change: '+12%',
      trend: 'up',
      icon: CheckCircle2,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      title: 'Focus Time',
      value: '6.2h',
      change: '+8%',
      trend: 'up',
      icon: Clock,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'AI Insights',
      value: '24',
      change: '+15%',
      trend: 'up',
      icon: Brain,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: 'Productivity Score',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ];

  const activities = [
    {
      time: '09:15',
      title: 'AI suggested optimal break time',
      type: 'insight',
      icon: Brain,
      color: 'text-accent',
    },
    {
      time: '10:30',
      title: 'Completed high-priority task',
      type: 'achievement',
      icon: Target,
      color: 'text-success',
    },
    {
      time: '11:45',
      title: 'Document analysis completed',
      type: 'analysis',
      icon: BarChart3,
      color: 'text-primary',
    },
    {
      time: '14:20',
      title: 'Focus session: 2h 15m',
      type: 'focus',
      icon: Zap,
      color: 'text-warning',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card-glass">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge 
                  variant="outline" 
                  className={`${
                    stat.trend === 'up' ? 'border-success/50 text-success' : 'border-destructive/50 text-destructive'
                  }`}
                >
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Weekly Progress */}
      <Card className="card-glass">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Weekly Progress</h3>
              <p className="text-sm text-muted-foreground">Your productivity journey this week</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">87%</div>
              <p className="text-xs text-muted-foreground">Weekly Goal</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Tasks Completed</span>
              <span className="text-muted-foreground">18/25</span>
            </div>
            <Progress value={72} className="h-2" />
            
            <div className="flex items-center justify-between text-sm">
              <span>Focus Hours</span>
              <span className="text-muted-foreground">31.2/40h</span>
            </div>
            <Progress value={78} className="h-2" />
            
            <div className="flex items-center justify-between text-sm">
              <span>AI Optimizations</span>
              <span className="text-muted-foreground">24/30</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="card-glass">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Recent Activity</h3>
          </div>
          
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card-elevated transition-smooth">
                <div className="text-xs text-muted-foreground w-12">
                  {activity.time}
                </div>
                <div className={`w-8 h-8 rounded-full bg-card-elevated flex items-center justify-center`}>
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.title}</p>
                  <Badge variant="outline" className="text-xs mt-1 capitalize">
                    {activity.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* AI Recommendations */}
      <Card className="card-glass">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold">AI Recommendations</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Peak Performance Window</h4>
                  <p className="text-xs text-muted-foreground">
                    Schedule your most challenging tasks between 9:00-11:30 AM when your focus is highest.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Task Prioritization</h4>
                  <p className="text-xs text-muted-foreground">
                    Consider breaking down "Prepare presentation" into smaller, actionable subtasks for better progress tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};