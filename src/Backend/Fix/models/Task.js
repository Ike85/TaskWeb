import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    status: { type: String, default: 'pending' },
    completedAt: Date,
    userId: String
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);


