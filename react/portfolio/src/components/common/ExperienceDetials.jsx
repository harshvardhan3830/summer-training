import React from "react";

const ExperienceDetials = ({ title, description, company, dates }) => {
  return (
    <div className=" flex w-full gap-6 mt-8">
      <div className="w-3/4 ">
        <p className=" text-2xl font-semibold">{title}</p>
        <p className="text-xl font-semibold text-slate-500">{company}</p>
        <p className="text-slate-500">{description}</p>
      </div>
      <div className="w-1/4 text-right text-[#cc6238]">{dates}</div>
    </div>
  );
};

export default ExperienceDetials;
