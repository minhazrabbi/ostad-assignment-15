import React, { useState } from 'react';
import TaskInput from "./components/taskInput/TaskInput.jsx";
import TaskList from "./components/taskList/TaskList.jsx";
import './assets/css/Style.css'

const TaskApp = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { description: task, completed: false }]);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const clearAllTasks = () => {
        setTasks([]);
    };

    const markTaskAsCompleted = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} markTaskAsCompleted={markTaskAsCompleted} />
            {tasks.length > 0 && (
                <button className="btn btn-danger mt-3" onClick={clearAllTasks}>
                    Clear All Tasks
                </button>
            )}
        </div>
    );
};

export default TaskApp;
