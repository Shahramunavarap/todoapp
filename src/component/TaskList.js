import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, isAdmin }) => {
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { urgent: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="task-list">
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default TaskList;
