import { Router } from "express";
import { treatmentListController } from "./treatment-list.controller";

const router = Router();

router.post("/add-treatment-list", treatmentListController.addTreatmentListController);

router.get("/all-treatments-list", treatmentListController.getAllTreatmentsListController);

// get single treatment list
router.get("/treatment-list/:id", treatmentListController.getSingleTreatmentsListController);

export const treatmentListRouters = router;