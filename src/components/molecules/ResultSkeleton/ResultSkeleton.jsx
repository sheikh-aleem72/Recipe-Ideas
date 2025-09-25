import React from "react";

const ResultsSkeleton = () => {
  return (
    <div className="min-h-screen bg-brand-background text-gray-800 animate-pulse">
      {/* Results Title */}
      <div className="text-center py-8">
        <div className="h-8 w-72 mx-auto bg-brand-green-light rounded mb-4"></div>
        <div className="h-4 w-48 mx-auto bg-brand-green-light rounded"></div>
      </div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="bg-[#cff2d6] rounded-xl shadow-md p-3">
            <div className="w-full h-40 bg-brand-green-light rounded-lg"></div>
            <div className="mt-3 h-5 w-3/4 mx-auto bg-brand-green-light rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSkeleton;
