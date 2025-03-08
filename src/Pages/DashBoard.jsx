import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import FullList from "../components/FullList";
import TaskDetails from "../components/TaskDetails";
import { closeSidebar } from "../redux/uiSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const { showSidebar, selectedTask } = useSelector((state) => state.ui);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Sidebar - Hidden on Small Screens */}
      <div className="hidden md:flex p-4 border-r h-screen">
        <Sidebar />
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-grow p-6 overflow-y-auto h-full">
        <FullList />
      </div>

      {/* Right Sidebar - Task Details */}
      {showSidebar && selectedTask && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50">
          <TaskDetails setShowSidebar={() => dispatch(closeSidebar())} task={selectedTask} />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
