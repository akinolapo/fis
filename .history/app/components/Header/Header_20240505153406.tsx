import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="lg:flex lg:justify-between lg:items-center py-4 text-white">
      {/* Logo and Site Title */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-lg font-bold">Federation of <br />Igbo Student<br /> OAU</h1>
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="block lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 7h18v-2H3v2zm0 7h18v-2H3v2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu for LG screens */}
      <nav className={`lg:flex lg:justify-center lg:flex-grow ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="lg:flex gap-8">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About Us</li>
          <li className="cursor-pointer hover:text-gray-400">Gallery</li>
          <li className="cursor-pointer hover:text-gray-400">Executive</li>
          <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
        </ul>
      </nav>

      {/* Join Us Button */}
      <button className="lg:ml-0 mt-4 lg:mt-0 rounded-full py-4 px-10 bg-zinc-950 hover:bg-black text-white">
        Join Us
      </button>
    </header>
  );
};

export default Header;
