import express from 'express';
import { getUserTasks, markTaskComplete } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/tasks', getUserTasks);
router.put('/tasks/:id', markTaskComplete);

export default router;