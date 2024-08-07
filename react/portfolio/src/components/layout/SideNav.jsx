import React, { useState } from "react";
import Image from "../../assets/5908.jpg";
import { Link, useLocation } from "react-router-dom";


const SideNav = () => {
  const [location, setLocation] = useState(useLocation());
  return (
    <div className=" w-[14%] bg-[#bd5d38] flex flex-col justify-center items-center">
      <img
        src={Image}
        alt="hero image"
        className=" h-52 w-52 rounded-full border-8 border-[#ca7d60]"
      />
      <nav className="flex flex-col gap-3 mt-6 list-none justify-center items-center text-[#eed4ba] uppercase font-semibold text-lg">
        <li className={location?.pathname === "/" ? " text-white" : null}>
          <Link to="/">About</Link>
        </li>
        <li
          className={
            location?.pathname === "/experience" ? " text-white" : null
          }
        >
          <Link to="/experience">Experience</Link>
        </li>
        <li
          className={location?.pathname === "/education" ? " text-white" : null}
        >
          <Link to="/education">Education</Link>
        </li>
        <li
          className={location?.pathname === "/skills" ? " text-white" : null}
        >
          <Link to="/skills">Skills</Link>
        </li>
      </nav>
    </div>
  );
};

export default SideNav;
