import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../component/TaskList';

const EmployeeDashboard = ({ user }) => {
  const { tasks, updateTask } = useContext(TaskContext);

  return (
    <div className="dashboard">
      <h2>Employee Dashboard</h2>
      <TaskList tasks={tasks.filter(task => task.assignedTo === user.username)} updateTask={updateTask} />
    </div>
  );
};

export default EmployeeDashboard;
