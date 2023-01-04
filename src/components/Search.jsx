import React from "react";
import Navbar from "./Navbar";
import { MdWorkOutline } from "react-icons/md";

const Search = () => {
  return (
    <>
      <Navbar />
      <header className="w-full h-48 flex items-center rounded-xl bg-search-bg  bg-no-repeat bg-cover bg-center">
        <form className="w-4/5 mx-auto py-1 rounded-md flex justify-between pl-4 pr-1 bg-white">
          <div className="flex ">
          <MdWorkOutline color="#B9BDCF" className="self-center mr-3"/>
          <input
            className="py-3"
            type="text"
            placeholder="Search"
          />
          </div>
          
          <button className="z-10 bg-primary-color text-white rounded-md px-6">Search</button>
        </form>
      </header>
    </>
  );
};

export default Search;
