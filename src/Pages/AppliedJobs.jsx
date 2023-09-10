import React, { useEffect, useState } from "react";
import { AppliedJob, Footer, Header, PageTitle } from "../Components";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../utils/store";

const AppliedJobs = () => {
  const [allJobData, setAllJobData] = useState([]);
  const jobsData = useLoaderData();
  const jobsId = getLocalStorageData();

  const appliedJobC = () => {
    let appliedJob = [];
    if (jobsId.length !== 0) {
      for (const id of jobsId) {
        const foundJobApplyied = jobsData.filter((data) => data.id === id);
        for (const job of foundJobApplyied) {
          appliedJob.push(job);
        }
      }
    }

    return appliedJob;
  };

  useEffect(() => {
    const appliedJob = appliedJobC();
    setAllJobData(appliedJob);
  }, []);

  const filterJob = (filterType) => {
    const appliedJob = appliedJobC();
    const foundData = appliedJob.filter(
      (data) => data.work_location_type === filterType
    );
    setAllJobData(foundData);
  };

  return (
    <div>
      <div className="bg-other">
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <Header />
          <PageTitle PageTitle="Applied Jobs" />
        </div>
      </div>

      {/* MAIN CONTENT */}

      {jobsId.length !== 0 ? (
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <AppliedJob appliedJob={allJobData} filterJob={filterJob} />
          {allJobData.length === 0 && (
            <h1 className="text-2xl text-[#1a1919] font-bold">Not Found</h1>
          )}
        </div>
      ) : (
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-[#1a1919] pt-10  ">
            You Have Not Applied For Any Job Yet!
          </h1>
        </div>
      )}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AppliedJobs;
