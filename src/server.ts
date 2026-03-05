import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { connectDB } from './config/db';
import { userRouters } from './modules/user/user.routes';
import { serviceRoutes } from './modules/service/service.routes';
import { faqRoutes } from './modules/faq/faq.routes';
import { galleryRouters } from './modules/gallery/gallery.routes';
import { treatmentRouters } from './modules/treatment/treatment.routes';
import { treatmentListRouters } from './modules/treatment-list/treatment-list.routes';

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
app.use("/", faqRoutes);

// gallery
app.use("/", galleryRouters);

// treatment
app.use("/", treatmentRouters);

// treatment list
app.use("/", treatmentListRouters);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
