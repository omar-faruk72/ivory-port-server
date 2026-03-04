import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { connectDB } from './config/db';
import { userRouters } from './modules/user/user.routes';

const app = express();
const PORT = config.port;


// middleware
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Ivory Port Dental Server is Live!');
});

// user
app.use('/', userRouters);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
