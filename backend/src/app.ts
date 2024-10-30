import express from 'express';
import presentationRoutes from './routes/presentationRoutes';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // React uygulamanızın URL'si


// Middleware
app.use(express.json());

// Routes
app.use('/presentations', presentationRoutes);

export default app;
