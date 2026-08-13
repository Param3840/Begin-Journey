"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, MessageSquare, AlertCircle } from "lucide-react";
import { GOOGLE_SHEETS_WEB_APP_URL } from "@/config/constants";
import "./Contact.css";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // 1. Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    // 2. Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // 3. Number validation (Accepts Indian 10-digit mobile numbers or with +91/spaces)
    const cleanNumber = formData.number.replace(/[\s-]/g, "");
    if (!formData.number.trim()) {
      newErrors.number = "Please enter your phone/WhatsApp number";
    } else if (!/^(\+91)?[6-9]\d{9}$/.test(cleanNumber)) {
      newErrors.number = "Please enter a valid 10-digit phone number";
    }

    // 4. Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a bit about your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send as application/x-www-form-urlencoded using URLSearchParams
      const bodyData = new URLSearchParams();
      bodyData.append("name", formData.name.trim());
      bodyData.append("email", formData.email.trim());
      bodyData.append("number", formData.number.trim());
      bodyData.append("purpose", "General Inquiry");
      bodyData.append("message", formData.message.trim());

      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: "POST",
        body: bodyData,
      });

      const data = await response.json();

      if (data && data.success === true) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          data?.message || "Something went wrong. Please try again in a moment."
        );
      }
    } catch (error) {
      setSubmitError(
        "We couldn't send your inquiry right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Ambient Floating Background Orbs */}
      <div className="contact-ambient-orb-1" />
      <div className="contact-ambient-orb-2" />

      <div className="contact-container">
        <div className="contact-grid">
          
          {/* LEFT COLUMN: Editorial Narrative & Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="contact-left-col"
          >
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="contact-label"
            >
              LET'S TALK
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="contact-heading"
            >
              <span className="heading-inter">Let's build something</span>
              <span className="heading-serif">worth beginning.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="contact-intro"
            >
              Have a website in mind, a business process that needs automation, or simply an idea you want to explore? Tell us about it. We'll figure out the next step together.
            </motion.p>

            {/* Quick Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="contact-actions-row"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:beginjourney2003@gmail.com"
                className="contact-action-link"
                aria-label="Email us directly"
              >
                <Mail size={15} />
                <span>Email us</span>
                <ArrowRight size={14} className="action-arrow" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/918287784156"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-link"
                aria-label="Talk on WhatsApp"
              >
                <MessageSquare size={15} />
                <span>Talk on WhatsApp</span>
                <ArrowRight size={14} className="action-arrow" />
              </motion.a>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="contact-info-block"
            >
              <h3 className="contact-info-title">GET IN TOUCH</h3>

              <div className="contact-info-list">
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="info-item"
                >
                  <span className="info-item-label">Email</span>
                  <a
                    href="mailto:beginjourney2003@gmail.com"
                    className="info-item-value"
                    style={{ textDecoration: "none" }}
                  >
                    beginjourney2003@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="info-item"
                >
                  <span className="info-item-label">WhatsApp</span>
                  <a
                    href="https://wa.me/918287784156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-item-value"
                    style={{ textDecoration: "none" }}
                  >
                    +91 82877 84156
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="info-item"
                >
                  <span className="info-item-label">Location</span>
                  <span className="info-item-value">India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Abstract Journey Path Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="journey-path-graphic"
            >
              <div className="journey-step">
                <span className="journey-dot"></span>
                <span>IDEA</span>
              </div>
              <span className="journey-arrow-line"></span>
              <div className="journey-step">
                <span className="journey-dot"></span>
                <span>BUILD</span>
              </div>
              <span className="journey-arrow-line"></span>
              <div className="journey-step">
                <span className="journey-dot"></span>
                <span>LAUNCH</span>
              </div>
            </motion.div>

            {/* Left Column Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="left-closing-note"
            >
              <p className="closing-note-inter">No perfect brief required.</p>
              <p className="closing-note-serif">Just tell us where you want to begin.</p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: PROJECT INQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="contact-right-col"
          >
            <div className="contact-form-card">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="inquiry-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="form-header-title">Start Your Journey</h3>

                    {/* Network / Backend Error Banner */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="submit-error-banner"
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <AlertCircle size={16} />
                          <span>{submitError}</span>
                        </div>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
                      
                      {/* Name & Email */}
                      <div className="form-row-2">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            Your Name <span className="required-asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Paramveer Singh"
                            disabled={isSubmitting}
                            className={`form-input ${errors.name ? "input-error" : ""}`}
                          />
                          {errors.name && <span className="field-error-text">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email <span className="required-asterisk">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            disabled={isSubmitting}
                            className={`form-input ${errors.email ? "input-error" : ""}`}
                          />
                          {errors.email && <span className="field-error-text">{errors.email}</span>}
                        </div>
                      </div>

                      {/* WhatsApp / Phone Number */}
                      <div className="form-group">
                        <label htmlFor="number" className="form-label">
                          WhatsApp / Phone Number <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          value={formData.number}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          disabled={isSubmitting}
                          className={`form-input ${errors.number ? "input-error" : ""}`}
                        />
                        {errors.number && <span className="field-error-text">{errors.number}</span>}
                      </div>

                      {/* Project Description Textarea */}
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Tell us about your project <span className="required-asterisk">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          disabled={isSubmitting}
                          placeholder="Tell us what you're building, what isn't working, or what you'd like to improve..."
                          className={`form-textarea ${errors.message ? "input-error" : ""}`}
                        ></textarea>
                        {errors.message && <span className="field-error-text">{errors.message}</span>}
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.015, y: -1 }}
                        whileTap={{ scale: 0.985 }}
                        className="submit-btn"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <ArrowRight size={18} className="submit-btn-arrow" />
                          </>
                        )}
                      </motion.button>

                    </form>
                  </motion.div>
                ) : (
                  /* SUCCESS STATE */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="form-success-card"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
                      className="success-icon-badge"
                    >
                      <CheckCircle2 size={28} />
                    </motion.div>

                    <h3 className="success-title">Thanks for reaching out.</h3>

                    <p className="success-desc">
                      Your details have been received. We'll get back to you soon.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleReset}
                      className="reset-inquiry-btn"
                    >
                      Start another inquiry →
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
