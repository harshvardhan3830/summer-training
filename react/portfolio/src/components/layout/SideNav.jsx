import React from "react";
import Image from "../../assets/5908.jpg";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className=" w-[14%] bg-[#bd5d38] flex flex-col justify-center items-center">
      <img
        src={Image}
        alt="hero image"
        className=" h-52 w-52 rounded-full border-8 border-[#ca7d60]"
      />
      <nav>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
      </nav>
    </div>
  );
};

export default SideNav;
