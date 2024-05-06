'use client'

import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaBars } from 'react-icons/fa'; // Assuming you're using Font Awesome icons for the menu icon

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      {/* Logo and site title */}
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>Site Title</h1>
      </div>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <Menu right isOpen={isOpen} onClose={handleMenuToggle}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
};

export default ;
