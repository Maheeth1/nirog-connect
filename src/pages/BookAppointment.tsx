import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findDoctorById } from "@/data/doctors";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModernDateTimePicker } from "@/components/ModernDateTimePicker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Mail } from "lucide-react";

interface FormData {
  patientName: string;
  email: string;
  datetime: string;
}

interface FormErrors {
  patientName?: string;
  email?: string;
  datetime?: string;
}

export const BookAppointment = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const doctor = findDoctorById(id!);
  
  const [formData, setFormData] = useState<FormData>({
    patientName: "",
    email: "",
    datetime: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-healthcare-bg">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-healthcare-text mb-4">Doctor Not Found</h2>
          <p className="text-healthcare-muted mb-6">The doctor you're trying to book with doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="healthcare">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = "Patient name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.datetime) {
      newErrors.datetime = "Date and time is required";
    } else {
      const selectedDate = new Date(formData.datetime);
      const now = new Date();
      if (selectedDate <= now) {
        newErrors.datetime = "Please select a future date and time";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const appointmentDate = new Date(formData.datetime);
    const formatDate = appointmentDate.toLocaleDateString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formatTime = appointmentDate.toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute: '2-digit'
    });

    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${doctor.name} is confirmed for ${formatDate} at ${formatTime}.`,
      variant: "default",
    });

    setIsSubmitting(false);
    
    // Navigate back to doctor profile after short delay
    setTimeout(() => {
      navigate(`/doctor/${doctor.id}`);
    }, 2000);
  };

  // Get minimum datetime (current time + 1 hour)
  const getMinDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    return now.toISOString().slice(0, 16);
  };

  return (
    <div className="min-h-screen bg-healthcare-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Doctor Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Book Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-healthcare-bg rounded-lg">
                <img
                  src={doctor.profileImage}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-healthcare-text">{doctor.name}</h3>
                  <p className="text-healthcare-secondary">{doctor.specialization}</p>
                  <Badge variant="available" className="mt-1">
                    {doctor.availability}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-healthcare-text flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Patient Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange("patientName", e.target.value)}
                    className={errors.patientName ? "border-destructive" : ""}
                  />
                  {errors.patientName && (
                    <p className="text-sm text-destructive">{errors.patientName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-healthcare-text flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-healthcare-text flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date & Time
                  </label>
                  <ModernDateTimePicker
                    value={formData.datetime}
                    onChange={(value) => handleInputChange("datetime", value)}
                    error={errors.datetime}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="healthcare"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Booking Appointment..." : "Book Appointment"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};