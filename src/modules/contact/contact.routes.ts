import { Router } from "express";
import { contactControllers } from "./contact.controller";

const router = Router();

router.post("/add-contact", contactControllers.addContactController);

export const contactRouters = router;