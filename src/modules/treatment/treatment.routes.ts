import { Router } from "express";
import { treatmentControllers } from "./treatment.controller";

const router = Router();

router.post("/add-treatments", treatmentControllers.addTreatmentController);
export const treatmentRouters = router;