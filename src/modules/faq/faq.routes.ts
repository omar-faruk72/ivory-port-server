import { Router } from "express";
import { faqControllers } from "./faq.controller";
import { auth, isAdmin } from "../../middleware/auth.middleware";

const routes = Router();

routes.post("/faqs",auth, isAdmin, faqControllers.createFAQController);

routes.get("/all-faqs", faqControllers.getAllFAQsController);

routes.get("/faq/:id", faqControllers.getSingleFAQController);

routes.put("/faq/:id", auth, isAdmin, faqControllers.updateFAQController);

routes.delete("/faq/:id",auth, isAdmin, faqControllers.deleteFAQController);
export const faqRoutes = routes;