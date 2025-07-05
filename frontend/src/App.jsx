// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import LostPetsPage from "./pages/LostPets";
import FoundPetsPage from "./pages/FoundPets";
import ContactPage from "./pages/Contact";
import CommunitiesPage from "./pages/Communities";
import ReportPage from "./pages/Report";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import MapPage from "./pages/Map";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="mt-20">
        <Routes>
          {/* General Page Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/lostPets" element={<LostPetsPage />} />
          <Route path="/foundPets" element={<FoundPetsPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/map" element={<MapPage />} />

          {/* Routes for user login/sign up*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
