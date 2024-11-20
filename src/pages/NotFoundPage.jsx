import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="ml-4 text-4xl font-bold">Halaman Tidak Ditemukan</p>
      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFoundPage;
