"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Layanan", href: "#layanan" },
    { name: "Paket", href: "#paket" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Alur Kerja", href: "#alur-kerja" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="#" className="text-3xl font-heading font-extrabold tracking-tighter text-primary-900">
              Partner<span className="text-accent-orange">.</span>UMKM
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary-600 hover:text-primary-900 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/628XXXXXXXXXX?text=Halo%20Partner%20UMKM%2C%20saya%20mau%20konsultasi%20digitalisasi%20UMKM"
              target="_blank"
              className="bg-primary-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-800 transition-colors shadow-sm"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-primary-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-surface-200">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-surface-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/628XXXXXXXXXX?text=Halo%20Partner%20UMKM%2C%20saya%20mau%20konsultasi%20digitalisasi%20UMKM"
              target="_blank"
              className="mt-4 block text-center bg-primary-900 text-white px-5 py-3 rounded-md font-medium hover:bg-primary-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
