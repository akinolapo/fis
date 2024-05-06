// Footer.tsx

import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section with logo, site title, and contact info */}
        <div className="">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <h2 className="text-lg font-bold">Federation of Igbo Student OAU</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mt-1">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right section with site menu items */}
        <div className="hidden md:block">
          <ul className="flex">
            <li className="mr-4">
              <a href="#">Home</a>
            </li>
            <li className="mr-4">
              <a href="#">About</a>
            </li>
            <li className="mr-4">
              <a href="#">Services</a>
            </li>
            <li className="mr-4">
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
