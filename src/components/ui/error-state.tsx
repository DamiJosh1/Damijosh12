import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState = ({ 
  title = "Something went wrong",
  message = "We encountered an error while loading this content.",
  onRetry,
  className 
}: ErrorStateProps) => {
  return (
    <Card className={`p-8 text-center space-y-4 ${className}`}>
      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto animate-bounce-in">
        <AlertTriangle className="w-6 h-6 text-destructive" />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          {message}
        </p>
      </div>
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="outline" 
          className="mt-4 transition-smooth hover:scale-105"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </Card>
  );
};