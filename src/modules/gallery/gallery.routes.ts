import { Router } from "express";
import { galleryControllers } from "./gallery.controller";

const router = Router();

router.post("/add-gallery", galleryControllers.addGalleryController);

export const galleryRouters = router;