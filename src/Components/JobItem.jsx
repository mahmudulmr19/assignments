import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const JobItem = ({ job }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 border border-[#E8E8E8] rounded-lg shadow-sm">
      <div className="flex items-center flex-col mr-auto lg:m-0 lg:flex-row gap-6">
        <div className="mr-auto lg:bg-[#F4F4F4] lg:px-8 lg:py-12 rounded-lg ">
          <img src={job.company_logo} alt={job.company_name} />
        </div>
        <div className="space-y-3">
          <div>
            <h2 className="text-[#474747] font-extrabold text-lg lg:text-xl">
              {job.job_title}
            </h2>
            <h4 className="text-[#757575] font-semibold lg:text-lg">
              {job.company_name}
            </h4>
          </div>
          {/* button work_location_type and employment_type*/}
          <div className="flex items-center gap-3 ">
            <button className="px-5 py-2.5 rounded-lg text-gradient font-bold border-[#9873ff] border">
              {job.work_location_type}
            </button>
            <button className="px-5 py-2.5 rounded-lg text-gradient font-bold border-[#9873ff] border">
              {job.employment_type}
            </button>
          </div>

          {/* location and salary */}
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
            <span className="flex items-center text-[#757575] gap-1">
              <MapPinIcon className="h-5 text-[#757575]" /> {job.location}
            </span>
            <span className="flex items-center text-[#757575] gap-1">
              <CurrencyDollarIcon className="h-5 text-[#757575]" />{" "}
              <span className="font-bold">Salary :</span> {job.salary}
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <Link
        to={`/job/${job.id}`}
        className="px-5 py-2.5 w-full lg:w-auto rounded btn-gradient text-white font-bold mt-3 lg:mt-0 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobItem;
