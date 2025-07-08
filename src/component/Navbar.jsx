import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certs" },
  { name: "Skills", href: "#skills" },
];

const Navbar = ({ theme, dark, setDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full pt-8 z-50 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={`flex items-center w-full px-8 py-2 rounded-full shadow-lg ${theme.bg}`}>
          {/* Logo/Brand */}
          <div className="flex items-center mr-8">
            <span className="rounded-full bg-[#7864fa] w-8 h-8 flex items-center justify-center mr-2 text-white font-bold text-lg">
              S
            </span>
            <span className={`font-bold text-xl ${theme.accent}`}>Welcome</span>
          </div>
          {/* Desktop Nav Links */}
          <ul className="flex-1 hidden md:flex items-center justify-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`transition font-medium hover:text-[#7864fa] ${theme.text}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-[#7864fa] text-white font-semibold rounded-full shadow hover:bg-[#4cc9f0] transition"
            >
              Contact Me
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-full border border-gray-300 text-xl bg-white hover:bg-[#f5f7fa] transition"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden ml-auto"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          {/* Sidebar */}
          <div className="bg-white dark:bg-[#22223b] w-64 h-full p-8 flex flex-col shadow-lg relative animate-slide-in-left">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <FiX size={28} />
            </button>
            {/* Links */}
            <nav className="mt-12 flex-1 flex flex-col gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-[#7864fa] hover:text-[#4cc9f0] transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-6 px-6 py-2 bg-[#7864fa] text-white font-semibold rounded-full shadow hover:bg-[#4cc9f0] transition text-center"
                onClick={() => setOpen(false)}
              >
                Contact Me
              </a>
              <button
                aria-label="Toggle theme"
                onClick={() => {
                  setDark((d) => !d);
                  setOpen(false);
                }}
                className="mt-2 p-2 rounded-full border border-gray-300 text-xl bg-white hover:bg-[#f5f7fa] transition self-center"
              >
                {dark ? "🌙" : "☀️"}
              </button>
            </nav>
          </div>
          {/* Clickable overlay to close */}
          <div
            className="flex-1"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
