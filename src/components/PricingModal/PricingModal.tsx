"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import "./PricingModal.css";

export interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PRICING_PLANS = [
  {
    badge: "STARTUP",
    price: "₹4,999",
    featured: false,
    ctaText: "Whatsapp",
    whatsappMessage: "Hi! I'm interested in the Startup Package (₹4,999).",
    features: [
      "1 Year Domain Free",
      "1 Year Hosting Free",
      "SSL Certificate Free",
      "Business Email Free",
      "Full SEO Friendly",
      "WhatsApp Button Integration",
      "Call Button Integration",
      "Chat Bot",
      "Social Media Integration",
      "Full Responsive (Tab, Laptop/Desktop)",
    ],
  },
  {
    badge: "ROYAL",
    price: "₹8,999",
    featured: true,
    ctaText: "Get Started",
    whatsappMessage: "Hi! I'm interested in the Royal Package (₹8,999).",
    features: [
      "1 Year Domain Free",
      "1 Year Hosting Free",
      "15 Pages* Design",
      "SSL Certificate Free",
      "Business Email Free",
      "Full SEO Friendly",
      "WhatsApp Button Integration",
      "Call Button Integration",
      "Chat Bot",
      "Social Media Integration",
      "Admin Panel Access",
      "Full Responsive (Tab, Laptop/Desktop)",
    ],
  },
  {
    badge: "E-COMMERCE - SILVER",
    price: "₹12,999",
    featured: false,
    ctaText: "Whatsapp",
    whatsappMessage: "Hi! I'm interested in the E-Commerce Silver Package (₹12,999).",
    features: [
      "1 Year Domain Free",
      "1 Year Hosting Free",
      "SSL Certificate Free",
      "Business Email Free",
      "Unlimited* Product Listing",
      "WhatsApp Button Integration",
      "Chat Bot",
      "Social Media Integration",
      "Payment Gateway Integration",
      "Admin Panel Access",
      "Full Responsive (Tab, Laptop/Desktop)",
    ],
  },
];

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="pricing-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pricing-modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            key="pricing-modal-container"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pricing-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="pricing-modal-close-btn"
              aria-label="Close Price Details Modal"
            >
              <X size={20} />
            </button>

            {/* Header Banner */}
            <div className="pricing-modal-header">
              <h2 className="pricing-banner-text">
                WE DESIGN HIGH-QUALITY WEBSITES THAT CONVERT VISITORS INTO LEADS
              </h2>
            </div>

            {/* 3 Pricing Cards Grid */}
            <div className="pricing-cards-grid">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.badge}
                  className={`pricing-card ${plan.featured ? "featured" : ""}`}
                >
                  <div>
                    <div className="pricing-card-header">
                      <span className="pricing-plan-badge">{plan.badge}</span>
                      <div className="pricing-plan-price">{plan.price}</div>
                    </div>

                    <ul className="pricing-features-list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="pricing-feature-item">
                          <span className="check-icon-circle">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/918287784156?text=${encodeURIComponent(
                      plan.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-card-cta-btn"
                  >
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
