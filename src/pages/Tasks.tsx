import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { TaskManager } from "@/components/dashboard/TaskManager";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Calendar, Filter, Plus } from "lucide-react";

const Tasks = () => {
  const [filter, setFilter] = useState("all");

  const stats = [
    {
      title: "Total Tasks",
      value: "24",
      change: "+3 from yesterday",
      icon: Calendar,
      color: "text-primary"
    },
    {
      title: "Completed",
      value: "18",
      change: "+75% completion rate",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      title: "In Progress", 
      value: "4",
      change: "2 due today",
      icon: Clock,
      color: "text-warning"
    },
    {
      title: "Overdue",
      value: "2",
      change: "-1 from yesterday",
      icon: Clock,
      color: "text-destructive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Task Management</h1>
              <p className="text-muted-foreground mt-2">Organize and track your productivity</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-glass">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {["all", "pending", "completed", "overdue"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterType)}
                className="capitalize"
              >
                {filterType}
              </Button>
            ))}
          </div>

          {/* Task Manager Component */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TaskManager />
            </div>
            
            {/* Productivity Insights */}
            <div className="space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Tasks Completed</span>
                      <span>18/24</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Daily Goals</span>
                      <span>5/7</span>
                    </div>
                    <Progress value={71} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Focus Time</span>
                      <span>32/40h</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Filter className="h-4 w-4" />
                    Filter by Priority
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Tasks
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Bulk Complete
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;