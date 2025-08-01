import riyaImage from "@/assets/riya.jpg";
import arjunImage from "@/assets/arjun.jpg";
import snehaImage from "@/assets/sneha.jpg";
import rakeshImage from "@/assets/rakesh.jpg";
import aishaImage from "@/assets/aisha.jpg";
import karanImage from "@/assets/karan.jpg";

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  availability: "Available Today" | "Fully Booked" | "On Leave";
  schedule: string[];
  description?: string;
  experience?: string;
  education?: string;
  rating?: number;
}

export const doctors: Doctor[] = [
  {
    id: "riya-sharma",
    name: "Dr. Riya Sharma",
    specialization: "Cardiologist",
    profileImage: riyaImage,
    availability: "Available Today",
    schedule: ["Monday", "Wednesday", "Friday"],
    description: "Experienced cardiologist specializing in heart disease prevention and treatment.",
    experience: "8 years",
    education: "MBBS, MD - Cardiology",
    rating: 4.8
  },
  {
    id: "arjun-mehta",
    name: "Dr. Arjun Mehta",
    specialization: "Dermatologist",
    profileImage: arjunImage,
    availability: "Fully Booked",
    schedule: ["Tuesday", "Thursday"],
    description: "Expert in skin care, cosmetic dermatology, and skin cancer treatment.",
    experience: "12 years",
    education: "MBBS, MD - Dermatology",
    rating: 4.9
  },
  {
    id: "sneha-kapoor",
    name: "Dr. Sneha Kapoor",
    specialization: "Pediatrician",
    profileImage: snehaImage,
    availability: "On Leave",
    schedule: [],
    description: "Dedicated pediatrician focused on child health and development.",
    experience: "10 years",
    education: "MBBS, MD - Pediatrics",
    rating: 4.7
  },
  {
    id: "rakesh-verma",
    name: "Dr. Rakesh Verma",
    specialization: "Orthopedic",
    profileImage: rakeshImage,
    availability: "Available Today",
    schedule: ["Monday", "Tuesday", "Friday"],
    description: "Orthopedic surgeon specializing in joint replacement and sports injuries.",
    experience: "15 years",
    education: "MBBS, MS - Orthopedics",
    rating: 4.6
  },
  {
    id: "aisha-khan",
    name: "Dr. Aisha Khan",
    specialization: "Neurologist",
    profileImage: aishaImage,
    availability: "Available Today",
    schedule: ["Wednesday", "Saturday"],
    description: "Neurologist with expertise in brain and nervous system disorders.",
    experience: "9 years",
    education: "MBBS, DM - Neurology",
    rating: 4.8
  },
  {
    id: "karan-patel",
    name: "Dr. Karan Patel",
    specialization: "ENT Specialist",
    profileImage: karanImage,
    availability: "Fully Booked",
    schedule: ["Monday", "Thursday"],
    description: "ENT specialist treating ear, nose, and throat conditions.",
    experience: "11 years",
    education: "MBBS, MS - ENT",
    rating: 4.5
  }
];

export const findDoctorById = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id);
};