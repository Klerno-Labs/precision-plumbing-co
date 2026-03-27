"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-xl font-bold">Precision Plumbing Co</div>
        <button
          aria-label="Toggle Navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          Menu
        </button>
        <ul className={`flex space-x-4 ${isOpen ? "block" : "hidden"} lg:flex`}>
          <li><a href="/" rel="noopener noreferrer">Home</a></li>
          <li><a href="/services" rel="noopener noreferrer">Services</a></li>
          <li><a href="/about" rel="noopener noreferrer">About</a></li>
          <li><a href="/contact" rel="noopener noreferrer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;