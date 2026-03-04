import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

// CORS middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? 'https://your-production-client.com'
        : 'http://localhost:5173',
    credentials: true
}));

// JSON middleware
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => {
        console.log('⚠️ MongoDB connection error:', err.message);
        console.log('⚠️ Running backend with mock data instead.');
    });

// Routes
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});