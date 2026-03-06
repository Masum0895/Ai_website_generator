import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.js";

const app = express();

const corsOptions = {
    origin:process.env.TRUSTED_ORIGINS?.split(',') || ['http://localhost:5173'],
    credentials: true,
}
app.use(cors(corsOptions))

app.post('/api/stripe', express.raw({type: 'application/json'}), stripeWebhook)

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json({limit:'50mb'}))

// Middleware
//app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Health check (important for Vercel)
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

// Export the app for Vercel
export default app;