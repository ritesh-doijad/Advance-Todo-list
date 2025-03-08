import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";

import { toggleCompletion, toggleImportance } from "../redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks ?? []);
 
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowSidebar(true);
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="relative flex">
      <div className="flex-1">
        {/* Pending Tasks */}
        {pendingTasks.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Pending Tasks</h2>
            {pendingTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onClick={() => handleTaskClick(task)}
                toggleTaskCompletion={() => dispatch(toggleCompletion(task.id))}
                toggleTaskImportance={() => dispatch(toggleImportance(task.id))}
              />
            ))}
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Completed Tasks</h2>
            {completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onClick={() => handleTaskClick(task)}
                toggleTaskCompletion={() => dispatch(toggleCompletion(task.id))}
                toggleTaskImportance={() => dispatch(toggleImportance(task.id))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
