import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComp = ({ modelOpen, handleClose, formData, setFormData }) => {
  return (
    <Modal open={modelOpen}>
      <Box sx={style}>
        <p className=" text-2xl font-bold">Add your expense</p>
        <input
          placeholder="Title"
          type="text"
          className=" h-10 border border-2 mt-3 px-3 w-[100%]"
          onChange={(e) => {
            let temp = { ...formData, title: e.target.value };
            setFormData(temp);
          }}
        />
        <input
          placeholder="description"
          type="text"
          className=" h-10 border border-2 mt-3 px-3 w-[100%]"
          onChange={(e) => {
            let temp = { ...formData, description: e.target.value };
            setFormData(temp);
          }}
        />
        <input
          placeholder="Amount"
          type="number"
          className=" h-10 border border-2 mt-3 px-3 w-[100%]"
          onChange={(e) => {
            let temp = { ...formData, amount: e.target.value };
            setFormData(temp);
          }}
        />
        <input
          placeholder="Select Date"
          type="date"
          className=" h-10 border border-2 mt-3 px-3 w-[100%]"
          onChange={(e) => {
            let temp = { ...formData, date: e.target.value };
            setFormData(temp);
          }}
        />

        <button
          onClick={handleClose}
          className="h-10 bg-slate-500 px-5 flex justify-center items-center rounded-md mt-4"
        >
          <p>Submit</p>
        </button>
      </Box>
    </Modal>
  );
};

export default ModalComp;
