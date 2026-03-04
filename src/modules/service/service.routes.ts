import { Router } from "express";
import { serviceControllers } from "./service.controller";

const router = Router();

router.post("/add-service", serviceControllers.createServiceController);

export const serviceRoutes = router;