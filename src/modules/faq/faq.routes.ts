import { Router } from "express";
import { faqControllers } from "./faq.controller";

const routes = Router();

routes.post("/faqs", faqControllers.createFAQController);

routes.get("/all-faqs", faqControllers.getAllFAQsController);

export const faqRoutes = routes;