
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-10 bg-gray-800 text-white">
      {/* Logo and Site Title */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-lg font-bold">Federation of <br></br>Igbo Student<br></br> OAU</h1>
      </div>

      {/* Menu */}
      <nav className="flex justify-center flex-grow">
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-gray-400 p-8">Home</li>
          <li className="cursor-pointer hover:text-gray-400 p-8">About Us</li>
          <li className="cursor-pointer hover:text-gray-400 p-8">Gallery</li>
          <li className="cursor-pointer hover:text-gray-400">Executive</li>
          <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
        </ul>
      </nav>

      {/* Join Us Button */}
      <button className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
        Join Us
      </button>
    </header>
  );
};

export default Header;
