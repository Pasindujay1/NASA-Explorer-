import React, { useContext } from "react";
import HomePageVideo from "../assets/video/HomePageVideo.mp4";
import logoImage from "../assets/images/NASA_logo2.png";
import { useNavigate } from "react-router-dom";
import ToastContext from "../context/ToastContext";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { toast } = useContext(ToastContext);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExplore = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    toast.success("Logged out successfully!");
    navigate("/Login", { replace: true });
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and NASA Full Form */}
        <div className="flex items-center space-x-4">
          <button onClick={() => handleExplore("/Selection")}>
            <img
              src={logoImage}
              className="h-12 w-auto"
              alt="NASA Logo"
            />
          </button>
          <button onClick={() => handleExplore("/Selection")}>

          <span className="text-gray-900 text-lg font-semibold font-mono hidden md:block">
            National Aeronautics and Space Administration
          </span>
          </button>

        </div>

        {/* Main Menu */}
        <div className="flex items-center space-x-4  md:space-x-6">
          {/* Menu Items */}
          <ul className="hidden md:flex items-center mt-3 space-x-4 font-medium text-gray-900 dark:text-white">
            <li>
              <button
                onClick={() => handleExplore("/Rovers")}
                className="hover:text-blue-700 dark:hover:text-blue-500"
              >
                Mars Mission
              </button>
            </li>
            <li>
              <button
                onClick={() => handleExplore("/Astronomy")}
                className="hover:text-blue-700 dark:hover:text-blue-500"
              >
                Picture of the Day
              </button>
            </li>
            <li>
              <button
                onClick={() => handleExplore("/EarthImages")}
                className="hover:text-blue-700 dark:hover:text-blue-500"
              >
                Explore Earth
              </button>
            </li>
          </ul>

          {/* Logout Button (visible on smaller screens) */}
          <button
            onClick={handleLogout}
            className="md:hidden bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg"
          >
            Logout
          </button>

          {/* Logout Button (visible on larger screens) */}
          <button
            onClick={handleLogout}
            className="hidden md:block bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="md:hidden bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-2"
          aria-label="Open main menu"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
