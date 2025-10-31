import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-[#ffd854]">Moso</span>{" "}
            <span className="text-[#f25028]">Inter</span>
            <span className="text-[#00a05d]">ior</span>
          </div>

  
          <ul className="hidden lg:flex items-center space-x-1 text-lg text-[#929395]">
            <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">About</li>
            <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">
              <select
                name=""
                id="shop"
                className="focus:outline-none bg-transparent cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Shop
                </option>
                <option value="">Shop List</option>
                <option value="">Shop Details</option>
              </select>
            </li>
            <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">Reviews</li>
            <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">Contact</li>
          </ul>

          <button
            className="lg:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <ul className="flex flex-col space-y-2 text-[#929395]">
              <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">About</li>
              <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">
                <select
                  name=""
                  className="focus:outline-none bg-transparent w-full cursor-pointer"
                >
                  <option value="" disabled selected hidden>
                    Shop
                  </option>
                  <option value="">Shop List</option>
                  <option value="">Shop Details</option>
                </select>
              </li>
              <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">Reviews</li>
              <li className="hover:bg-[#ffd854] px-4 py-2 rounded cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
