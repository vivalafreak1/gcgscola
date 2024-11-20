import React from "react";
import FeatureCard from "./FeatureCard";
import {
  FaUserPlus, // Icon for Penerimaan (Admissions)
  FaBookReader, // Icon for Kesiswaan (Student Affairs)
  FaDollarSign, // Icon for Biaya Pendidikan (Tuition Fees)
  FaCalendarAlt, // Icon for Acara (Events)
  FaComments, // Icon for Komunikasi (Communication)
  FaBook, // Icon for Perpustakaan (Library)
  FaRegMoneyBillAlt, // Icon for Akuntansi (Accounting)
  FaClipboardList, // Icon for Personalia (HR)
  FaBoxes, // Icon for Inventaris (Inventory)
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaUserPlus,
      title: "Penerimaan",
      description:
        "Fitur Penerimaan mempermudah proses admisi dengan pendaftaran online, pengelolaan aplikasi terpusat, dan komunikasi efektif serta memastikan proses yang cepat dan akurat.",
    },
    {
      icon: FaBookReader,
      title: "Kesiswaan",
      description:
        "Fitur Kesiswaan menyediakan solusi komprehensif untuk absensi, rapor, pengaturan kelas dan jadwal, serta penilaian di dalam satu sistem yang mudah diakses dan efisien.",
    },
    {
      icon: FaDollarSign,
      title: "Biaya Pendidikan",
      description:
        "Fitur Biaya Pendidikan menyederhanakan proses penagihan, menyajikan manajemen keuangan yang transparan, efisien, dan efektif.",
    },
    {
      icon: FaCalendarAlt,
      title: "Acara",
      description:
        "Fitur Acara memudahkan perencanaan, pengelolaan, dan pelacakan acara atau kegiatan sekolah dengan mudah dan efisien.",
    },
    {
      icon: FaComments,
      title: "Komunikasi",
      description:
        "Fitur Komunikasi memfasilitasi interaksi antara guru, siswa, dan wali murid dengan sinkronisasi multi-platform yang efektif.",
    },
    {
      icon: FaBook,
      title: "Perpustakaan",
      description:
        "Fitur Perpustakaan memudahkan pengelolaan koleksi buku, peminjaman, dan pengembalian, semuanya dalam sistem yang terintegrasi.",
    },
    {
      icon: FaRegMoneyBillAlt,
      title: "Akuntansi",
      description:
        "Fitur Akuntansi menyederhanakan dan mengotomatisasi proses keuangan di institusi pendidikan Anda, dengan antarmuka yang mudah digunakan.",
    },
    {
      icon: FaClipboardList,
      title: "Personalia",
      description:
        "Fitur Personalia memudahkan pengelolaan karyawan sekolah antara lain: penjadwalan, pelacakan kinerja, penggajian dalam satu platform yang efisien.",
    },
    {
      icon: FaBoxes,
      title: "Inventaris",
      description:
        "Fitur Inventaris memudahkan pengelolaan inventaris antara lain: pengadaan, pelacakan stok, dan lain-lain; dalam satu platform yang efisien.",
    },
  ];

  return (
    <section
      id="fitur"
      className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto max-w-screen-2xl bg-white"
    >
      <h1 className="mb-16 text-5xl font-bold text-center text-black">
        Fitur Utama GCG Scola
      </h1>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-black border-2 border-black rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300"
        >
          Pelajari lebih lanjut
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
