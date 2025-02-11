import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronLeft } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar") && !event.target.closest(".hamburger")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Hamburger Button (Only visible on mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 left-5 bg-gray-800 text-white p-2 rounded-full shadow-md md:hidden hamburger"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar bg-gray-800 text-white w-64 min-h-screen p-4 fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 bg-gray-800 text-white p-2 rounded-full shadow-md md:hidden"
        >
          <FaChevronLeft size={20} />
        </button>

        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ul className="mt-6">
          <li className="mb-2">
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 block py-2"
            >
              Analytics
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/users"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 block py-2"
            >
              User Management
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
