import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
 const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/product" },
  { name: "Contact", path: "/contact" },
];
 

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 lg:px-10">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
        <Link
        to="/"
        className="flex items-center gap-3 cursor-pointer"
      >
        <img
          src="/Logo.jpg"
          alt="SamLek Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />

        <h1 className="text-xl md:text-2xl font-bold text-amber-700">
          SamLek Furniture
        </h1>
      </Link>

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
          <Link
            to="/contact"
            className="hidden md:block bg-amber-700 text-white px-5 py-2.5 rounded-lg hover:bg-amber-800 transition"
          >
            Get Quote
          </Link>

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
      {/* Overlay */}
<div
  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setIsOpen(false)}
></div>

{/* Sidebar */}
<div
  className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex items-center justify-between p-5 border-b">
    <div className="flex items-center gap-3">
      <img
        src="/Logo.jpg"
        alt="Logo"
        className="h-10 w-auto"
      />

      <h2 className="text-xl font-bold text-amber-700">
        SamLek
      </h2>
    </div>

    <button
      onClick={() => setIsOpen(false)}
      className="text-gray-700"
    >
      <X size={28} />
    </button>
  </div>

  {/* Navigation */}
  <ul className="flex flex-col p-6 gap-6">
    {NavLinks.map((link) => (
      <li key={link.name}>
        <Link
          to={link.path}
          onClick={() => setIsOpen(false)}
          className="block text-lg font-medium text-gray-700 hover:text-amber-700 transition"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>

  {/* CTA */}
  <div className="px-6 mt-4">
    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className="block w-full text-center bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition"
    >
      Get Quote
    </Link>
  </div>
</div>
    </nav>
  );
};

export default NavBar;