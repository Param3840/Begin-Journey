"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { PricingModal } from "@/components/PricingModal/PricingModal";
import "./Hero.css";

import logoImg from "@/public/logo.png";
const LOGO_IMAGE = typeof logoImg === "string" ? logoImg : logoImg?.src || "/logo.png";

const TITLE_TEXT = "Begin Your Journey";
const WORDS = TITLE_TEXT.split(" ");

// Parent container variants to stagger each individual letter reveal
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

// Individual letter animation variants
const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC = () => {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState<boolean>(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* Main Headline with Sequential Letter-by-Letter Reveal in Lavishly Yours */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-title begin-journey-title lavishly-yours-regular"
        >
          {WORDS.map((word, wordIdx) => (
            <span
              key={wordIdx}
              className="hero-title-word"
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={letterVariants}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIdx < WORDS.length - 1 && (
                <span className="hero-title-space" style={{ display: "inline-block" }}>
                  &nbsp;
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle in Sekuya */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="hero-subtitle begin-journey-subtitle sekuya-regular"
        >
          with Paramveer
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#work" className="hero-cta-btn">
            <span>Explore Our Work</span>
            <ArrowRight size={16} className="hero-cta-arrow" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Left Logo Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
        className="hero-bottom-left-logo"
      >
        <img
          src={LOGO_IMAGE}
          alt="Begin Journey Logo"
          className="hero-logo-img"
        />
      </motion.div>

      {/* Bottom Right Price Details Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setIsPriceModalOpen(true)}
        className="hero-bottom-right-price-btn"
        aria-label="View Price Details"
      >
        <Tag size={16} />
        <span>Price Details</span>
      </motion.button>

      {/* Pricing Modal Screen */}
      <PricingModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
      />

      <div className="hero-bottom-spacer" />
    </section>
  );
};
