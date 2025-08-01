import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/data/doctors";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const navigate = useNavigate();

  const getAvailabilityVariant = (availability: Doctor["availability"]) => {
    switch (availability) {
      case "Available Today":
        return "available";
      case "Fully Booked":
        return "booked";
      case "On Leave":
        return "unavailable";
      default:
        return "default";
    }
  };

  const handleViewProfile = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  const handleQuickBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (doctor.availability !== "On Leave") {
      navigate(`/book/${doctor.id}`);
    }
  };

  return (
    <Card className="group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 bg-healthcare-card border-border/20 hover:border-healthcare-primary/30 cursor-pointer" 
          onClick={handleViewProfile}>
      <CardHeader className="text-center space-y-4">
        <div className="relative mx-auto">
          <img
            src={doctor.profileImage}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-healthcare-primary/20 group-hover:border-healthcare-primary/40 transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute -bottom-2 -right-2">
            <Badge variant={getAvailabilityVariant(doctor.availability)}>
              {doctor.availability}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <CardTitle className="text-xl text-healthcare-text group-hover:text-healthcare-primary transition-colors">
            {doctor.name}
          </CardTitle>
          <p className="text-healthcare-secondary font-medium">{doctor.specialization}</p>
          
          {doctor.rating && (
            <div className="flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-healthcare-muted">
            Available: {doctor.schedule.length > 0 ? doctor.schedule.join(", ") : "Not available"}
          </p>
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleViewProfile}
            variant="outline" 
            className="flex-1"
            disabled={doctor.availability === "On Leave"}
          >
            View Profile
          </Button>
          <Button 
            onClick={handleQuickBook}
            variant="healthcare" 
            className="flex-1"
            disabled={doctor.availability === "On Leave" || doctor.availability === "Fully Booked"}
          >
            Quick Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};