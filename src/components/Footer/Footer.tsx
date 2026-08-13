"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import "./Footer.css";

import logoImg from "@/public/logo.png";
const LOGO_IMAGE = typeof logoImg === "string" ? logoImg : logoImg?.src || "/logo.png";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          
          {/* COL 1: Brand & Tagline */}
          <div className="footer-brand-col">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="footer-logo-link"
              aria-label="Begin Journey Home"
            >
              <img
                src={LOGO_IMAGE}
                alt="Begin Journey Logo"
                className="footer-logo-img"
              />
            </a>

            <p className="footer-tagline">
              Designing and building custom websites, web platforms, and business automation solutions for real businesses.
            </p>

            <p className="footer-serif-quote">
              Begin your digital journey with us.
            </p>
          </div>

          {/* COL 2: Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">NAVIGATION</h4>

            <ul className="footer-links-list">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.target}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="footer-link"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Contact & Direct Channels */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">GET IN TOUCH</h4>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a
                  href="mailto:beginjourney2003@gmail.com"
                  className="footer-contact-val"
                >
                  beginjourney2003@gmail.com
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">WhatsApp</span>
                <a
                  href="https://wa.me/918287784156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-val"
                >
                  +91 82877 84156
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">Location</span>
                <span className="footer-contact-val">India</span>
              </div>
            </div>
          </div>

          {/* COL 4: Quick Action & Back to Top */}
          <div className="footer-action-col">
            <h4 className="footer-col-title">EXPLORE</h4>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </motion.button>

            <ul className="footer-links-list" style={{ marginTop: "0.5rem" }}>
              <li>
                <a
                  href="https://paramveersingh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Funky Portfolio</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://aquafine-minerals.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Aquafine Project</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Begin Journey. All rights reserved.
          </p>

          <p className="footer-credit-text">
            Built with care by <span>Paramveer</span> & <span>Sheetal</span>.
          </p>
        </div>

      </div>
    </footer>
  );
};
