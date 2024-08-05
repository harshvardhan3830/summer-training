import React, { useState } from "react";
import { ExpensesArray } from "./constants/DummyArray";
import ExpenseDate from "./components/ExpenseDate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import ModalComp from "./components/ModalComp";

const App = () => {
  // const [count, setCount] = useState(0);

  // const handleCountIncrease = () => {
  //   setCount(count + 1);
  //   console.log("value of count is ", count);
  // };

  // console.log("value of count is ", count);

  const [expenses, setExpense] = useState(ExpensesArray);
  const [modelOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: Math.random().toString(),
    title: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleDeleteExpense = (id) => {
    setExpense((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleAddExpense = () => {
    setModalOpen((prev) => !prev);
  };

  const handleClose = () => {
    setExpense((prev) => [...prev, formData]);
    setFormData({
      id: Math.random().toString(),
      title: "",
      description: "",
      amount: "",
      date: "",
    });
    setModalOpen((prev) => !prev);
  };

  return (
    <div className=" bg-[#17153B] text-white px-4 flex flex-col items-center min-h-[100vh]">
      <div className="w-[70%] flex justify-end items-center mt-16 mb-5">
        <button
          onClick={handleAddExpense}
          className="h-10 bg-slate-500 px-5 flex justify-center items-center rounded-md"
        >
          {" "}
          <AddIcon /> Add Expense
        </button>
      </div>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex flex-row w-[70%] justify-between items-center bg-[#2E236C] my-3 px-5 py-2 rounded-md h-24"
        >
          {/* <div>{expense.date}</div> */}
          <ExpenseDate date={expense.date} />
          <div className=" w-[75%]">
            <div className=" text-3xl font-bold">{expense.title}</div>
            <div>{expense.description}</div>
          </div>
          <div className="w-20 text-lg"> ₹ {expense.amount}</div>
          <button onClick={() => handleDeleteExpense(expense.id)}>
            <DeleteForeverIcon sx={{ color: "red" }} />
          </button>
        </div>
      ))}

      {/* Add modal to add expenses */}
      <ModalComp
        modelOpen={modelOpen}
        handleClose={handleClose}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default App;
