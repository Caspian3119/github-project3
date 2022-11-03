import React from "react";
import { useParams } from "react-router";
import Task from "./Task";

const TaskPage = ({ tasks, completeTask , editClick, deleteClick}) => {
  const { status } = useParams();
  let filter = status.toLowerCase() === "done" ? "Done" : "Pending";

  return (
    <div>
      {(tasks
        .filter((task) => task.status === filter)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.status}
            completeTask={completeTask}
            editClick = {editClick}
            deleteClick = {deleteClick}
          />
        )))}
    </div>
  );
};

export default TaskPage;

