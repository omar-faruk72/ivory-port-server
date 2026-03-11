import { Router } from "express";
import { treatmentControllers } from "./treatment.controller";
import { auth, isAdmin } from "../../middleware/auth.middleware";

const router = Router();

router.post("/add-treatments", auth, isAdmin, treatmentControllers.addTreatmentController);

router.get("/all-treatments", treatmentControllers.getAllTreatmentController);

router.get("/treatment/:id", treatmentControllers.getSingleTreatmentController);

router.put("/treatment/:id", auth, isAdmin, treatmentControllers.updateTreatmentController);

router.delete("/treatment/:id", auth, isAdmin, treatmentControllers.deleteTreatmentController);
export const treatmentRouters = router;