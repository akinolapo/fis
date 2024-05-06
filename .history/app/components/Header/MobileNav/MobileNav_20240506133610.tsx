
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary py-4 px-6 flex justify-between items-center lg:hidden">
      <div className="flex items-center">
        {/* Logo and site title */}
        <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        <h2 className="text-white text-lg font-bold">Federation of Igbo Student OAU</h2>
      </div>
      {/* Menu icon */}
      <div>
        <button onClick={handleMenuClick}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>
      {/* Mobile menu modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-black text-lg">Home</a>
              </li>
              <li>
                <a href="#" className="text-black text-lg">About</a>
              </li>
              <li>
                <a href="#" className="text-black text-lg">Services</a>
              </li>
              <li>
                <a href="#" className="text-black text-lg">Gallery</a>
              </li>
              <li>
                <a href="#" className="text-black text-lg">Contact</a>
              </li>
            </ul>
            <button className="bg-primary text-white px-4 py-2 rounded mt-4 block w-full">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
