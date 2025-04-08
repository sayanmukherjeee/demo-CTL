import React from "react";
import { FiChevronDown } from "react-icons/fi";

function Header() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="top-0 z-50">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex flex-col items-center">

            <nav className="flex items-center space-x-6">
              <div className="text-2xl font-bold text-blue-600 mr-16">
                Co<span className="text-gray-800">r</span>Pas
              </div>

              {/* Home */}
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <a
                    href="#home"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
                  >
                    Home
                  </a>
                  <FiChevronDown className="text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                  <a href="#home1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Home Item 1
                  </a>
                  <a href="#home2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Home Item 2
                  </a>
                  <a href="#home3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Home Item 3
                  </a>
                  <a href="#home4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Home Item 4
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
                  >
                    About
                  </a>
                  <FiChevronDown className="text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                  <a href="#about1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    About Item 1
                  </a>
                  <a href="#about2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    About Item 2
                  </a>
                  <a href="#about3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    About Item 3
                  </a>
                  <a href="#about4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    About Item 4
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <a
                    href="#page"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
                  >
                    Page
                  </a>
                  <FiChevronDown className="text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                  <a href="#page1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Page Item 1
                  </a>
                  <a href="#page2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Page Item 2
                  </a>
                  <a href="#page3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Page Item 3
                  </a>
                  <a href="#page4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Page Item 4
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <a
                    href="#gallery"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
                  >
                    Gallery
                  </a>
                  <FiChevronDown className="text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                  <a href="#gallery1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Gallery Item 1
                  </a>
                  <a href="#gallery2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Gallery Item 2
                  </a>
                  <a href="#gallery3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Gallery Item 3
                  </a>
                  <a href="#gallery4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Gallery Item 4
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <a
                    href="#blog"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
                  >
                    Blog
                  </a>
                  <FiChevronDown className="text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                  <a href="#blog1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Blog Item 1
                  </a>
                  <a href="#blog2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Blog Item 2
                  </a>
                  <a href="#blog3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Blog Item 3
                  </a>
                  <a href="#blog4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Blog Item 4
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
                  >
                    Contact
                  </a>
                  <FiChevronDown className="text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                  <a href="#contact1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Contact Item 1
                  </a>
                  <a href="#contact2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Contact Item 2
                  </a>
                  <a href="#contact3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Contact Item 3
                  </a>
                  <a href="#contact4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-500">
                    Contact Item 4
                  </a>
                </div>
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                Get a Support
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
