import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {!isHomePage && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8" />
              <h1 className="text-2xl font-bold">NirogGyan</h1>
            </div>
          </div>
          
          <p className="text-white/90 text-sm">
            Your trusted healthcare companion
          </p>
        </div>
      </div>
    </header>
  );
};