"use client";

import React from "react";
import { motion } from "framer-motion";
import "./AboutWork.css";

import aboutImg from "@/public/about.jpg";

// Easily replaceable image source constant
const ABOUT_WORK_IMAGE = typeof aboutImg === "string" ? aboutImg : aboutImg.src;

export const AboutWork: React.FC = () => {
  return (
    <section id="about" className="about-work-section">
      <div className="about-work-container">
        
        {/* LEFT COLUMN: Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="about-work-text"
        >
          {/* Section Label */}
          <span className="about-work-label">
            ABOUT OUR WORK
          </span>

          {/* Main Heading */}
          <h2 className="about-work-heading">
            <span className="heading-inter">We build digital experiences</span>
            <span className="heading-serif">that move businesses forward.</span>
          </h2>

          {/* Body Content */}
          <div className="about-work-body">
            <p className="about-work-p inter-regular">
              Begin Journey is a small digital studio founded by Paramveer. We create thoughtful websites, WhatsApp automation and digital systems that help businesses connect with their customers and work smarter.
            </p>
            <p className="about-work-p inter-regular">
              We believe good technology should feel simple — beautifully designed on the outside and genuinely useful underneath.
            </p>
          </div>

          {/* Small Statement */}
          <p className="about-work-statement source-serif-4-regular">
            Small team. Direct collaboration. Serious work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="about-work-media"
        >
          <div className="about-work-image-frame">
            <img
              src={ABOUT_WORK_IMAGE}
              alt="Creative digital work at Begin Journey"
              className="about-work-image"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
