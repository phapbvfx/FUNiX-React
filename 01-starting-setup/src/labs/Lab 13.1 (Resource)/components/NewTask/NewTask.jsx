import useHttp from "../../../../hooks/useHttp.js";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { loading, error, sendRequest: postNewTask } = useHttp();

  const createTask = (taskText, taskData) => {
    // firebase-specific => "name" contains generated id
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    await postNewTask(
      {
        url: "https://assignment03-61e91-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",

        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={loading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
