// Coverage.jsx
import React from "react";
import CoverageMap from "./CoverageMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
    const serviceCenters = useLoaderData();
    // console.log(serviceCenters);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        We are available in 64 districts
      </h1>

      {/* Map */}
      <CoverageMap serviceCenters={serviceCenters} />

      {/* Search box will go here later */}
    </div>
  );
};

export default Coverage;
