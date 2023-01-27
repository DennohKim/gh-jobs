import React from "react";
import { relativeDate } from "../helpers/relativeDate";
import { BiWorld, BiTime } from "react-icons/bi";

import { Link } from "react-router-dom";

const JobCard = ({ job, currentPage, setCurrentPage, maxPostPage }) => {
  return (
    <>
      <Link to={`/jobs/${job.id}`}>
        <div className="rounded-md shadow-md flex justify-between mb-8 p-4">
          <div className="flex space-x-3">
            <div>
              <img className="h-24 w-24 object-cover" src={job.logo} alt="" />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-bold text-sm">{job.company}</p>
              <p className=" text-xl">{job.position}</p>
              <div className=""></div>
            </div>
          </div>
          <div className="flex justify-between space-x-5 items-end">
            <div className="flex justify-between align-center items-center space-x-2">
              <BiWorld className="text-gray-500" />
              <p>{job.location}</p>
            </div>
            <div className="flex justify-between align-center items-center space-x-2">
              <BiTime className="text-gray-500" />
              <p>{relativeDate(job.date)}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default JobCard;
