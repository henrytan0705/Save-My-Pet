import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import PetGallery from "./components/PetGallery";
import PetProfile from "./components/PetProfile";
import PetProfilePage from "./pages/PetProfilePage"; // Updated import path
function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow mt-20">
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

                        {/* Pet-related routes */}
                        <Route path="/pets" element={<PetGallery />} />
                        <Route path="/pet/:id" element={<PetProfilePage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;