import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList.jsx";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput.jsx";

import "./style.css";

const Lab05 = () => {
  const [courseGoals, setCourseGoals] = useState([
    {
      text: "Do all exercises!",
      id: "g1",
    },
    {
      text: "Finish the course!",
      id: "g2",
    },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p
      style={{
        textAlign: "center",
      }}
    >
      {" "}
      No goals found.Maybe add one ?{" "}
    </p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList
        items={courseGoals}
        onDeleteItem={deleteItemHandler}
      />
    );
  }

  return (
    <div className="container">
      <div className="inner">
        <h2 style={{ textAlign: "center" }}>Lab 05</h2>
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler} />{" "}
        </section>
        <section id="goals"> {content} </section>
      </div>
    </div>
  );
};

export default Lab05;
