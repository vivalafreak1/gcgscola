import React from "react";
import logo from "../assets/logo.webp";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";
import ContactSection from "../components/ContactSection";
import PortalSection from "../components/PortalSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function () {
  return (
    <div className="LandingPage">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Portal Pengguna */}
      <PortalSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
