import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import WalletConnect from "../Blockchain_Service/connect_wallet";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="bg-gradient-to-r from-fuchsia-900
         to-slate-950 sticky top-0 z-10"
    >
      <nav className="container   mx-auto flex items-center justify-between py-4 px-8 md:px-16">
        <div className="flex items-center">
          <img
            className="w-[110px] md:w-auto"
            src="./images/logo.png"
            alt="logo"
          />
        </div>

        <div className="hidden md:flex md:items-center">
          <a
            className="text-white sm::text-[20px] font-semibold mr-7 hover:text-gray-500"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white sm::text-[20px] font-semibold mr-7 hover:text-gray-500"
            href="/about"
          >
            About
          </a>
          <a
            className="text-white sm::text-[20px] font-semibold mr-7 hover:text-gray-500"
            href="/services"
          >
            Services
          </a>
          <a
            className="text-white sm::text-[20px] font-semibold hover:text-gray-500"
            href="/contact"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <WalletConnect />
        </div>

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed top-0  right-0 bottom-0 left-0 bg-gradient-to-r from-fuchsia-900
         to-slate-950 flex flex-col items-center justify-center"
        >
          <button
            className="text-white absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <FaTimes className="text-2xl" />
          </button>
          <WalletConnect />
          <a
            className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500"
            href="/"
          >
            Home
          </a>
          <a
            className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500"
            href="/about"
          >
            About Us
          </a>
          <a
            className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500"
            href="/services"
          >
            faq
          </a>
          <a
            className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500"
            href="/contact"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
