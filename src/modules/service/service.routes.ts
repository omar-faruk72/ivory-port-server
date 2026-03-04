import { Router } from "express";
import { serviceControllers } from "./service.controller";

const router = Router();

router.post("/add-service", serviceControllers.createServiceController);

router.get("/all-services", serviceControllers.getAllServicesController);

export const serviceRoutes = router;