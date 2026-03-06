import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.log('Error fetching tasks:', error);
        return [];
    }
};

export const getTaskById = async (id) => {
    try {
        const response = await api.get(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error getting task:', error);
    }
};

export const createTask = async (task) => {
    try {
        const response = await api.post('/tasks', task);
        return response.data;
    } catch (error) {
        console.log('Error creating task:', error);
    }
};

export const updateTask = async (id, updatedTask) => {
    try {
        const response = await api.put(`/tasks/${id}`, updatedTask);
        return response.data;
    } catch (error) {
        console.log('Error updating task:', error);
    }
};

export const markTaskComplete = async (id) => {
    try {
        const response = await api.put(`/tasks/${id}/complete`);
        return response.data;
    } catch (error) {
        console.log('Error completing task:', error);
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await api.delete(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error deleting task:', error);
    }
};

export const searchTasks = async (keyword) => {
    try {
        const response = await api.get(`/tasks/search/${keyword}`);
        return response.data;
    } catch (error) {
        console.log('Error searching tasks:', error);
        return [];
    }
};

export default api;
