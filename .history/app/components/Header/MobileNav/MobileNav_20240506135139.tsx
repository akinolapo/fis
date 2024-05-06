'use client'

import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FaBars, FaTimes } from "react-icons/fa";

const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px"
    },
    bmBurgerBars: {
      background: "#373a47"
    },
    bmBurgerBarsHover: {
      background: "#a90000"
    },
    bmCrossButton: {
      height: "24px",
      width: "24px"
    },
    bmCross: {
      background: "#bdc3c7"
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%"
    },
    bmMenu: {
      background: "#364B94",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em"
    },
    bmMorphShape: {
      fill: "#373a47"
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em"
    },
    bmItem: {
      display: "inline-block"
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)"
    }
  };
  

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 flex justify-between items-center md:hidden">
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
