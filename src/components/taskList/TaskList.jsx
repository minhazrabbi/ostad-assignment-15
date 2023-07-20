import React from 'react';
import TaskItem from '../taskItem/TaskItem.jsx';
const TaskList = ({ tasks, deleteTask, markTaskAsCompleted }) => {
    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task.description}
                    completed={task.completed}
                    index={index}
                    deleteTask={deleteTask}
                    markTaskAsCompleted={markTaskAsCompleted}
                />
            ))}
        </ul>
    );
};

export default TaskList;