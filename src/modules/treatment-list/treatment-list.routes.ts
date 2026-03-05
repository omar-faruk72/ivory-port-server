import { Router } from "express";
import { treatmentListController } from "./treatment-list.controller";

const router = Router();

router.post("/add-treatment-list", treatmentListController.addTreatmentListController);

export const treatmentListRouters = router;