import React from "react";
import { Link } from "react-router-dom";




const Sidenav = () => {

   

  return (
    <div className="w-[20%] h-full p-8  border-r-[1px] border-white flex flex-col gap-7">
      <h1 className="text-2xl font-semibold ">Film Inventory</h1>
      <nav className="">
        <nav className="flex flex-col gap-2 mt-4 ">
<h1 className="text-xl font-semibold ">News Feeds </h1>
          <Link to="/trending" className="text-xl  flex gap-2 p-3 pr-25 w-full  rounded-lg hover:bg-zinc-700 hover:text-white duration-300  text-zinc-300 ">
          <i class="ri-fire-fill"></i>Trending</Link>
          <Link to="/popular" className="text-xl   flex gap-2 p-3 pr-25 w-full  rounded-lg hover:bg-zinc-700 hover:text-white duration-300  text-zinc-300 ">
          <i  class="ri-star-half-fill"></i>Popular</Link>
          <Link to="/movies" className="text-xl   flex gap-2 p-3 pr-25 w-full  rounded-lg hover:bg-zinc-700 hover:text-white duration-300  text-zinc-300 ">
          <i class="ri-slideshow-4-fill"></i>Movie</Link>
          <Link to="/people" className="text-xl   flex gap-2 p-3 pr-25 w-full  rounded-lg hover:bg-zinc-700 hover:text-white duration-300  text-zinc-300 ">
          <i class="ri-team-fill"></i>People</Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-500" />
        <nav className="flex flex-col gap-2 mt-4 ">
        <h1 className="text-xl font-semibold ">Infomation </h1>
          <Link to="/about" className="text-xl  flex gap-2 p-3 pr-25 w-full  rounded-lg hover:bg-zinc-700 hover:text-white duration-300  text-zinc-300 ">
          <i class="ri-information-2-fill"></i>About</Link>
          <Link className="text-xl   flex gap-2 p-3 pr-25 w-full  rounded-lg hover:bg-zinc-700 hover:text-white duration-300  text-zinc-300 ">
          <i class="ri-phone-fill"></i>Contact</Link>
          
        </nav>
      </nav>    
    </div>
  );
};

export default Sidenav;
