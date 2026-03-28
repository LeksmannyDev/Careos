import React, { useState, useEffect, useCallback } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { homeAsset } from "../assets/homeAssets";

const navItems = [
  { label: "home", slug: "home" },
  { label: "about Us", slug: "about" },
  { label: "cars", slug: "cars" },
  { label: "Services", slug: "services" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback((slug: string) => {
    setActiveItem(slug);
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-transparent backdrop-blur-lg"
          : "bg-[#FFFFFF] backdrop-blur-lg"
      }`}
    >
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-5 xl:px-30 lg:px-5 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={homeAsset.Careos} alt="Logo" className="h-8 md:h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-8 px-6 rounded-full capitalize ">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.slug === "home" ? "/" : `/${item.slug}`}
                  onClick={() => handleNavClick(item.slug)}
                  className={`text-md font-medium transition ${
                    activeItem === item.slug
                      ? "sub-text"
                      : "text-black hover:text-[#FF7A00]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex text-[#FFFFFF] sub-back text-3xl cursor-pointer font-medium text-base px-8 py-3 rounded-lg items-center justify-center gap-2 transition-colors duration-300 capitalize"
          >
            order now
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              className="text-2xl sub-text cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-2xl sub-text cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 w-full h-screen overflow-y-hidden bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-10 pt-4">
            <FaTimes
              className="text-3xl sub-text cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="flex flex-col justify-center h-full px-6 pb-20">
            {/* Mobile Navigation - Stacked Buttons */}
            <div className="space-y-4 mb-10">
              {navItems.map((item) => (
                <Link
                  key={item.slug}
                  to={item.slug === "home" ? "/" : `/${item.slug}`}
                  onClick={() => handleNavClick(item.slug)}
                  className={`block w-full text-center py-4 px-6 capitalize rounded-full text-md font-medium border transition-colors duration-300 ${
                    activeItem === item.slug
                      ? "bg-[#FF7A00] text-[#ffffff] border-[#FF7A00]"
                      : "border-gray-700 text-white hover:border-[#FF7A00] hover:text-[#FF7A00]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
