import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li
            key={i}
            onClick={() => toggleTask(i)}
            style={{ textDecoration: t.done ? "line-through" : "none" }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
