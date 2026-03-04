import React, { useEffect, useState } from 'react';
import { fetchTasks, markTaskComplete } from './services/api';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const data = await fetchTasks();
            setTasks(data.data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const handleComplete = async (id) => {
        try {
            await markTaskComplete(id);
            loadTasks();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div style={{ padding: '40px' }}>
            <h1>Task Manager</h1>

            {tasks.map(task => (
                <div key={task._id} style={{ marginBottom: '15px' }}>
                    <strong>{task.title}</strong>
                    <p>Status: {task.status}</p>

                    {task.status === 'pending' && (
                        <button onClick={() => handleComplete(task._id)}>
                            Mark Complete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default App;