// Footer.tsx

import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section with logo, site title, and contact info */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-20 mr-2" />
          <div className="text-lg font-bold">Federation of Igbo Student OAU</div>
        </div>
        <div>
          {/* <h3>Contact Us</h3> */}
          <div className="flex flex-col">
            <div className="flex items-center mt-1">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-white bg-primary p-2 rounded-full"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-white myLightColor p-2 rounded-full"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-primary p-2 rounded-full"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right section with site menu items */}
        <div className="md:hidden mt-4">
          <ul className="flex flex-wrap justify-center">
            <li className="mr-4 mb-2">
              <a href="/">Home</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="/about">About</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="/executive">Excecutive</a>
            </li>
            <li className="mb-2">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Right section with site menu items */}
        <div className="hidden md:block">
          <ul className="flex">
            <li className="mr-4">
              <a href="/">Home</a>
            </li>
            <li className="mr-4">
              <a href="/about">About</a>
            </li>
            <li className="mr-4">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="mr-4">
              <a href="/executive">Executive</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <Copyright developer="Akinolapo" />
    </footer>
  );
};

export default Footer;
