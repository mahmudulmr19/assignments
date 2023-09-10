import React from "react";

const CategoryItem = ({ item }) => {
  const { logo, name, availableJobs } = item;
  return (
    <div className="bg-category rounded-lg p-10">
      <img src={logo} alt={name} className="bg-category-item p-4 rounded-lg" />
      <div className="mt-5">
        <h1 className="text-[#474747] font-extrabold text-lg lg:text-xl">
          {name}
        </h1>
        <p className="text-[#A3A3A3] font-medium mt-1">{availableJobs}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
