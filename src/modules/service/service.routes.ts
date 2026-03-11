import { Router } from "express";
import { serviceControllers } from "./service.controller";
import { auth, isAdmin } from "../../middleware/auth.middleware";

const router = Router();

router.post("/add-service", auth, isAdmin, serviceControllers.createServiceController);

router.get("/all-services", serviceControllers.getAllServicesController);

router.get("/services/:id", serviceControllers.getSingleServiceController);

router.put("/services/:id",auth, isAdmin, serviceControllers.updateServiceController);

router.delete("/services/:id", auth, isAdmin, serviceControllers.deleteServiceController);

export const serviceRoutes = router;