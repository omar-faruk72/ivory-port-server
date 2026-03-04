import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { connectDB } from './config/db';
import { userRouters } from './modules/user/user.routes';
import { serviceRoutes } from './modules/service/service.routes';
import { faqRoutes } from './modules/faq/faq.routes';

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

// services
app.use('/', serviceRoutes);

// faqs
app.use("/", faqRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
