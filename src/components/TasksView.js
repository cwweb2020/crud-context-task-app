import React, {  } from "react";
import { TaskConsumer } from "../context/TaskContext";
import { ImBin2 } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const TasksView = () => {
 
  const { tasks, deleteTask, editTask, completed } = TaskConsumer();

 

  const handleDelete = (id) => {
    // console.log(id);
    deleteTask(id);
  };

  const handleEdit = (task) => {
     editTask(task);
  };

  const handleDone = (id) => {
    completed(id);
  }

  return (
    <>
      <section className="py-4 seccion-total">
        <div className="wrapper">
        <h2 className="fs-4 text-capitalize my-3">task list</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} style={{color: task.completed ? 'green' : '', fontStyle: task.completed && 'italic' }}>
                <div className="li-div">
                  <span></span>
                  {task.taskName}
                </div>
                <div>
                <BsCheckLg onClick={() => handleDone(task.id)} style={{ cursor: "pointer", color: task.completed ? 'green' : "black" }} />
                  &nbsp;
                  <FaEdit
                    style={{ cursor: "pointer", color: "black" }}
                    onClick={() => handleEdit(task)}
                  />
                  &nbsp;
                  <ImBin2
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TasksView;
