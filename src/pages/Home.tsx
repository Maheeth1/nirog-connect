import { useState, useMemo } from "react";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    return doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-healthcare-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-healthcare-text">
              Find Your Perfect Doctor
            </h2>
            <p className="text-healthcare-muted max-w-2xl mx-auto">
              Book appointments with experienced healthcare professionals. 
              Search by name or specialization to find the right doctor for you.
            </p>
          </div>

          {/* Search Section */}
          <div className="space-y-4">
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search doctors by name or specialization..."
            />
            
            {searchTerm && (
              <p className="text-center text-healthcare-muted">
                Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} 
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            )}
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* No Results */}
          {filteredDoctors.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="text-healthcare-muted">
                <p className="text-lg mb-2">No doctors found</p>
                <p>Try searching with a different term or check the spelling.</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};