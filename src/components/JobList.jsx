import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import JobCard from "./JobCard";
const maxPostPage = 10;

async function fetchJobs(pageNum) {
  const response = await fetch(
    `https://remoteok.com/api/?_limit=10&_page=${pageNum}`
  );

  return response.json();
}

export default function JobList() {
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["jobData", nextPage], () =>
        fetchJobs(nextPage)
      );
    }
  }, [currentPage, queryClient]);

  const { data, isLoading, error } = useQuery(
    ["jobData", currentPage],
    () => fetchJobs(currentPage),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {data.map((job) => {
        return (
          
           <JobCard
            job={job}
            maxPostPage={maxPostPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> 
        );
      })}
      <div className="pages">
          <button
            disabled={currentPage <= 1}
            onClick={() => {
              setCurrentPage((previousValue) => previousValue - 1);
            }}
          >
            Previous page
          </button>
          <span>Page {currentPage}</span>
          <button
            disabled={currentPage >= maxPostPage}
            onClick={() => {
              setCurrentPage((previousValue) => previousValue + 1);
            }}
          >
            Next page
          </button>
        </div>
    </>
  );
}
