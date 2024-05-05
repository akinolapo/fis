'use clinet'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 text-white large-header">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
      </div>

      {/* Menu Icon */}
      <div className="lg:hidden">
        {isMenuOpen ? (
          <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
        ) : (
          <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
        )}
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 p-4">
            <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer text-white" />
          </div>
          <nav className="flex flex-col justify-center items-center h-full">
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer hover:text-gray-400 p-4">Home</li>
              <li className="cursor-pointer hover:text-gray-400 p-4">About Us</li>
              <li className="cursor-pointer hover:text-gray-400 p-4">Gallery</li>
              <li className="cursor-pointer hover:text-gray-400 p-4">Executive</li>
              <li className="cursor-pointer hover:text-gray-400 p-4">Contact Us</li>
            </ul>
            <button className="rounded-full py-4 px-10 bg-zinc-950 hover:bg-black text-white mt-8">
              Join Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
