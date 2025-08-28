import { Header } from "@/components/layout/Header";
import { DocumentAnalyzer } from "@/components/dashboard/DocumentAnalyzer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Upload, Search, Filter, FolderOpen, Clock, Star } from "lucide-react";

const Documents = () => {
  const recentDocuments = [
    {
      name: "Q4 Business Plan.pdf",
      type: "PDF",
      size: "2.4 MB",
      analyzed: true,
      sentiment: "Positive",
      keywords: ["growth", "strategy", "revenue"],
      uploadedAt: "2 hours ago"
    },
    {
      name: "Meeting Notes.docx",
      type: "DOCX",
      size: "156 KB",
      analyzed: true,
      sentiment: "Neutral",
      keywords: ["team", "objectives", "timeline"],
      uploadedAt: "1 day ago"
    },
    {
      name: "Research Paper.pdf",
      type: "PDF", 
      size: "5.1 MB",
      analyzed: false,
      sentiment: null,
      keywords: [],
      uploadedAt: "3 days ago"
    },
    {
      name: "Project Proposal.txt",
      type: "TXT",
      size: "45 KB",
      analyzed: true,
      sentiment: "Positive",
      keywords: ["innovation", "development", "budget"],
      uploadedAt: "5 days ago"
    }
  ];

  const stats = [
    {
      title: "Total Documents",
      value: "47",
      change: "+12 this week",
      icon: FileText
    },
    {
      title: "Analyzed",
      value: "34",
      change: "72% completion",
      icon: Search
    },
    {
      title: "Storage Used",
      value: "2.8 GB",
      change: "of 10 GB limit",
      icon: FolderOpen
    },
    {
      title: "Processing Time", 
      value: "1.2s",
      change: "avg per document",
      icon: Clock
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
              <h1 className="text-3xl font-bold text-foreground">Document Management</h1>
              <p className="text-muted-foreground mt-2">AI-powered document analysis and insights</p>
            </div>
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Documents
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
                  <stat.icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search documents..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Document Analyzer */}
            <div className="lg:col-span-2">
              <DocumentAnalyzer />
            </div>

            {/* Recent Documents */}
            <div>
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Documents</CardTitle>
                  <CardDescription>Your latest uploaded and analyzed files</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentDocuments.map((doc, index) => (
                    <div key={index} className="p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{doc.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {doc.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{doc.size}</span>
                          </div>
                          {doc.analyzed && (
                            <div className="flex items-center gap-2 mt-2">
                              <Badge 
                                variant={doc.sentiment === "Positive" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {doc.sentiment}
                              </Badge>
                              <div className="flex gap-1">
                                {doc.keywords.slice(0, 2).map((keyword, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {keyword}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <Button variant="ghost" size="sm">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {doc.uploadedAt}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;