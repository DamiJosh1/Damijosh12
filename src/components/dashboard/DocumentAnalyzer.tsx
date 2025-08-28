import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { Upload, FileText, Brain, Download, Eye } from 'lucide-react';

interface AnalyzedDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  summary: string;
  keywords: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  uploadedAt: Date;
}

export const DocumentAnalyzer = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [documents, setDocuments] = useState<AnalyzedDocument[]>([
    {
      id: '1',
      name: 'Q4_Report.pdf',
      size: '2.4 MB',
      type: 'PDF',
      summary: 'Quarterly performance analysis showing 15% growth in key metrics with recommendations for strategic improvements.',
      keywords: ['growth', 'performance', 'strategy', 'recommendations'],
      sentiment: 'positive',
      uploadedAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      name: 'Meeting_Notes.docx',
      size: '1.1 MB',
      type: 'DOCX',
      summary: 'Client meeting notes discussing project requirements, timeline constraints, and budget considerations.',
      keywords: ['meeting', 'client', 'timeline', 'budget'],
      sentiment: 'neutral',
      uploadedAt: new Date('2024-01-14'),
    },
  ]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate document analysis
    setTimeout(() => {
      setAnalysisProgress(100);
      
      const mockAnalysis: AnalyzedDocument = {
        id: Date.now().toString(),
        name: files[0].name,
        size: `${(files[0].size / 1024 / 1024).toFixed(1)} MB`,
        type: files[0].name.split('.').pop()?.toUpperCase() || 'FILE',
        summary: 'AI analysis would appear here. Connect to Supabase and add your OpenAI API key to enable real document analysis with insights, summaries, and actionable recommendations.',
        keywords: ['analysis', 'pending', 'integration', 'required'],
        sentiment: 'neutral',
        uploadedAt: new Date(),
      };

      setDocuments(prev => [mockAnalysis, ...prev]);
      setIsAnalyzing(false);
      
      toast({
        title: "Document Analyzed",
        description: "Your document has been processed. Connect Supabase for AI-powered analysis!",
      });
    }, 2000);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-success';
      case 'negative': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="card-glass">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI Document Analyzer
            </h3>
            <p className="text-sm text-muted-foreground">
              Upload documents for intelligent analysis and insights
            </p>
          </div>
        </div>

        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6 transition-smooth hover:border-primary/50">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx,.txt,.md"
            disabled={isAnalyzing}
          />
          <label 
            htmlFor="file-upload" 
            className="cursor-pointer block"
          >
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-sm font-medium mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              PDF, DOC, DOCX, TXT, MD files up to 10MB
            </p>
          </label>
        </div>

        {isAnalyzing && (
          <div className="mb-6 p-4 rounded-lg bg-card-elevated border">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">Analyzing document...</span>
            </div>
            <Progress value={analysisProgress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Processing content, extracting insights, and generating summary
            </p>
          </div>
        )}

        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="border rounded-lg p-4 hover:bg-card-elevated transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{doc.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {doc.type} • {doc.size} • {doc.uploadedAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-1">AI Summary</h5>
                  <p className="text-sm">{doc.summary}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-medium text-muted-foreground mb-1">Key Topics</h5>
                    <div className="flex gap-1 flex-wrap">
                      {doc.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <h5 className="text-xs font-medium text-muted-foreground">Sentiment</h5>
                    <span className={`text-sm font-medium capitalize ${getSentimentColor(doc.sentiment)}`}>
                      {doc.sentiment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Ready for AI Integration</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Connect to Supabase and add your OpenAI API key to unlock advanced document analysis, 
            automated summaries, and intelligent insights.
          </p>
        </div>
      </div>
    </Card>
  );
};