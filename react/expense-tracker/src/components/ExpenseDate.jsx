import React from "react";

const ExpenseDate = ({ date }) => {
  return (
    <div className=" h-[5rem] w-[5rem] border rounded-md flex flex-col justify-center items-center border-slate-600">
      <p>{new Date(date).getFullYear()}</p>
      <p>{new Date(date).getDay()}</p>
      <p>{new Date(date).toLocaleString("default", { month: "long" })}</p>
    </div>
  );
};

export default ExpenseDate;
