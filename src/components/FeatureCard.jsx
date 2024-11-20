import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 border-2 border-black rounded-lg shadow-md bg-white hover:bg-blue-600 hover:text-white transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-black rounded-full bg-white hover:bg-black transition-colors">
        <Icon className="text-3xl text-black hover:text-white transition-colors" />
      </div>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
