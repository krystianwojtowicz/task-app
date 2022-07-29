import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.text}, {task.index}
            <button onClick={() => props.delete(task.id)}>usuń</button>
            <button onClick={() => props.edit(task.id)}>edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
