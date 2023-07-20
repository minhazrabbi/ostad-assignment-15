import React from 'react';

const TaskItem = ({ task, completed, index, deleteTask, markTaskAsCompleted }) => {
    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = () => {
        markTaskAsCompleted(index);
    };

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${completed ? 'completed' : ''}`}>
            <div>
                <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
                <span className="ml-2">{task}</span>
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default TaskItem;