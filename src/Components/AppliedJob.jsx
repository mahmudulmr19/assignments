import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import JobItem from "./JobItem";
const AppliedJob = ({ appliedJob, filterJob }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFilter = (filterType) => {
    setIsOpen(false);
    filterJob(filterType);
  };

  return (
    <div>
      <div className="text-right relative">
        <button
          onClick={toggle}
          className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#F4F4F4] text-[#474747] font-semibold  rounded-lg"
        >
          Filter By <ChevronDownIcon className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-1 text-left bg-[#dcdcdc] py-2 space-y-1 rounded-md">
            <h4
              onClick={() => handleFilter("Remote")}
              className=" pl-6 pr-10 block w-full hover:bg-[#929292] cursor-pointer py-1 text-[#181818] font-medium"
            >
              Remote
            </h4>
            <h4
              onClick={() => handleFilter("Onsite")}
              className=" pl-6 pr-10 block w-full hover:bg-[#929292] cursor-pointer py-1 text-[#181818] font-medium"
            >
              Onsite
            </h4>
          </div>
        )}
      </div>
      <div className="mt-8" />
      {/* content */}
      <div className="flex flex-col gap-5">
        {appliedJob.map((job, index) => (
          <JobItem key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
