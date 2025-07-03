import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-8 w-screen">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold tracking-wide">Save My Pet</h2>
          <p className="text-sm mt-2">
            &copy; 2025 Save My Pet. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 justify-center items-center self-center md:items-start md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-xl hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-pink-400 transition-colors" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-2xl">Save My Pet</h2>
          <Link to="/aboutUs" className="hover:text-red-400">
            About Us
          </Link>
          <Link to="AboutUs.html" className="hover:text-red-400">
            Our Team
           </Link>
           <Link to="contact.html" className="hover:text-red-400">
              Contact Us
           </Link>
        </div>

        <div className="flex flex-col items-center space-y-3">
                  <h2 className="text-2xl">Resources</h2>
          <Link to="/" className="hover:text-red-400">
            FAQ
          </Link>
          <Link to="/" className="hover:text-red-400">
            Pet Safety Tips
          </Link>
          <Link to="/" className="hover:text-red-400">
            Disaster Preparedness
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-3">
                  <h2 className="text-2xl">Get Involved</h2>
           <Link to="/contact" className="hover:text-red-400">
           Donate
           </Link>
          <Link to="/" className="hover:text-red-400">
            Volunteer
          </Link>
          <Link to="/" className="hover:text-red-400">
           Coverage Areas
          </Link>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
