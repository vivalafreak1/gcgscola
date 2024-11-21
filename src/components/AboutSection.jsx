import React from "react";
import logo from "../assets/logo.webp";

const AboutSection = () => {
  return (
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
          pembelajaran, keuangan, inventori, serta komunikasi yang lancar antara
          pengajar, murid, dan wali murid.
        </p>
        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-white bg-[#FF4500] rounded-lg shadow-lg hover:bg-[#FF5722] focus:outline-none transition-colors duration-300 transform hover:scale-105"
          >
            Konsultasikan Sekarang
          </a>
        </div>
      </div>

      {/* Image Column */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img src={logo} alt="Overview" className="w-full max-w-2xl" />
      </div>
    </section>
  );
};

export default AboutSection;
