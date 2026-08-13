"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import "./Navbar.css";

import logoImg from "@/public/logo.png";
const LOGO_IMAGE = typeof logoImg === "string" ? logoImg : logoImg?.src || "/logo.png";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to auto-update active Navbar item
  useEffect(() => {
    const sectionIds = NAVIGATION_ITEMS.map((item) => item.target);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler for clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar-container ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-inner">
          {/* LEFT: Image Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="navbar-logo"
          >
            <img
              src={LOGO_IMAGE}
              alt="Begin Journey Logo"
              className="navbar-logo-img"
            />
          </a>

          {/* RIGHT: Navigation Items rendered from NAVIGATION_ITEMS */}
          <nav className="navbar-nav">
            <ul className="navbar-links">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.target;
                return (
                  <li key={item.target}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => handleNavClick(e, item.target)}
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-menu-overlay"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className={`mobile-nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
