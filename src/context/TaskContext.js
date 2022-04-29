import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TaskConsumer = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const localStoreData = localStorage.getItem("tasks");
  const [ edit, setEdit ] = useState(false);
  const [tasks, setTasks] = useState(
    localStoreData ? JSON.parse(localStoreData) : []
  );
  const [ currentTask, setCurrentTask ] = useState({
    id: "",
    taskName: "",
    completed: false,
  });
  const [task, setTask] = useState({
    id: "",
    taskName: "",
    completed: false,
  });

  // get task
  const getDataFromInput = (value) => {
    setTask({
      ...task,
      taskName: value,
      id: uuid(),
    });
  };

  // add task to array
  const packDataInput = (task) => {
    setTasks([...tasks, task]);
    //  localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // add to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // console.log('effect');
  }, [tasks]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

    // edit task
    const editTask = (task) => {
       
        setEdit(true);
        setCurrentTask(task);
       // console.log(currentTask);
    }

    // edit task definitely
    const editTaskDefinitely = (task) => {
        setEdit(false);
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    }

    // change edit boolean
    const changeEdit = () => {
        setEdit(false);
    }

    const completed = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
        console.log(tasks)
    }

  return (
    <TaskContext.Provider
      value={{
        // value is an object
        tasks,
        setTasks,
        task,
        setTask,
        edit,
        currentTask,
        getDataFromInput,
        packDataInput,
        deleteTask,
        editTask,
        changeEdit,
        completed,
        editTaskDefinitely,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;
