import React, { useState } from "react";
import { ExpensesArray } from "./constants/DummyArray";
import ExpenseDate from "./components/ExpenseDate";

const App = () => {
  // const [count, setCount] = useState(0);

  // const handleCountIncrease = () => {
  //   setCount(count + 1);
  //   console.log("value of count is ", count);
  // };

  // console.log("value of count is ", count);

  const [expenses, setExpense] = useState(ExpensesArray);

  console.log(expenses);
  return (
    <div className=" bg-[#C9DABF] text-white px-4 flex flex-col items-center">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex flex-row w-[70%] justify-between items-center bg-[#5F6F65] my-3 px-5 py-2 rounded-md h-24"
        >
          {/* <div>{expense.date}</div> */}
          <ExpenseDate date={expense.date} />
          <div>
            <div>{expense.title}</div>
            <div>{expense.description}</div>
          </div>
          <div>{expense.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
