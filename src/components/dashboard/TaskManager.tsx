import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Plus, Clock, Star, CheckCircle2, AlertCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  aiSuggested?: boolean;
}

export const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Review quarterly performance metrics',
      completed: false,
      priority: 'high',
      createdAt: new Date(),
      aiSuggested: true,
    },
    {
      id: '2',
      title: 'Prepare presentation for client meeting',
      completed: false,
      priority: 'high',
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'Update project documentation',
      completed: true,
      priority: 'medium',
      createdAt: new Date(),
    },
    {
      id: '4',
      title: 'Schedule team check-in meetings',
      completed: false,
      priority: 'low',
      createdAt: new Date(),
      aiSuggested: true,
    },
  ]);
  
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    
    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
      priority: 'medium',
      createdAt: new Date(),
    };
    
    setTasks(prev => [task, ...prev]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-3 h-3" />;
      case 'medium': return <Clock className="w-3 h-3" />;
      case 'low': return <CheckCircle2 className="w-3 h-3" />;
      default: return null;
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <Card className="card-glass">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">Smart Task Manager</h3>
            <p className="text-sm text-muted-foreground">
              {completedTasks} of {totalTasks} tasks completed ({completionRate}%)
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              {completionRate}%
            </div>
            <p className="text-xs text-muted-foreground">Productivity</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            className="transition-smooth"
          />
          <Button 
            onClick={addTask}
            className="gradient-primary hover:opacity-90 transition-smooth"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-smooth hover:bg-card-elevated ${
                task.completed ? 'opacity-60' : ''
              }`}
            >
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="transition-smooth"
              />
              
              <div className="flex-1">
                <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                    {getPriorityIcon(task.priority)}
                    <span className="ml-1 capitalize">{task.priority}</span>
                  </Badge>
                  {task.aiSuggested && (
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                      <Star className="w-3 h-3 mr-1" />
                      AI Suggested
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI Productivity Insight</span>
          </div>
          <p className="text-xs text-muted-foreground">
            You're most productive in the morning. Consider scheduling high-priority tasks between 9-11 AM.
          </p>
        </div>
      </div>
    </Card>
  );
};