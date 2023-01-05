import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({
  jobId,
  company_logoUrl,
  company_name,
  role,
  role_time,
  location,
  uploaded_time,
}) => {
  return (
    <Link to={`/job/${jobId}`}>
      <div className="rounded-md shadow-md flex justify-between mb-8">
        <div className="flex space-x-3">
          <div>
            <img src={company_logoUrl} alt="" />
          </div>
          <div className="flex flex-col space-y-3">
            <p>{company_name}</p>
            <p>{role}</p>
            <button>{role_time}</button>
          </div>
        </div>
        <div className="flex justify-between">
          <p>{location}</p>
          <p>{uploaded_time}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
