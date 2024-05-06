'use client'

import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary py-4 px-6 flex justify-between items-center md:hidden">
      <div className="flex items-center">
        {/* Logo and site title */}
        <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        <h2 className="text-white text-lg font-bold">
          Federation of Igbo Student OAU
        </h2>
      </div>
      {/* Menu icon */}
      <div>
        <button onClick={handleMenuClick}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>
      {/* Mobile menu modal */}
      <Menu right isOpen={isOpen} customBurgerIcon={false} width={280} styles={styles}>
        <div className="flex justify-end">
          <button onClick={handleMenuClick}>
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-white text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-primary text-white px-4 py-2 rounded mt-4 block w-full">
          Join Now
        </button>
      </Menu>
    </nav>
  );
};

export default MobileNav;
