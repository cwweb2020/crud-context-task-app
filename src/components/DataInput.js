import React, { useEffect, useRef } from "react";
import { TaskConsumer } from "../context/TaskContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const DataInput = () => {
  const inputSpace = useRef();
  const { task, getDataFromInput, packDataInput } = TaskConsumer();

  const handleData = (e) => {
    let value = e.target.value;
    getDataFromInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    packDataInput(task);
    e.target.reset();
  };

  useEffect(() => {
    inputSpace.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputSpace}
          placeholder="Enter your task"
          className="form-control"
          onChange={handleData}
        />
        <Button type="submit" className="btn btn-primary my-3 w-100" variant="contained">Add</Button>
        {/* <button className="btn btn-primary my-3 w-100">Add</button> */}
      </form>
    </>
  );
};

export default DataInput;
