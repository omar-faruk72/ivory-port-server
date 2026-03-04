import { Router } from "express";
import { serviceControllers } from "./service.controller";

const router = Router();

router.post("/add-service", serviceControllers.createServiceController);

router.get("/all-services", serviceControllers.getAllServicesController);

router.get("/services/:id", serviceControllers.getSingleServiceController);

router.put("/services/:id", serviceControllers.updateServiceController);

router.delete("/services/:id", serviceControllers.deleteServiceController);

export const serviceRoutes = router;