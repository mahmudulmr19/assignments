import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJob = () => {
  const [displayCount, setDisplayCount] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const data = useLoaderData();

  const showAllJob = () => {
    setShowAll(true);
    setDisplayCount(data.length);
  };

  const showLessAllJob = () => {
    setShowAll(false);
    setDisplayCount(4);
  };

  return (
    <div className="mt-14">
      <div className="text-center space-y-3">
        <h1 className="text-[#1A1919] font-bold text-3xl lg:text-4xl">
          Featured Jobs
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      {/* Featured Jobs  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {data.slice(0, displayCount).map((item) => (
          <FeaturedJobCard key={item.id} item={item} />
        ))}
      </div>

      {/* show all feature job */}
      <div className="text-center mt-12">
        <button
          onClick={showAll ? showLessAllJob : showAllJob}
          className="btn-gradient px-5 py-2.5 rounded-lg text-white font-bold"
        >
          {showAll ? "See Less" : "See All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
