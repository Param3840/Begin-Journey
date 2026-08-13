"use client";

import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { AboutWork } from "@/components/AboutWork/AboutWork";
import { Services } from "@/components/Services/Services";
import { OurWork } from "@/components/OurWork/OurWork";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutWork />
      <Services />
      <OurWork />
      <Contact />
      <Footer />
    </main>
  );
}
