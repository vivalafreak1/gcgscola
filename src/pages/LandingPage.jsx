import React from "react";
import school from "../assets/school.webp";
import logo from "../assets/logo.webp";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";

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
        <div className="relative z-10 w-full max-w-screen-lg text-center p-6 rounded-lg">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl leading-tight">
            Welcome to <span className="text-[#1A6B9E]">GCG</span>{" "}
            <span className="text-[#33c9e3]">Scola</span>
          </h1>
          <p className="text-xl text-gray-200 md:text-2xl mb-8 leading-relaxed">
            ERP Terpadu untuk Pendidikan: Integrasi, Inovasi, dan Inspirasi
            untuk Masa Depan
          </p>
          {/* Button under the paragraph */}
          <div className="flex justify-center mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
              className="px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition-colors duration-300 text-lg"
            >
              Pelajari lebih lanjut
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="tentang"
        className="flex flex-col items-center justify-center min-h-screen p-8 bg-center bg-cover md:flex-row-reverse pt-24"
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
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={logo} alt="Overview" className="w-full max-w-2xl" />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-900">Contact Us</h2>
        <p className="mt-4 text-gray-700">
          Have questions? Feel free to reach out to us.
        </p>
        <form className="max-w-md mx-auto mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
