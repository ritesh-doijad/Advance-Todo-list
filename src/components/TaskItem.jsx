import React from "react";
import { useDispatch } from "react-redux";
import { Star } from "lucide-react";
import { setSelectedTask } from "../redux/uiSlice";

function TaskItem({ task, toggleTaskCompletion, toggleTaskImportance }) {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center gap-3 bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
      onClick={() => dispatch(setSelectedTask(task))} // Open sidebar on click
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          e.stopPropagation();
          toggleTaskCompletion(task.id);
        }}
        className="h-5 w-5 rounded border-gray-300"
      />
      <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}>
        {task.text}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTaskImportance(task.id);
        }}
        className={`p-1 rounded-full ${task.important ? "text-yellow-500" : "text-gray-400"}`}
      >
        <Star className="h-5 w-5" fill={task.important ? "currentColor" : "none"} />
      </button>
    </div>
  );
}

export default TaskItem;
