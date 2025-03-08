import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function FullList() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Buy groceries', completed: false, important: false },
    { id: '2', text: 'Finish project report', completed: false, important: true },
    { id: '3', text: 'Call the bank', completed: false, important: false },
    { id: '4', text: 'Schedule dentist appointment', completed: false, important: false },
    { id: '5', text: 'Plan weekend trip', completed: false, important: false },
    { id: '6', text: 'Read a book', completed: true, important: false },
    { id: '7', text: 'Clean the house', completed: true, important: false },
    { id: '8', text: 'Prepare presentation', completed: true, important: false },
    { id: '9', text: 'Update blog', completed: true, important: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleTaskImportance = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, important: !task.important } : task
    ));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const task = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
      important: false,
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };

  return (
    <div className=" w-full bg-gray-50">
      <div className="w-full mx-auto p-4">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">To Do</h1>
          </div>
          <button onClick={() => setShowSidebar(!showSidebar)} className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="h-5 w-5 text-gray-600" />
          </button>
        </header>

        <div className="flex gap-6">
          <main className="flex-1">
            <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
            <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} toggleTaskImportance={toggleTaskImportance} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default FullList;
