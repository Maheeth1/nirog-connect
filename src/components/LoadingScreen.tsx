import { Heart } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-primary/10 to-healthcare-secondary/10 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative">
          <Heart className="w-16 h-16 text-healthcare-primary animate-pulse mx-auto" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-healthcare-primary/30 rounded-full animate-spin mx-auto"></div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-healthcare-text">NirogGyan</h2>
          <p className="text-healthcare-muted">Loading your healthcare companion...</p>
        </div>
        
        <div className="flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-healthcare-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};