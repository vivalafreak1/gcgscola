import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 border-2 border-black rounded-lg shadow-md bg-white hover:scale-105 transition-transform">
      <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-black rounded-full">
        <Icon className="text-3xl text-black" />
      </div>
      <h2 className="mb-2 text-xl font-semibold text-black">{title}</h2>
      <p className="text-center text-black">{description}</p>
    </div>
  );
};

export default FeatureCard;
