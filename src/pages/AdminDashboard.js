import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../component/TaskList';

const AdminDashboard = () => {
  const { tasks, addTask, updateTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState({
    description: '',
    deadline: '',
    priority: 'low',
    assignedTo: ''
  });

  const handleAddTask = () => {
    const task = { id: Date.now(), ...newTask, status: 'pending' };
    addTask(task);
    setNewTask({ description: '', deadline: '', priority: 'low', assignedTo: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="add-task">
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Task Description"
        />
        <input
          type="date"
          name="deadline"
          value={newTask.deadline}
          onChange={handleInputChange}
        />
        <select name="priority" value={newTask.priority} onChange={handleInputChange}>
          <option value="urgent">Urgent</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select name="assignedTo" value={newTask.assignedTo} onChange={handleInputChange}>
          <option value="">Assign To</option>
          <option value="employee1">Employee 1</option>
          <option value="employee2">Employee 2</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} updateTask={updateTask} isAdmin />
    </div>
  );
};

export default AdminDashboard;
