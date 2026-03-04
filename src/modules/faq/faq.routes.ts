import { Router } from "express";
import { faqControllers } from "./faq.controller";

const routes = Router();

routes.post("/faqs", faqControllers.createFAQController);

export const faqRoutes = routes;