import React from "react";
import TaskList from "./TaskList";

const PendingTasks = (props) => {
  return (
    <div>
      <h1>Pending Tasks</h1>s
      <TaskList tasks={props.tasks} completeTask={props.completeTask} />
    </div>
  );
};

export default PendingTasks;
