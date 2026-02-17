import React from "react";

import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div >
            <Link to="/" className="flex bg-white w-fit rounded-full items-center">
              <img src="/logo.png" width={54} height={54} alt="Logo" />
            </Link>
            <p className="text-sm leading-6">
              Trusted real estate experts in property sales, rentals, and office leasing. Helping you find the right home, workspace, or investment with confidence.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Property Sale</li>
              <li className="hover:text-white transition cursor-pointer">
                Office leasing
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Property for Rent
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Find Property
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} trianglesconsolidated. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
