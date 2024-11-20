import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#fitur", label: "Fitur" },
  { href: "#kontak", label: "Kontak" },
  { href: "#faq", label: "FAQ" },
];

const WHATSAPP_LINK = {
  href: "https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola",
  label: "Daftar",
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between p-4 mx-auto max-w-screen-2xl">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-blue-950">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-blue-500">
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK.href}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:shadow-md transition-transform transform hover:scale-105"
          >
            {WHATSAPP_LINK.label}
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-950 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-4 text-blue-950">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:shadow-md transition-transform transform hover:scale-105"
            >
              {WHATSAPP_LINK.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
