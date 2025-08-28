import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Target, Clock, Brain, CheckCircle, Zap } from "lucide-react";

const Analytics = () => {
  const productivityMetrics = [
    {
      title: "Productivity Score",
      value: "87%",
      change: "+12%",
      trend: "up",
      icon: Activity,
      description: "Overall productivity rating"
    },
    {
      title: "Focus Time",
      value: "6.2h",
      change: "+0.8h",
      trend: "up", 
      icon: Clock,
      description: "Daily average deep work"
    },
    {
      title: "Task Completion",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: CheckCircle,
      description: "Tasks completed on time"
    },
    {
      title: "AI Assistance",
      value: "24x",
      change: "+8x",
      trend: "up",
      icon: Brain,
      description: "AI interactions this week"
    }
  ];

  const weeklyData = [
    { day: "Mon", productivity: 78, tasks: 12, focus: 5.2 },
    { day: "Tue", productivity: 85, tasks: 8, focus: 6.8 },
    { day: "Wed", productivity: 92, tasks: 15, focus: 7.1 },
    { day: "Thu", productivity: 87, tasks: 10, focus: 6.4 },
    { day: "Fri", productivity: 94, tasks: 18, focus: 8.2 },
    { day: "Sat", productivity: 76, tasks: 5, focus: 4.1 },
    { day: "Sun", productivity: 68, tasks: 3, focus: 2.8 }
  ];

  const goals = [
    {
      title: "Complete 100 Tasks",
      progress: 87,
      target: "100",
      current: "87",
      deadline: "End of Month"
    },
    {
      title: "40h Focus Time/Week",
      progress: 75,
      target: "40h",
      current: "30h",
      deadline: "Weekly Goal"
    },
    {
      title: "AI Optimization Score 90+",
      progress: 96,
      target: "90%",
      current: "87%",
      deadline: "Quarterly Goal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track your productivity patterns and insights</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productivityMetrics.map((metric, index) => (
              <Card key={index} className="card-glass">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-success" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                    <span className={`text-xs ${metric.trend === "up" ? "text-success" : "text-destructive"}`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Progress Chart */}
            <div className="lg:col-span-2">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Performance</CardTitle>
                  <CardDescription>Your productivity trends over the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyData.map((day, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 text-sm font-medium text-muted-foreground">
                          {day.day}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Productivity</span>
                            <span>{day.productivity}%</span>
                          </div>
                          <Progress value={day.productivity} className="h-2" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{day.tasks}</div>
                          <div className="text-xs text-muted-foreground">tasks</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{day.focus}h</div>
                          <div className="text-xs text-muted-foreground">focus</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Goals & Targets */}
            <div className="space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Goals Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {goals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-sm">{goal.title}</div>
                          <div className="text-xs text-muted-foreground">{goal.deadline}</div>
                        </div>
                        <Badge variant={goal.progress >= 90 ? "default" : "secondary"} className="text-xs">
                          {goal.current}/{goal.target}
                        </Badge>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    AI Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-sm font-medium text-primary">Peak Performance</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Your best focus time is 9-11 AM. Schedule important tasks then.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <div className="text-sm font-medium text-success">Improvement Trend</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Task completion rate improved 15% this week!
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <div className="text-sm font-medium text-warning">Recommendation</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Consider taking breaks every 90 minutes for optimal focus.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;