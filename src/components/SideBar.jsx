import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ taskCount }) {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState(
    localStorage.getItem("activeView") || "All Tasks"
  );
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "ABCD";
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("activeView");
    navigate("/login");
    window.location.reload();
  };

  const menuItems = [
    { name: "All Tasks", icon: "📋" },
    { name: "Today", icon: "📅" },
    { name: "Important", icon: "⭐" },
    { name: "Planned", icon: "📌" },
    { name: "Assigned to me", icon: "👤" },
  ];

  const handleViewChange = (view) => {
    setActiveView(view);
    localStorage.setItem("activeView", view);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 text-2xl font-bold text-green-500 border-b border-gray-200">
        DoIt
      </div>

      <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="https://via.placeholder.com/48"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="font-medium">Hey, {username}</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`flex items-center space-x-3 w-full p-2 rounded-md transition-colors ${
              activeView === item.name
                ? "bg-green-100 text-green-700"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleViewChange(item.name)}
            aria-label={`Navigate to ${item.name}`}
          >
            <span className={activeView === item.name ? "text-green-600" : "text-gray-500"}>
              {item.icon}
            </span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center space-x-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
          ➕ <span>Add list</span>
        </button>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium text-sm text-gray-700">Today Tasks</h3>
            <p className="text-2xl font-bold">{taskCount}</p>
          </div>
          <div className="h-16 w-16">
            <svg viewBox="0 0 36 36" className="h-full w-full">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#e6e6e6" strokeWidth="4"></circle>
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#4ade80"
                strokeWidth="4"
                strokeDasharray={`${100 * 0.75} 100`}
                strokeDashoffset="25"
                transform="rotate(-90 18 18)"
              ></circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <button
          className="w-full flex items-center justify-center space-x-2 p-2 border border-red-300 rounded-md text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          🔴 <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
