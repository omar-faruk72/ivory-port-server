import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';

const app = express();
const PORT = config.port;

// middleware
app.use(cors());
app.use(express.json());

// parser
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Ivory Port Dental Server is Live!');
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});