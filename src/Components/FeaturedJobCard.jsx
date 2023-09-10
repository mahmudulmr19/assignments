import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const FeaturedJobCard = ({ item }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    work_location_type,
    location,
    employment_type,
    salary,
  } = item;

  return (
    <div className="border border-[#E8E8E8] rounded-lg p-10 shadow-sm text-left">
      <img src={company_logo} alt={company_name} className="h-[39px]" />

      <div className="mt-8 space-y-4">
        <div>
          <h1 className="text-[#474747] font-bold text-xl sm:text-2xl">
            {job_title}
          </h1>
          <p className="text-[#757575] font-semibold sm:text-xl ">
            {company_name}
          </p>
        </div>

        {/* button work_location_type and employment_type*/}
        <div className="flex items-center gap-3 ">
          <button className="px-5 py-2.5 rounded-lg text-gradient font-bold border-[#9873ff] border">
            {work_location_type}
          </button>
          <button className="px-5 py-2.5 rounded-lg text-gradient font-bold border-[#9873ff] border">
            {employment_type}
          </button>
        </div>

        {/* location and salary */}
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
          <span className="flex items-center text-[#757575] gap-1">
            <MapPinIcon className="h-5 text-[#757575]" /> {location}
          </span>
          <span className="flex items-center text-[#757575] gap-1">
            <CurrencyDollarIcon className="h-5 text-[#757575]" />{" "}
            <span className="font-bold">Salary :</span> {salary}
          </span>
        </div>
      </div>

      {/* View Details button */}
      <div className="mt-5">
        <Link
          to={`/job/${id}`}
          className="px-5 py-2.5 rounded btn-gradient text-white font-bold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
