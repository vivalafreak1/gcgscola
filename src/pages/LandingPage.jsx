import React from "react";
import school from "../assets/school.webp";
import logo from "../assets/logo.webp";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";
import ContactSection from "../components/ContactSection";
import PortalSection from "../components/PortalSection";

export default function () {
  return (
    <div className="LandingPage">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-screen p-8 bg-center bg-cover"
        style={{
          backgroundImage: `url(${school})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-lg p-6 text-center rounded-lg">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Welcome to <span className="text-[#1A6B9E]">GCG</span>{" "}
            <span className="text-[#33c9e3]">Scola</span>
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-200 md:text-2xl">
            ERP Terpadu untuk Pendidikan: Integrasi, Inovasi, dan Inspirasi
            untuk Masa Depan
          </p>
          {/* Button under the paragraph */}
          <div className="flex justify-center mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
              className="px-8 py-4 text-lg text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Pelajari lebih lanjut
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="tentang"
        className="flex flex-col items-center justify-center min-h-screen p-8 pt-24 bg-center bg-cover md:flex-row-reverse"
      >
        {/* Text Column */}
        <div className="w-full max-w-screen-sm mb-8 text-center md:text-left md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-4xl font-bold text-blue-950 md:text-5xl">
            GCG Scola: Revolusi Pendidikan di Ujung Jari Anda
          </h2>
          <p className="text-lg text-gray-800 md:text-xl">
            Aplikasi ERP (Enterprise Resource Planning) yang inovatif, dirancang
            untuk mempermudah setiap peran di lingkungan sekolah agar tetap
            terhubung dan terintegrasi, di mana pun dan kapan pun. Dengan
            antarmuka yang ramah pengguna dan responsif, aplikasi ini memberikan
            akses cepat dan mudah ke fitur-fitur utama, seperti manajemen
            pembelajaran, keuangan, inventori, serta komunikasi yang lancar
            antara pengajar, murid, dan wali murid.
          </p>
          {/* Button under the paragraph */}
          <div className="flex justify-center mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-[#002244] rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300"
            >
              Pelajari lebih lanjut
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={logo} alt="Overview" className="w-full max-w-2xl" />
        </div>
      </section>

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
