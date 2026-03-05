import { Router } from "express";
import { treatmentListController } from "./treatment-list.controller";

const router = Router();

router.post("/add-treatment-list", treatmentListController.addTreatmentListController);

router.get("/all-treatments-list", treatmentListController.getAllTreatmentsListController);

export const treatmentListRouters = router;