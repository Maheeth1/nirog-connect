import { useParams, useNavigate } from "react-router-dom";
import { findDoctorById } from "@/data/doctors";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Star, GraduationCap, Clock } from "lucide-react";

export const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const doctor = findDoctorById(id!);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-healthcare-bg">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-healthcare-text mb-4">Doctor Not Found</h2>
          <p className="text-healthcare-muted mb-6">The doctor you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="healthcare">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getAvailabilityVariant = (availability: typeof doctor.availability) => {
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

  const handleBookAppointment = () => {
    navigate(`/book/${doctor.id}`);
  };

  return (
    <div className="min-h-screen bg-healthcare-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Profile Card */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={doctor.profileImage}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                />
                
                <div className="text-center md:text-left flex-1 space-y-3">
                  <div>
                    <CardTitle className="text-3xl">{doctor.name}</CardTitle>
                    <p className="text-xl text-white/90">{doctor.specialization}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Badge variant={getAvailabilityVariant(doctor.availability)}>
                      {doctor.availability}
                    </Badge>
                    
                    {doctor.rating && (
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-medium">{doctor.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              {/* Description */}
              {doctor.description && (
                <div>
                  <h3 className="text-lg font-semibold text-healthcare-text mb-2">About</h3>
                  <p className="text-healthcare-muted">{doctor.description}</p>
                </div>
              )}

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience */}
                {doctor.experience && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-healthcare-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-healthcare-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-text">Experience</p>
                      <p className="text-healthcare-muted">{doctor.experience}</p>
                    </div>
                  </div>
                )}

                {/* Education */}
                {doctor.education && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-healthcare-secondary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-healthcare-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-text">Education</p>
                      <p className="text-healthcare-muted">{doctor.education}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Schedule */}
              <div>
                <h3 className="text-lg font-semibold text-healthcare-text mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Weekly Schedule
                </h3>
                
                {doctor.schedule.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {doctor.schedule.map((day) => (
                      <Badge key={day} variant="secondary" className="px-3 py-1">
                        {day}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-healthcare-muted">Currently not available</p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t">
                <Button
                  onClick={handleBookAppointment}
                  variant="healthcare"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={doctor.availability === "On Leave"}
                >
                  {doctor.availability === "On Leave" 
                    ? "Doctor on Leave" 
                    : "Book Appointment"
                  }
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};