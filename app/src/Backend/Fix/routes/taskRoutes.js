import express from 'express';
import { getUserTasks, markTaskComplete, createTask } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/tasks', getUserTasks);
router.put('/tasks/:id', markTaskComplete);
router.post('/tasks', createTask);

router.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

export default router;




