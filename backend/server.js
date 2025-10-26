

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import jobRoutes from './routes/jobs.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for your frontend (Netlify)
const allowedOrigins = [
  'https://68fe236f673ad334ce292d80--sparkly-pegasus-66df06.netlify.app',
'http://localhost:5173' // optional for local dev
];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET','POST','PUT','DELETE'],
}));


// API Routes
app.use('/api/jobs', jobRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('✅ Job Management API is running...');
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  