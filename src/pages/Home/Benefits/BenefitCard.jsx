import React from 'react';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card w-full bg-base-200/50 shadow-md  hover:shadow-lg transition-all">
      <div className="card-body flex md:flex-row items-center md:items-start gap-4">
        <img src={image} alt={title} className="w-40 md:w-50 lg:w-70 h-40 md:h-50 lg:h-70 object-contain" />
        <div className="divider divider-horizontal  my-0" />
        <div>
          <h3 className="card-title text-base-content text-lg mb-2">{title}</h3>
          <p className="text-sm text-base-content/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
