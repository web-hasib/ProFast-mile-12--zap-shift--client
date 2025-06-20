import React from "react";
import { FaTruck, FaMoneyBillAlt, FaWarehouse, FaBuilding } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaTruck className="text-4xl text-teal-700" />,
    },
    {
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaMoneyBillAlt className="text-4xl text-teal-700" />,
    },
    {
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaWarehouse className="text-4xl text-teal-700" />,
    },
    {
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaBuilding className="text-4xl text-teal-700" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 bg-base-100">
      <h2 className="text-3xl font-bold text-teal-800 mb-8">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-base-200 rounded-2xl py-8 px-4 shadow-md flex flex-col  items-center text-center transform transition-all duration-300 ease-in-out animate-fade-in ${index % 2 === 0 ? "delay-0" : "delay-200"} hover:shadow-lg hover:scale-105 hover:text-teal-800`}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;