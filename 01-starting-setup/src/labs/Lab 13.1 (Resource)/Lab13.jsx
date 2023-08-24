import React, { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "../../hooks/useHttp.js";
const URL =
  "https://assignment03-61e91-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json";

const Lab13 = () => {
  const [tasks, setTasks] = useState([]);

  const { sendRequest: fetchTasks, error, isLoading } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks({ url: URL }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};

export default React.memo(Lab13);
