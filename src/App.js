import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataInput from "./components/DataInput";
import TasksView from "./components/TasksView";
import "./style.scss";
import EditForm from "./components/EditForm";
import { TaskConsumer } from "./context/TaskContext";

const App = () => {
  const { edit } = TaskConsumer()
  


  return (
    <>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <h1 className="fs-3 text-capitalize">{edit ? 'edit task' : 'enter task'}</h1>
              {edit ? <EditForm /> : <DataInput />}
              <TasksView />
            </div>
          </div>
        </div>
    </>
  );
};

export default App;
