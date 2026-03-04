import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000
});

export const fetchTasks = async () => {
    const response = await api.get('/tasks');
    return response.data;
};

export const markTaskComplete = async (id) => {
    const response = await api.put(`/tasks/${id}`);
    return response.data;
};

export default api;

