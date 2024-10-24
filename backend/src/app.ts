import express from 'express';
import presentationRoutes from './routes/presentationRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/presentations', presentationRoutes);

export default app;
