import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { Bell, Repeat, Calendar } from "lucide-react";

function TaskForm() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    dispatch(addTask(taskText));
    setTaskText(""); // Clear input after adding task
  };

  return (
    <form onSubmit={handleAddTask} className="mb-6 bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Add a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-400" />
        </button>
        <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
          <Repeat className="h-5 w-5 text-gray-400" />
        </button>
        <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
          <Calendar className="h-5 w-5 text-gray-400" />
        </button>
        <button type="submit" className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
