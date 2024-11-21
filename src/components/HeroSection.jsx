import React from "react";
import school from "../assets/school.webp";

const HeroSection = () => {
  return (
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
          ERP Terpadu untuk Pendidikan: Integrasi, Inovasi, dan Inspirasi untuk
          Masa Depan
        </p>
        {/* Button under the paragraph */}
        <div className="flex justify-center mt-8">
          <a
            href="https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
            className="px-8 py-4 text-lg text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Konsultasikan
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
