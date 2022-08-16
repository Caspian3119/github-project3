import React from "react";
import TaskList from "./TaskList";

const DoneTasks = (props) => {
  return (
    <div>
      <h1>Done Tasks</h1>
      <TaskList tasks={props.tasks} />
    </div>
  );
};

export default DoneTasks;

