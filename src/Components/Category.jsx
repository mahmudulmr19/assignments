import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("categoryList.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-14">
      <div className="text-center space-y-3">
        <h1 className="text-[#1A1919] font-bold text-3xl lg:text-4xl">
          Job Category List
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* category list item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {data.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
