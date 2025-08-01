import { Heart, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-healthcare-text text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-healthcare-primary" />
              <h3 className="text-xl font-bold">NirogGyan</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted healthcare companion for quality medical care and easy appointment booking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-healthcare-primary transition-colors">Find Doctors</a></li>
              <li><a href="#" className="hover:text-healthcare-primary transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-healthcare-primary transition-colors">Health Records</a></li>
              <li><a href="#" className="hover:text-healthcare-primary transition-colors">Prescriptions</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h4 className="font-semibold">Specialties</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="hover:text-healthcare-primary transition-colors">Cardiology</span></li>
              <li><span className="hover:text-healthcare-primary transition-colors">Dermatology</span></li>
              <li><span className="hover:text-healthcare-primary transition-colors">Pediatrics</span></li>
              <li><span className="hover:text-healthcare-primary transition-colors">Orthopedics</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@niroggyan.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 NirogGyan. All rights reserved. Built with ❤️ for better healthcare.</p>
        </div>
      </div>
    </footer>
  );
};