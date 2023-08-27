import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4 fixed top-0 left-0 w-full font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="majaja.png" alt="Logo" className="h-8 w-8 mr-2" />
            <div className="text-white font-semibold text-lg">MaJaJa</div>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
