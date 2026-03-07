import { Router } from "express";
import { contactControllers } from "./contact.controller";

const router = Router();

router.post("/add-contact", contactControllers.addContactController);

// get all contact
router.get("/contacts", contactControllers.getAllContactsController);

// get single contact
router.get("/contact/:id", contactControllers.getSingleContactController);

// update contact
router.put("/contact/:id", contactControllers.updateContactController);

export const contactRouters = router;