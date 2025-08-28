// Mock data for the application

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  analysis?: {
    summary: string;
    keywords: string[];
    sentiment: 'positive' | 'neutral' | 'negative';
    confidence: number;
  };
}

export interface AnalyticsData {
  productivity: {
    daily: number[];
    weekly: number[];
    monthly: number[];
  };
  tasks: {
    completed: number;
    pending: number;
    inProgress: number;
  };
  timeTracking: {
    focusTime: number;
    breakTime: number;
    meetings: number;
  };
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create a modern, responsive landing page for the new product launch',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-01-15',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-12',
    tags: ['design', 'frontend', 'urgent']
  },
  {
    id: '2',
    title: 'Review project proposal',
    description: 'Analyze and provide feedback on the Q1 project proposal',
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-01-18',
    createdAt: '2024-01-11',
    updatedAt: '2024-01-11',
    tags: ['review', 'planning']
  },
  {
    id: '3',
    title: 'Update documentation',
    description: 'Refresh API documentation with latest endpoints',
    status: 'completed',
    priority: 'low',
    dueDate: '2024-01-12',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-12',
    tags: ['documentation', 'api']
  },
  {
    id: '4',
    title: 'Team standup meeting',
    description: 'Daily standup with development team',
    status: 'completed',
    priority: 'medium',
    dueDate: '2024-01-13',
    createdAt: '2024-01-13',
    updatedAt: '2024-01-13',
    tags: ['meeting', 'team']
  },
  {
    id: '5',
    title: 'Optimize database queries',
    description: 'Improve performance of slow-running queries in the analytics module',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-01-20',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12',
    tags: ['backend', 'performance', 'database']
  },
  {
    id: '6',
    title: 'Client presentation prep',
    description: 'Prepare slides and demo for client meeting next week',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-01-17',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-13',
    tags: ['presentation', 'client', 'demo']
  }
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Project Requirements.pdf',
    type: 'PDF',
    size: '2.4 MB',
    uploadedAt: '2024-01-10',
    analysis: {
      summary: 'Comprehensive project requirements document outlining scope, timeline, and deliverables for Q1 2024 initiative.',
      keywords: ['requirements', 'scope', 'timeline', 'deliverables', 'project'],
      sentiment: 'neutral',
      confidence: 0.92
    }
  },
  {
    id: '2',
    name: 'Market Research Report.docx',
    type: 'Word Document',
    size: '1.8 MB',
    uploadedAt: '2024-01-11',
    analysis: {
      summary: 'Market analysis showing positive trends in the target demographic with growth opportunities identified.',
      keywords: ['market', 'research', 'growth', 'opportunities', 'demographic'],
      sentiment: 'positive',
      confidence: 0.87
    }
  },
  {
    id: '3',
    name: 'Technical Specifications.txt',
    type: 'Text File',
    size: '156 KB',
    uploadedAt: '2024-01-12',
    analysis: {
      summary: 'Technical specifications for the new system architecture including performance requirements and constraints.',
      keywords: ['technical', 'specifications', 'architecture', 'performance', 'requirements'],
      sentiment: 'neutral',
      confidence: 0.94
    }
  },
  {
    id: '4',
    name: 'Budget Analysis.xlsx',
    type: 'Excel Spreadsheet',
    size: '890 KB',
    uploadedAt: '2024-01-09',
    analysis: {
      summary: 'Financial analysis revealing budget concerns and recommendations for cost optimization.',
      keywords: ['budget', 'financial', 'analysis', 'cost', 'optimization'],
      sentiment: 'negative',
      confidence: 0.78
    }
  }
];

export const mockAnalytics: AnalyticsData = {
  productivity: {
    daily: [85, 92, 78, 95, 88, 91, 87],
    weekly: [88, 91, 85, 93, 89],
    monthly: [87, 89, 92, 85, 90, 88, 91, 89, 93, 87, 90, 92]
  },
  tasks: {
    completed: 24,
    pending: 8,
    inProgress: 5
  },
  timeTracking: {
    focusTime: 6.2,
    breakTime: 1.8,
    meetings: 2.5
  }
};

export const mockChatMessages = [
  {
    id: '1',
    type: 'user' as const,
    content: 'What are my highest priority tasks for today?',
    timestamp: '2024-01-13T09:00:00Z'
  },
  {
    id: '2',
    type: 'ai' as const,
    content: 'Based on your task list, you have 2 high-priority items: "Design new landing page" (due Jan 15) and "Client presentation prep" (due Jan 17). I recommend focusing on the presentation prep first since it has an earlier deadline.',
    timestamp: '2024-01-13T09:00:30Z'
  },
  {
    id: '3',
    type: 'user' as const,
    content: 'Can you analyze my productivity trends?',
    timestamp: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    type: 'ai' as const,
    content: 'Your productivity has been consistently strong this week, averaging 88%. You performed best on Thursday (95%) and had a slight dip on Wednesday (78%). Your focus time of 6.2 hours daily is excellent and above the recommended 6 hours for optimal productivity.',
    timestamp: '2024-01-13T09:15:45Z'
  }
];

// Helper functions
export const getTasksByStatus = (status: Task['status']) => 
  mockTasks.filter(task => task.status === status);

export const getTasksByPriority = (priority: Task['priority']) => 
  mockTasks.filter(task => task.priority === priority);

export const getRecentDocuments = (limit: number = 5) => 
  mockDocuments
    .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
    .slice(0, limit);

export const getTaskStats = () => ({
  total: mockTasks.length,
  completed: getTasksByStatus('completed').length,
  inProgress: getTasksByStatus('in-progress').length,
  pending: getTasksByStatus('pending').length,
  highPriority: getTasksByPriority('high').length
});