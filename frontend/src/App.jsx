import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import LostPetsPage from "./pages/LostPets";
import FoundPetsPage from "./pages/FoundPets";
import ContactPage from "./pages/Contact";
import ReportPage from "./pages/Report";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import MapPage from "./pages/Map";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetGallery from "./components/PetGallery";
import PetProfilePage from "./pages/PetProfilePage";
import ResourcesPage from "./pages/Resources";
import ForgotPage from "./pages/Forgot";

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
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/map" element={<MapPage />} />

          {/* Routes for user login/sign up*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPage />} />

          {/* Routes for Pet Related Posts*/}
          <Route path="/pets" element={<PetGallery />} />
          <Route path="/pets/:id" element={<PetProfilePage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
