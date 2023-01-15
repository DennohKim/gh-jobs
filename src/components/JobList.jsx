import { useQuery } from "react-query";


async function fetchJobs (){
  const response = await fetch('https://remoteok.com/api')

  return response.json();

}

  


export default function JobList() {
  const { data, isLoading, error } = useQuery("jobData", () => fetchJobs());

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {data.map((job) => {
        return <p key={job.id}>{job.company}</p>;
      })}
    </>
  );
}


