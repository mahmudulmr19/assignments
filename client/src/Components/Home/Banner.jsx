import React from "react";
import BannerChef from "../../assets/Home/banner-chef2.png";
const Banner = () => {
  return (
    <div className="bg-pink-100 px-3 rounded-sm py-4">
      <div className="flex flex-col lg:flex-row lg:items-center px-4 py-2 justify-between gap-5">
        <div className="space-y-4">
          <button className="bg-pink-200 px-3 py-2 rounded-full text-pink-500">
            More Then Faster
          </button>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Be The Fastest <br /> In Delivering <br /> Your{" "}
            <span className="text-pink-500">Food</span>
          </h1>
          <p className="max-w-md">
            Discover the Art of Cooking with Cuisine Master. Join us to explore
            new flavors, techniques, and elevate your cooking game today!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 transition-all text-white rounded-full px-6 py-2">
            Explore Now
          </button>
        </div>
        <div>
          <img
            src={BannerChef}
            alt="a chef his hand have a food palate"
            className="h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
