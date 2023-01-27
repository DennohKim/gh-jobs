import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import JobHeader from "../components/JobHeader";

function useJobsData(jobId) {
  return useQuery(["jobs", jobId], async () => {
    const res = await fetch(`https://remoteok.com/api/${jobId}`, {
      mode: "no-cors",
    });
    return await res.json();
  });
}

const JobPage = () => {
  const { id } = useParams();
  const jobsQuery = useJobsData(id);

  return (
    <div className="">
      {jobsQuery.isLoading ? (
        <p>Loading Job...</p>
      ) : (
        <>
          <JobHeader {...jobsQuery.data} />
        </>
      )}

      {/* <p>{company}</p> */}
    </div>
  );
};

export default JobPage;
