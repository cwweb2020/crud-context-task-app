import React, { useEffect, useRef } from "react";
import { TaskConsumer } from "../context/TaskContext";

const DataInput = () => {
  const inputSpace = useRef();
  const { task, getDataFromInput, packDataInput, edit } = TaskConsumer();

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
        <button className="btn btn-primary my-3 w-100">Add</button>
      </form>
    </>
  );
};

export default DataInput;
