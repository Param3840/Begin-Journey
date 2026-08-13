"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Services.css";

// Easily replaceable coffee café image source
const CAFE_IMAGE =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80";

export interface ServiceSlideData {
  id: string;
  number: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  preview: {
    brandName: string;
    navItems: string[];
    headline: string;
    ctaLabel: string;
  };
}

export const SERVICES_SLIDES: ServiceSlideData[] = [
  {
    id: "cafe",
    number: "01",
    category: "CAFÉ",
    description:
      "We build a custom high-end website with digital menus & rich photography, integrated with WhatsApp automation for instant table bookings and automated customer inquiries.",
    tags: ["Custom Website", "WhatsApp Booking", "Digital Menu", "Inquiry Automation"],
    image: CAFE_IMAGE,
    preview: {
      brandName: "ARTISAN CAFÉ",
      navItems: ["Website", "WhatsApp", "Booking"],
      headline: "Custom Website + WhatsApp Table Booking & Instant Inquiry Automation.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "salon",
    number: "02",
    category: "SALON",
    description:
      "We deliver a modern beauty website showcasing your services & style gallery, paired with WhatsApp automation for direct client appointment scheduling and instant price inquiries.",
    tags: ["Custom Website", "WhatsApp Scheduling", "Service Gallery", "Client Booking"],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "LUXE STUDIO",
      navItems: ["Services", "Gallery", "WhatsApp"],
      headline: "Custom Website + Automated WhatsApp Client Appointment Scheduling.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "clothing",
    number: "03",
    category: "CLOTHING",
    description:
      "We design a digital storefront for your brand: a sleek fashion website featuring your lookbook, combined with WhatsApp automation for size inquiries, orders, and instant catalog sharing.",
    tags: ["E-Commerce Site", "Lookbook UX", "WhatsApp Orders", "Catalog Automation"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "ATELIER NOIR",
      navItems: ["Lookbook", "Store", "WhatsApp"],
      headline: "Sleek Fashion Website + WhatsApp Order & Size Inquiry Automation.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "architecture",
    number: "04",
    category: "ARCHITECTURE",
    description:
      "We craft an editorial portfolio website featuring immersive project photography, alongside automated WhatsApp inquiry routing for new client consultations & blueprint requests.",
    tags: ["Editorial Portfolio", "Visual UX", "WhatsApp Leads", "Client Consultation"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "STUDIO FORMA",
      navItems: ["Projects", "Philosophy", "WhatsApp"],
      headline: "High-Resolution Portfolio + Automated Consultation Lead Capture.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "restaurant",
    number: "05",
    category: "RESTAURANT",
    description:
      "We deliver a full dining digital experience: an interactive menu & venue showcase website, backed by automated WhatsApp reservations and instant dietary inquiry responses.",
    tags: ["Dining Website", "WhatsApp Reservations", "Interactive Menu", "Visual UX"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "LA TAVERNA",
      navItems: ["Menu", "Reserve", "WhatsApp"],
      headline: "Interactive Dining Website + Automated WhatsApp Table Reservations.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "local-business",
    number: "06",
    category: "LOCAL BUSINESS",
    description:
      "We bring your business online: a clear, high-converting website highlighting your offerings, plus 24/7 automated WhatsApp messaging to instantly answer customer questions and log leads.",
    tags: ["Conversion Site", "24/7 WhatsApp Bot", "Location Sync", "Lead Capture"],
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "CORNER MARKET",
      navItems: ["Storefront", "Hours", "WhatsApp"],
      headline: "Conversion Website + 24/7 Automated WhatsApp Inquiry Capture.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "e-commerce",
    number: "07",
    category: "E-COMMERCE",
    description:
      "We build high-performance online product stores: fast-loading visual catalog layouts, frictionless checkout UX, and automated WhatsApp order confirmations & shipping updates.",
    tags: ["Fast Storefront", "Frictionless UX", "WhatsApp Confirmations", "Catalog Sync"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "HAUTE STORE",
      navItems: ["Products", "Checkout", "WhatsApp"],
      headline: "High-Speed Storefront + Automated WhatsApp Order & Shipping Updates.",
      ctaLabel: "View Deliverables →",
    },
  },
  {
    id: "professional-services",
    number: "08",
    category: "PROFESSIONAL SERVICES",
    description:
      "We build trust before the first call: an authoritative service website outlining your expertise & case studies, paired with automated WhatsApp lead intake & call scheduling.",
    tags: ["Authority Website", "WhatsApp Lead Intake", "Call Booking", "Case Studies"],
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    preview: {
      brandName: "APEX CONSULT",
      navItems: ["Expertise", "Cases", "WhatsApp"],
      headline: "Authority Website + Automated WhatsApp Client Intake & Call Booking.",
      ctaLabel: "View Deliverables →",
    },
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "60%" : "-60%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: "0%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "60%" : "-60%",
    opacity: 0,
  }),
};

export const Services: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const slideIndex = Math.abs(page % SERVICES_SLIDES.length);
  const currentSlide = SERVICES_SLIDES[slideIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
    },
    []
  );

  const handleNext = useCallback(() => paginate(1), [paginate]);
  const handlePrev = useCallback(() => paginate(-1), [paginate]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Calculate progress percentage
  const progressPercent = ((slideIndex + 1) / SERVICES_SLIDES.length) * 100;

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="services-header"
        >
          <span className="services-label">
            WHAT WE BUILD
          </span>
      
          <p className="services-intro-text">
            Every business has a different story, a different customer and a different way of working. We build digital experiences around that.
          </p>
        </motion.div>

        {/* Main Viewport Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="showcase-viewport"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 32 },
                opacity: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -60) {
                  handleNext();
                } else if (offset.x > 60) {
                  handlePrev();
                }
              }}
              className="showcase-flex-wrapper"
            >
              {/* LEFT IMAGE BOX (NEUMORPHIC SURFACE) */}
              <div className="showcase-image-box">
                <img
                  src={currentSlide.image}
                  alt={`${currentSlide.category} website experience by Begin Journey`}
                  className="showcase-img"
                />

                {/* Neumorphic Navigation Arrow Buttons Positioned Around Image Box */}
                <button
                  onClick={handlePrev}
                  className="showcase-img-btn prev"
                  aria-label="Previous service"
                >
                  <ArrowLeft size={18} className="nav-arrow-icon" />
                </button>
                <button
                  onClick={handleNext}
                  className="showcase-img-btn next"
                  aria-label="Next service"
                >
                  <ArrowRight size={18} className="nav-arrow-icon" />
                </button>
              </div>

              {/* RIGHT CONTENT BOX (NEUMORPHIC SURFACE) */}
              <div className="showcase-content-box">
                <div>
                  <div className="showcase-meta">
                    <span className="showcase-number-editorial">
                      {currentSlide.number}
                    </span>
                    <span className="showcase-number-line"></span>
                    <span className="showcase-micro-tag">WHAT WE DELIVER</span>
                  </div>

                  <h3 className="showcase-category">{currentSlide.category}</h3>

                  <p className="showcase-desc">{currentSlide.description}</p>

                  <div className="showcase-tags">
                    {currentSlide.tags.map((tag) => (
                      <span key={tag} className="showcase-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
