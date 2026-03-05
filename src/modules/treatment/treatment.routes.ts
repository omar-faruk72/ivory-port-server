import { Router } from "express";
import { treatmentControllers } from "./treatment.controller";

const router = Router();

router.post("/add-treatments", treatmentControllers.addTreatmentController);

router.get("/all-treatments", treatmentControllers.getAllTreatmentController);

router.get("/treatment/:id", treatmentControllers.getSingleTreatmentController)
export const treatmentRouters = router;