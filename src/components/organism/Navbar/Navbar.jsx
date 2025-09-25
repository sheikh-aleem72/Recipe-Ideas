import logo from "../../../assets/logo.png";
import { FaStar } from "react-icons/fa";

/**
 * Navbar Component
 *
 * Displays the main navigation bar with the logo, website name,
 * and a "Saved Recipes" button. Fully responsive for mobile and desktop.
 */
function Navbar() {
  return (
    <header className="w-full bg-[#CEE1C3] shadow-md">
      {/* Container for logo and navigation */}
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo and site title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Recipe Ideas Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-semibold font-sans text-gray-800">
            Recipe Ideas
          </h1>
        </div>

        {/* Saved Recipes Button */}
        <button className="flex items-center gap-2 text-md md:text-lg font-medium text-gray-700 hover:text-green-700 transition-colors duration-300">
          <FaStar className="text-yellow-500" />
          Saved Recipes
        </button>
      </div>
    </header>
  );
}

export default Navbar;
