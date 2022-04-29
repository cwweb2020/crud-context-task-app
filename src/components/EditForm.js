import React, { useState } from "react";
import { TaskConsumer } from "../context/TaskContext";

const DataInput = () => {
  const { changeEdit, currentTask, editTaskDefinitely } = TaskConsumer();
  const [task, setTask] = useState(currentTask)

  const handleChange = (e) => {
    let value = e.target.value;
    setTask({
      ...currentTask,
      taskName: value,
    })
   // console.log("updated ",updatedTask);
  }


  const handleSubmit = (e, newTask) => {
     e.preventDefault();
    
  }
  
  const handleEdit = () => {
    changeEdit()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          className="form-control"
          onChange={ handleChange }
          value={task.taskName}
        />
        <div className="btn-cont">
          <button 
            type="submit"
            className="btn btn-primary my-3 edit"
            onClick={()=> editTaskDefinitely(task)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 cancel"
            style={{ backgroundColor: "red" }}
            onClick={() => handleEdit()}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default DataInput;
