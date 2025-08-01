# 🏥 NirogGyan – Healthcare Appointment Booking App

NirogGyan is a sleek and responsive web application built with **React + TypeScript + Tailwind CSS**. It allows users to browse doctors, view their availability, and book appointments through a clean and intuitive interface.

---

## 🔍 Project Overview

This application simulates a real-world healthcare booking system with the following features:

- 🧑‍⚕️ Browse a list of doctors with specialization, profile image, and availability
- 🔍 Search doctors by name or specialization
- 📄 View detailed doctor profiles
- 📅 Book appointments with date, time, and patient details
- ✅ Form validation and confirmation flow
- 📱 Fully responsive design for mobile, tablet, and desktop

---

## 🚀 Live Demo

> _Coming soon..._  
(You can deploy it on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) easily.)

---

## 🛠️ Tech Stack

| Technology      | Description                             |
|-----------------|-----------------------------------------|
| **React**       | UI Library for building user interfaces |
| **TypeScript**  | Type safety and better developer experience |
| **Tailwind CSS**| Utility-first CSS framework             |
| **React Router**| Client-side routing for navigation      |

---

## 📁 Folder Structure

niroggyan-app/
├── public/ # Static files
├── src/
│ ├── assets/ # Images & static media
│ ├── components/ # Reusable UI components
│ ├── pages/ # LandingPage, DoctorProfile, BookingPage
│ ├── data/ # Mock JSON data for doctors
│ ├── App.tsx # Main app routes
│ └── main.tsx # Entry point


---

## 🧪 Features

### 🏠 Landing Page
- Displays a responsive grid of doctors
- Real-time search by name or specialization
- Availability labels (Available Today, Fully Booked, On Leave)

### 👤 Doctor Profile Page
- Full details of selected doctor
- Availability schedule
- "Book Appointment" button

### 📅 Booking Page
- Form inputs: Patient Name, Email, Date & Time
- Client-side validation
- Confirmation message on submit

---

## 🔢 Sample Mock Data

```json
{
  "id": 1,
  "name": "Dr. Riya Sharma",
  "specialization": "Cardiologist",
  "profileImage": "/images/riya.jpg",
  "availability": "Available Today",
  "schedule": ["Monday", "Wednesday", "Friday"]
}
```

### ✅ How to Run Locally
- Clone the repository
  ```
  git clone https://github.com/your-username/niroggyan-app.git
  cd niroggyan-app
  ```
- Install dependencies
  ```
  npm install
  ```
- Start the development server
  ```
  npm run dev
  ```

### 🎯 Future Improvements (Given More Time)
- ✅ Add calendar-based time slot picker
- 🧑‍⚕️ Doctor dashboard to manage schedules
- 📩 Email confirmation for appointments
- 📦 Integrate a real backend (Express + MongoDB)
- 🌍 Localization for multiple languages

### 🧠 Challenges Faced & Solutions
| Challenge                             | Solution                                               |
| ------------------------------------- | ------------------------------------------------------ |
| Structuring routing with React Router | Used `react-router-dom@6` with dynamic paths           |
| Form validation                       | Built custom validation with HTML5 + Tailwind feedback |
| Mocking realistic doctor data         | Used JSON + realistic avatars from `randomuser.me`     |
| Responsive design                     | Tailwind breakpoints + Flex/Grid layouts               |

### 🙌 Acknowledgements
- Thanks to the NirogGyan team for this assignment and the opportunity to demonstrate frontend skills.

📄 License
- This project is open-source and free to use for educational purposes.