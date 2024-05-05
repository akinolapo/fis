import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 text-white">
      {/* Logo and Site Title */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} className="mr-2"  />
        <h1 className="text-lg font-bold">Federation of <br></br>Igbo Student<br></br> OAU</h1>
      </div>

      {/* Menu */}
      <nav className="flex justify-center flex-grow">
        <ul className="flex gap-1">
          <li className="cursor-pointer hover:text-gray-400 p-8">Home</li>
          <li className="cursor-pointer hover:text-gray-400 p-8">About Us</li>
          <li className="cursor-pointer hover:text-gray-400 p-8">Gallery</li>
          <li className="cursor-pointer hover:text-gray-400 p-8">Executive</li>
          <li className="cursor-pointer hover:text-gray-400 p-8">Contact Us</li>
        </ul>
      </nav>

      {/* Join Us Button */}
      <button className="rounded-full py-4 px-10 bg-zinc-950 hover:bg-black text-white">
        Join Us
      </button>
    </header>
  );
};

export default Header;
