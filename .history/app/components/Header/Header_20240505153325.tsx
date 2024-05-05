
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 text-white">
      {/* Logo and Site Title */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-lg font-bold">Federation of <br></br>Igbo Student<br></br> OAU</h1>
      </div>

      {/* Menu */}
      <nav className="flex justify-center flex-grow">
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About Us</li>
          <li className="cursor-pointer hover:text-gray-400">Gallery</li>
          <li className="cursor-pointer hover:text-gray-400">Executive</li>
          <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
        </ul>
      </nav>

      {/* Join Us Button */}
      <button className="rounded-full px-10 py-3 bg-zinc-950 hover:bg-black text-white">
        Join Us
      </button>
    </header>
  );
};

export default Header;
