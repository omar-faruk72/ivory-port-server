import { Router } from "express";
import { contactControllers } from "./contact.controller";
import { auth, isAdmin } from "../../middleware/auth.middleware";

const router = Router();

router.post("/add-contact", contactControllers.addContactController);

// get all contact
router.get("/contacts", auth, isAdmin, contactControllers.getAllContactsController);

// get single contact
router.get("/contact/:id", auth, isAdmin, contactControllers.getSingleContactController);

// update contact
router.put("/contact/:id", auth, isAdmin, contactControllers.updateContactController);

// delete contact
router.delete("/contact/:id", auth, isAdmin, contactControllers.deleteContactController);

export const contactRouters = router;