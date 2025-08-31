import { Link } from "react-router-dom";
import cartIcon from "./assets/svgs/cart.svg";
import logo from "./assets/svgs/Logo.svg"; // Your uploaded logo
import searchIcon from "./assets/svgs/searchIcon.svg";
import userIcon from "./assets/svgs/user.svg";
import heartIcon from "./assets/svgs/whishlist.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Euphoria"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* CENTER: Menu Links */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14 text-gray-700 font-medium">
          <div className="hover:text-black cursor-pointer">Shop</div>
          <div className="hover:text-black cursor-pointer">Men</div>
          <Link to="/women" className="hover:text-black cursor-pointer">
            Women
          </Link>
          <div className="hover:text-black cursor-pointer">Combos</div>
          <div className="hover:text-black cursor-pointer">Joggers</div>
        </div>

        {/* RIGHT: Search and Icons */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-64 text-sm"
            />
            <img
              src={searchIcon}
              alt="Search"
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-500"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <img
              src={heartIcon}
              alt="Wishlist"
              className="h-5 w-5 cursor-pointer"
            />
            <img src={userIcon} alt="User" className="h-5 w-5 cursor-pointer" />
            <img src={cartIcon} alt="Cart" className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
