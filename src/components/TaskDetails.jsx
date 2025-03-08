import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../redux/uiSlice"; // Ensure the correct path
import { X, Bell, Repeat, Plus, Trash2, Calendar } from "lucide-react";

function TaskDetails({ task }) {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("Normal");
  const [dueDate, setDueDate] = useState("");

  return (
    <aside className="w-80 bg-white p-6 z-10 rounded-2xl shadow-lg h-full fixed right-0 top-0 border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Task Details</h2>
        <button
          onClick={() => dispatch(closeSidebar())} // Redux action to close
          className="p-2 hover:bg-gray-200 rounded-full transition"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      <div className="space-y-5 flex-1 overflow-y-auto">
        {/* Task Name */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-5 w-5" />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-300"
            value={task?.text}
            readOnly
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Due Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-300"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        {/* Reminder */}
        <button className="flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg w-full transition">
          <Bell className="h-5 w-5 text-blue-500" />
          <span>Set Reminder</span>
        </button>

        {/* Add Step */}
        <button className="flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg w-full transition">
          <Plus className="h-5 w-5 text-gray-500" />
          <span>Add Step</span>
        </button>

        {/* Repeat */}
        <button className="flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg w-full transition">
          <Repeat className="h-5 w-5 text-green-500" />
          <span>Repeat</span>
        </button>

        {/* Priority Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Priority</label>
          <div className="flex gap-2">
            {["Low", "Normal", "High"].map((level) => (
              <button
                key={level}
                className={`px-4 py-2 rounded-lg border ${
                  priority === level ? "bg-green-500 text-white" : "bg-white"
                }`}
                onClick={() => setPriority(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Notes</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-300"
            rows={4}
            placeholder="Add notes..."
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-4">
        <button className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-400 rounded-lg hover:bg-red-100 transition">
          <Trash2 className="h-5 w-5" /> Delete
        </button>
        <div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Save</button>
        </div>
      </div>
    </aside>
  );
}

export default TaskDetails;
