import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
   const  [useLogo, setUseLogo] =useState<boolean>(false)
 const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];
 

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-amber-700 cursor-pointer">
            SamLek
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
           {NavLinks.map((link) => (
            <li key={link.name}>
                <Link
                to={link.path}
                className="text-gray-700 font-medium hover:text-amber-700 transition duration-300"
                >
                {link.name}
                </Link>
            </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:block bg-amber-700 text-white px-5 py-2.5 rounded-lg hover:bg-amber-800 transition"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-lg">
           {NavLinks.map((link) => (
            <li key={link.name}>
                <Link
                to={link.path}
                className="text-gray-700 font-medium hover:text-amber-700 transition duration-300 pt-2"
                >
                {link.name}
                </Link>
            </li>
            ))}

          <div className="p-6">
            <a
              href="#contact"
              className="block w-full text-center bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;