import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task, isAdmin }) => {
  const { updateTask } = useContext(TaskContext);
  const [taskState, setTaskState] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedTask = { ...taskState, [name]: value };
    setTaskState(updatedTask);
    updateTask(updatedTask);
  };

  return (
    <div className={`task-item ${taskState.priority}`}>
      <input
        type="text"
        name="description"
        value={taskState.description}
        onChange={handleChange}
        disabled={!isAdmin}
      />
      <input
        type="date"
        name="deadline"
        value={taskState.deadline}
        onChange={handleChange}
        disabled={!isAdmin}
      />
      <select
        name="status"
        value={taskState.status}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select
        name="priority"
        value={taskState.priority}
        onChange={handleChange}
        disabled={!isAdmin}
      >
        <option value="urgent">Urgent</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default TaskItem;
