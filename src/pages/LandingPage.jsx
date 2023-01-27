import React from "react";
// import JobCard from "../components/JobCard";
import JobList from "../components/JobList";
import Search from "../components/Search";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto ">
        <Search />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-4">
          <div>
            <form onSubmit={() => {}} className="flex flex-col space-y-3">
              <div>
                <input onChange={()=> {}} type="checkbox" name="full time" value="fullTime" />
                <label> Full time</label>
              </div>
              <div className="flex flex-col ">
                <p className="uppercase  tracking-wide font-bold text-gray-500 mb-2">
                  Location
                </p>
                <input
                onChange={()=> {}} 
                  className="px-3 py-2 border-2 rounded-md"
                  type="text"
                  name="location"
                  value="location"
                  placeholder="City, state, zip code or country"
                />
              </div>
              <div>
                <input onChange={()=> {}}  type="radio" name="full time" value="fullTime" />
                <label> London</label>
              </div>
              <div>
                <input onChange={()=> {}}  type="radio" name="full time" value="fullTime" />
                <label> Amsterdam</label>
              </div>
              <div>
                <input onChange={()=> {}}  type="radio" name="full time" value="fullTime" />
                <label> New York</label>
              </div>
              <div>
                <input onChange={()=> {}}  type="radio" name="full time" value="fullTime" />
                <label> Berlin</label>
              </div>
            </form>
          </div>
          <div className="md:col-span-2">
            <JobList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
