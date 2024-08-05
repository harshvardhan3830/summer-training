import React from "react";

const ExpenseDate = ({ date }) => {
  return (
    <div className=" h-[5rem] w-[5rem] rounded-md flex flex-col justify-center items-center bg-[#606676] py-4">
      <p className=" font-bold">{new Date(date).getFullYear()}</p>
      <p className=" text-2xl font-bold">{new Date(date).getDay()}</p>
      <p className=" font-semibold">
        {new Date(date).toLocaleString("default", { month: "long" })}
      </p>
    </div>
  );
};

export default ExpenseDate;
