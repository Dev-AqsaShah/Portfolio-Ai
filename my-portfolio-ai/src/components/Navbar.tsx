"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle"; // ✅ tumhara theme button

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black dark:bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LEFT: Theme Toggle */}
        <ThemeToggle />

        {/* RIGHT: Navigation Links */}
        <div className="hidden sm:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group font-bold text-purple-700  "
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-300 group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
