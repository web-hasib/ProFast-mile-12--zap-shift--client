import React from 'react';

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service
  return (
    <div className="bg-white/90 shadow-md  flex flex-col items-center gap-3 rounded-2xl p-6  hover:shadow-lg hover:scale-110 hover:bg-[#CAEB66]/30 transition-all duration-300">
      <div className="text-4xl text-secondary  mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-secondary hover:text-shadow-base-100 text-sm italic">{description}</p>
    </div>
  );
};

export default ServiceCard;
