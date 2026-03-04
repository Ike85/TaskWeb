import React from 'react';
import '../TaskItem.css';
import { markTaskComplete } from '../services/api';

export default function TaskItem({ task, onTaskUpdate }) {
    const handleComplete = async () => {
        const res = await markTaskComplete(task._id);
        onTaskUpdate(res.data);
    };

    return (
        <div className={`task-item ${task.status}`}>
            <h3>{task.title}</h3>
            <p>Status: {task.status}</p>
            {task.status === 'pending' && <button onClick={handleComplete}>Complete</button>}
        </div>
    );
}
