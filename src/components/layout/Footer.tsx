"use client";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p>Precision Plumbing Co is your trusted local service provider.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li><a href="/services" rel="noopener noreferrer">Services</a></li>
              <li><a href="/about" rel="noopener noreferrer">About Us</a></li>
              <li><a href="/contact" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <p>Email: info@precisionplumbingco.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul>
              <li><a href="/privacy" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="/terms" rel="noopener noreferrer">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>© {new Date().getFullYear()} Precision Plumbing Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;