import { Router } from "express";
import { treatmentControllers } from "./treatment.controller";

const router = Router();

router.post("/add-treatments", treatmentControllers.addTreatmentController);

router.get("/all-treatments", treatmentControllers.getAllTreatmentController);
export const treatmentRouters = router;