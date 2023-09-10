import React, { useEffect } from "react";
import { Footer, Header, PageTitle } from "../Components";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { addToDb } from "../utils/store";

const JobDetails = () => {
  const { id } = useParams();
  const jobdata = useLoaderData();
  let jobs = {};
  const foundJob = jobdata.find((job) => job.id === id);
  if (foundJob) {
    jobs = foundJob;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-other">
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <Header />
          <PageTitle PageTitle="Job Details" />
        </div>
      </div>

      {/* details */}
      <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            {/* job_responsibility and job_description */}
            <div className="space-y-8">
              <h3 className="text-[#757575] leading-7 font-medium">
                <span className="text-[#1A1919] font-extrabold">
                  Job Description:
                </span>{" "}
                {jobs.job_description}
              </h3>

              <h3 className="text-[#757575] leading-7 font-medium">
                <span className="text-[#1A1919] font-extrabold">
                  Job Responsibility:
                </span>{" "}
                {jobs.job_responsibility}
              </h3>
            </div>

            {/* Educational Requirements: */}
            <div className="space-y-1.5 mt-4">
              <h1 className="text-[#1A1919] font-extrabold">
                Educational Requirements:
              </h1>
              <p>{jobs.educational_requirements}</p>
            </div>

            {/* Experiences: Requirements: */}
            <div className="space-y-1.5 mt-4">
              <h1 className="text-[#1A1919] font-extrabold">Experiences:</h1>
              <p>{jobs.experiences}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 col-span-2 ">
            <div className="bg-details rounded-lg p-6">
              <h1 className="text-[#1A1919] font-bold text-xl">Job Details</h1>
              <div className="border border-[#7E90FE]/50 mt-4" />
              <div className="mt-4 space-y-1">
                {/* salary */}
                <div className="flex items-center gap-1.5">
                  <CurrencyDollarIcon className="h-6 w-6 text-[#7E90FE]" />
                  <p className="text-[#757575] font-medium lg:text-lg">
                    <span className="font-bold text-[#474747]">Salary :</span>{" "}
                    {jobs.salary} (Per Month)
                  </p>
                </div>
                {/* job title */}

                <div className="flex items-center gap-1.5">
                  <CalendarDaysIcon className="h-6 w-6 text-[#7E90FE]" />
                  <p className="text-[#757575] font-medium lg:text-lg">
                    <span className="font-bold text-[#474747]">
                      Job Title :
                    </span>{" "}
                    {jobs.job_title}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <h1 className="text-[#1A1919] font-bold text-xl mt-5">
                Contact Information
              </h1>
              <div className="border border-[#7E90FE]/50 mt-5" />
              <div className="mt-4 space-y-1">
                {/* phone */}
                <div className="flex items-center gap-1.5">
                  <PhoneIcon className="h-6 w-6 text-[#7E90FE]" />
                  <p className="text-[#757575] font-medium lg:text-lg">
                    <span className="font-bold text-[#474747]">Phone :</span>{" "}
                    {jobs.contact_information.phone}
                  </p>
                </div>

                {/* email */}
                <div className="flex items-center gap-1.5">
                  <EnvelopeIcon className="h-6 w-6 text-[#7E90FE]" />
                  <p className="text-[#757575] font-medium lg:text-lg">
                    <span className="font-bold text-[#474747]">Email :</span>{" "}
                    {jobs.contact_information.email}
                  </p>
                </div>

                {/* address */}
                <div className="flex items-center gap-1.5">
                  <MapPinIcon className="h-6 w-6 text-[#7E90FE]" />
                  <p className="text-[#757575] font-medium lg:text-lg">
                    <span className="font-bold text-[#474747]">Address :</span>{" "}
                    {jobs.location}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => addToDb(jobs.id)}
              className="py-2.5 rounded-lg text-white btn-gradient font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
