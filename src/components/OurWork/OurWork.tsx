"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ExternalLink } from "lucide-react";
import "./OurWork.css";

// Easily replaceable project image sources
export const AQUAFINE_IMAGE = "/Aquafine_Minerals.PNG";

export const LOCAL_MARKETPLACE_IMAGE = "/Local Market Place.PNG";

export const LEETCODE_PROJECT_IMAGE = "/Leet Code.PNG";

export const FUNKY_PORTFOLIO_IMAGE = "/funky portfolio.PNG";

export interface ProjectData {
  number: string;
  title: string;
  category: string;
  microTag: string;
  description: string;
  image: string;
  slug: string;
  linkUrl?: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    number: "01",
    title: "Aquafine",
    category: "Brand Website / Digital Experience",
    microTag: "BRAND EXPERIENCE",
    description:
      "A premium digital experience created for Aquafine, showcasing its customised packaged drinking water solutions and brand identity.",
    image: AQUAFINE_IMAGE,
    slug: "aquafine",
    linkUrl: "https://aquafine-minerals.vercel.app/",
  },
  {
    number: "02",
    title: "Local Marketplace",
    category: "Marketplace / Web Platform",
    microTag: "WEB PLATFORM",
    description:
      "A digital marketplace platform designed to connect local businesses directly with nearby customers and streamline community commerce.",
    image: LOCAL_MARKETPLACE_IMAGE,
    slug: "local-marketplace",
    linkUrl: "https://local-market-place-ten.vercel.app/",
  },
  {
    number: "03",
    title: "LeetCode Project",
    category: "Developer Platform / Web Application",
    microTag: "WEB APPLICATION",
    description:
      "A developer-focused platform built around LeetCode workflows, code practice, and developer progress tracking.",
    image: LEETCODE_PROJECT_IMAGE,
    slug: "leetcode-project",
    linkUrl: "https://leet-code-revision.vercel.app/",
  },
  {
    number: "04",
    title: "Funky Portfolio",
    category: "Creative Portfolio / Interactive Experience",
    microTag: "CREATIVE EXPERIENCE",
    description:
      "A bold, expressive digital portfolio showcasing dynamic interactions, vivid aesthetics, and creative web craftsmanship.",
    image: FUNKY_PORTFOLIO_IMAGE,
    slug: "funky-portfolio",
    linkUrl: "https://paramveersingh.vercel.app/",
  },
];

export const OurWork: React.FC = () => {
  const CARDS_PER_VIEW = 3;
  const [startIndex, setStartIndex] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const maxStartIndex = Math.max(0, PROJECTS_DATA.length - CARDS_PER_VIEW);

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      const nextStart = startIndex + 1;
      setStartIndex(nextStart);
      if (activeIndex < nextStart || activeIndex >= nextStart + CARDS_PER_VIEW) {
        setActiveIndex(nextStart);
      }
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      const prevStart = startIndex - 1;
      setStartIndex(prevStart);
      if (activeIndex < prevStart || activeIndex >= prevStart + CARDS_PER_VIEW) {
        setActiveIndex(prevStart);
      }
    }
  };

  const visibleProjects = PROJECTS_DATA.slice(startIndex, startIndex + CARDS_PER_VIEW);

  return (
    <section id="work" className="our-work-section">
      <div className="our-work-container">
        
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="our-work-header"
        >
          <span className="our-work-label">
            OUR WORK
          </span>
          <h2 className="our-work-heading">
            <span className="heading-inter">Built by us.</span>
            <span className="heading-serif">Designed for real businesses.</span>
          </h2>
          <p className="our-work-intro-text">
            From brand experiences to digital platforms, these are some of the products and experiences we've built.
          </p>
        </motion.div>

        {/* Carousel Wrapper with Responsive Floating Navigation Buttons */}
        <div className="carousel-wrapper">
          {/* PREVIOUS / UP BUTTON: Visible only when startIndex > 0 */}
          <AnimatePresence>
            {startIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                onClick={handlePrev}
                className="side-nav-btn side-nav-left"
                aria-label="Previous Projects"
                title="Previous Projects"
              >
                <span className="nav-icon-desktop"><ChevronLeft size={24} /></span>
                <span className="nav-icon-mobile"><ChevronUp size={24} /></span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Horizontal / Vertical Overlapping Revealing Cards Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="horizontal-cards-container"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => {
                const globalIndex = PROJECTS_DATA.findIndex((p) => p.slug === project.slug);
                const isActive = activeIndex === globalIndex;

                return (
                  <motion.div
                    key={project.slug}
                    onClick={() => setActiveIndex(globalIndex)}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={`horizontal-project-card ${
                      isActive ? "active" : "collapsed"
                    }`}
                    layout
                  >
                    {/* Image Area */}
                    <div className="card-image-box">
                      {project.linkUrl && isActive ? (
                        <a
                          href={project.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-image-link"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open ${project.title} live website`}
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} — ${project.category}`}
                            className="card-image"
                            loading="lazy"
                          />
                          <div className="card-image-badge">
                            <span>Visit Live Site</span>
                            <ExternalLink size={12} />
                          </div>
                        </a>
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.title} — ${project.category}`}
                          className="card-image"
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Content Area: Conditional rendering based on Active vs Collapsed state */}
                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          key="active-content"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="active-card-content"
                        >
                          <div>
                            <div className="active-meta">
                              <span className="active-number">{project.number}</span>
                              <span className="active-line"></span>
                              <span className="active-tag">{project.microTag}</span>
                            </div>

                            <h3 className="active-title">{project.title}</h3>

                            <p className="active-desc">{project.description}</p>
                          </div>

                          {project.linkUrl ? (
                            <a
                              href={project.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="active-action clickable-link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Project</span>
                              <ArrowRight size={16} className="active-arrow-icon" />
                            </a>
                          ) : (
                            <div className="active-action">
                              <span>View Project</span>
                              <ArrowRight size={16} className="active-arrow-icon" />
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed-content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="collapsed-card-content"
                        >
                          <span className="collapsed-number">{project.number}</span>
                          <h3 className="collapsed-title-rotated">{project.title}</h3>
                          <span className="collapsed-click-badge">Reveal →</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* NEXT / DOWN BUTTON: Visible only when startIndex < maxStartIndex */}
          <AnimatePresence>
            {startIndex < maxStartIndex && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                onClick={handleNext}
                className="side-nav-btn side-nav-right"
                aria-label="Next Projects"
                title="Next Projects"
              >
                <span className="nav-icon-desktop"><ChevronRight size={24} /></span>
                <span className="nav-icon-mobile"><ChevronDown size={24} /></span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
