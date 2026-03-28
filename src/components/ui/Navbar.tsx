"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Toppers", href: "/toppers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-[#FF9933] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-orange-500/20">
            <BookOpen size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight text-gray-900 group-hover:text-orange-600 transition-colors tracking-tight">Ravindras IAS</span>
            <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold text-sm px-4 py-2 rounded-full transition-colors hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="navbar-indicator" 
                    className="absolute bottom-1 left-4 right-4 h-[3px] bg-orange-500 rounded-t-full" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link 
            href="/courses" 
            className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-full shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 inline-block"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 font-semibold rounded-xl mb-1 ${
                  isActive ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="/courses" 
            onClick={() => setMobileOpen(false)}
            className="mt-4 mx-2 px-6 py-3 bg-orange-600 text-white text-center font-bold rounded-xl shadow-md"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
