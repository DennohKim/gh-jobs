import React from "react";
import JobCard from "../components/JobCard";
import Search from "../components/Search";
import { jobs } from '../helpers/jobsData'

const LandingPage = () => {
  const jobList = jobs.map((job) => {
    return (
      <JobCard {...jobs}/>
    )
  })
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto ">
        <Search />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 space-x-0 md:space-x-4">
          <div>
            <form action="" className="flex flex-col space-y-3">
              <div>
                <input type="checkbox" name="full time" value="fullTime" />
                <label> Full time</label>
              </div>
              <div className="flex flex-col ">
                <p className="uppercase  tracking-wide font-bold text-gray-500 mb-2">
                  Location
                </p>
                <input
                  className="px-3 py-2 border-2 rounded-md"
                  type="text"
                  name="location"
                  value="location"
                  placeholder="City, state, zip code or country"
                />
              </div>
              <div>
                <input type="radio" name="full time" value="fullTime" />
                <label> London</label>
              </div>
              <div>
                <input type="radio" name="full time" value="fullTime" />
                <label> Amsterdam</label>
              </div>
              <div>
                <input type="radio" name="full time" value="fullTime" />
                <label> New York</label>
              </div>
              <div>
                <input type="radio" name="full time" value="fullTime" />
                <label> Berlin</label>
              </div>
            </form>
          </div>
          <div className="md:col-span-2">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
