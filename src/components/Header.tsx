"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

interface HeaderProps {
  headerName?: string;
}

export default function Header({ headerName = "Mahlet Teshome" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Split name for styling
  const nameParts = headerName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          {firstName} {lastName && <span>{lastName}</span>}
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" className="nav-link nav-cta">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>

        {/* Animated Burger Button */}
        <button
          className={`burger-btn${isMenuOpen ? " open" : ""}`}
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer${isMenuOpen ? " open" : ""}`} aria-hidden={!isMenuOpen}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href} className="mobile-nav-item">
              <Link href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                {link.label}
                <span className="arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-footer">
          <Link href="#contact" className="btn btn-primary" onClick={closeMenu} style={{ width: "100%", justifyContent: "center" }}>
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}
