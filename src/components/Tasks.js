import React from "react";
import { Checkbox } from "./Checkbox";

export const Tasks = () => {
  const tasks = [];
  let projectName = "";
  return (
    <div className="tasks" data-testid="tasks">
      <h2>{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
