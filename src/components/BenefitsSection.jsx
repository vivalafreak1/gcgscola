import React, { useState } from "react";
import {
  FaRegHandshake,
  FaCloud,
  FaRegClock,
  FaFileAlt,
  FaPlus,
} from "react-icons/fa";

const BenefitsSection = () => {
  // State to control which card is clicked
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: <FaRegHandshake size={24} />,
      title: "Kemudahan dalam Integrasi",
      description:
        "Menggabungkan berbagai aspek manajemen sekolah seperti akademis, keuangan, sumber daya manusia, dan komunikasi dalam satu platform yang mudah digunakan.",
    },
    {
      id: 2,
      icon: <FaCloud size={24} />,
      title: "Akses Dimana Saja",
      description:
        "GCG Scola menawarkan kemudahan akses 'everytime, everywhere', memberikan fleksibilitas dan kenyamanan tanpa tandingan bagi penggunanya. Selain itu, sistem ini dapat diakses melalui berbagai perangkat, seperti desktop, tablet, dan smartphone berbasis Android maupun iOS.",
    },
    {
      id: 3,
      icon: <FaRegClock size={24} />,
      title: "Menghemat Waktu dan Biaya",
      description:
        "GCG Scola membantu institusi pendidikan menghemat waktu dan biaya dengan mengotomatisasi proses administrasi dan manajemen. Sistem ini mengurangi beban kerja manual, mempercepat pengambilan keputusan, dan menurunkan biaya operasional berkat efisiensi yang ditawarkan oleh sistem",
    },
    {
      id: 4,
      icon: <FaFileAlt size={24} />,
      title: "Laporan Mudah dan Akurat",
      description:
        "GCG Scola menyediakan laporan yang akurat dan mudah dipahami, mulai dari laporan keuangan, analisis pembelajaran, hingga data inventori. Dengan akurasi tinggi, sistem ini meminimalkan risiko kesalahan. Antarmuka yang memudahkan bahkan oleh pengguna tanpa latar belakang keuangan.",
    },
  ];

  return (
    <div className="bg-blue-950">
      <section
        id="keunggulan"
        className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto max-w-screen-2xl"
      >
        <h2 className="mb-4 text-3xl font-bold text-center text-white">
          Keunggulan GCG Scola
        </h2>
        <p className="mb-12 text-center text-white">
          Nikmati akses keunggulan kami untuk solusi dalam meningkatkan
          efisiensi sekolah anda.
        </p>
        <div className="flex flex-col items-center gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col justify-between w-full sm:w-[500px] lg:w-[600px] p-6 border bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() =>
                setSelectedBenefit(
                  selectedBenefit === benefit.id ? null : benefit.id
                )
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedBenefit === benefit.id
                        ? "max-h-[200px] ease-in-out"
                        : "max-h-0 ease-in-out"
                    }`}
                  >
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
                <div
                  className={`text-xl text-gray-500 transition-transform duration-500 ${
                    selectedBenefit === benefit.id ? "rotate-45" : ""
                  }`}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consult Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=6283856566126&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none transition-colors duration-300"
          >
            Pelajari lebih lanjut
          </a>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
