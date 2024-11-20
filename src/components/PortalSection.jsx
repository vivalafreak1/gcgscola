import React from "react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUserTie,
  FaUsersCog,
  FaBookOpen,
} from "react-icons/fa";

const PortalSection = () => {
  const portals = [
    {
      icon: <FaChalkboardTeacher size={32} />,
      title: "Manajemen Sekolah",
      description:
        "Memonitor semua kegiatan sekolah mulai dari proses pembelajaran sampai administrasi di dalam aplikasi dengan mudah dan menyeluruh.",
    },
    {
      icon: <FaUserGraduate size={32} />,
      title: "Murid",
      description:
        "Dapat dengan mudah melihat jadwal dan aktivitas sekolah meliputi: pembelajaran formal hingga kegiatan informal yang diikuti murid.",
    },
    {
      icon: <FaUserTie size={32} />,
      title: "Staf Akademis",
      description:
        "Mempermudah pengajar untuk melihat jadwal, informasi, pengaturan rencana belajar dan berinteraksi dengan wali murid.",
    },
    {
      icon: <FaUsersCog size={32} />,
      title: "Wali Murid",
      description:
        "Wali Murid mampu mengetahui kegiatan anak di sekolah; berdiskusi dengan intensif bersama pengajar sekaligus menjalin komunikasi secara privat; serta berkolaborasi dalam pengembangan anak.",
    },
    {
      icon: <FaBookOpen size={32} />,
      title: "Staf Non-Akademis",
      description:
        "Mengakses sistem sesuai peran dan tanggung jawab masing-masing.",
    },
  ];

  return (
    <div className="bg-blue-950">
      <section
        id="portal"
        className="flex flex-col items-center justify-center max-w-screen-md min-h-screen p-8 mx-auto"
      >
        <h1 className="mt-8 mb-16 text-4xl font-bold text-center text-white">
          Portal Pengguna
        </h1>
        <div className="relative flex flex-col items-center w-full max-w-lg gap-8">
          {portals.map((portal, index) => (
            <div key={index} className="flex items-start w-full">
              {/* Icon and Progress Line Container */}
              <div className="flex flex-col items-center justify-center w-16">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-blue-500 rounded-full">
                  {portal.icon}
                </div>

                {/* Progress Line */}
                {index !== portals.length - 1 && (
                  <div
                    className="w-1 mt-4 bg-blue-500"
                    style={{ height: "100px" }} // Adjust the height as needed
                  ></div>
                )}
              </div>

              {/* Text Content */}
              <div className="ml-6 max-w-[20rem]">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {portal.title}
                </h3>
                <p className="text-sm text-gray-300">{portal.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Consult Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20GCG%20Scola"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white transition-colors duration-300 border-2 border-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Pelajari lebih lanjut
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortalSection;
