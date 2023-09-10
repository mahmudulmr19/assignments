import { toast } from "react-hot-toast";
const addToDb = (id) => {
  let applyJob = [];
  let applyedJob = localStorage.getItem("applyed-job");
  if (applyedJob) {
    const parseApplyedJob = JSON.parse(applyedJob);
    if (parseApplyedJob.find((jobId) => jobId === id)) {
      toast.error("This job is already applied");
      return;
    }
    parseApplyedJob.push(id);
    applyJob = parseApplyedJob;
    toast.success("Job has been applied successfully");
  } else {
    applyJob.push(id);
    toast.success("Job has been applied successfully");
  }

  localStorage.setItem("applyed-job", JSON.stringify(applyJob));
};

const getLocalStorageData = () => {
  let applyJob = [];
  let applyedJob = localStorage.getItem("applyed-job");
  if (applyedJob) {
    applyJob = JSON.parse(applyedJob);
  }
  return applyJob;
};

export { addToDb, getLocalStorageData };
