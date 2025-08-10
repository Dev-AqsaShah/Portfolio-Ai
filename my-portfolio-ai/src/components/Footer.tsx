"use client";

import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Side Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Whispers of Life. All rights reserved.
        </p>

        {/* Right Side Icons */}
        <div className="flex space-x-4 text-lg">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
