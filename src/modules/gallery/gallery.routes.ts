import { Router } from "express";
import { galleryControllers } from "./gallery.controller";

const router = Router();

router.post("/add-gallery", galleryControllers.addGalleryController);

router.get("/all-gallery", galleryControllers.getAllGalleryController);

export const galleryRouters = router;