import { Router } from "express";
import { galleryControllers } from "./gallery.controller";

const router = Router();

router.post("/add-gallery", galleryControllers.addGalleryController);

router.get("/all-gallery", galleryControllers.getAllGalleryController);

router.get("/gallery/:id", galleryControllers.getSingleGalleryController);

router.put("/gallery/:id", galleryControllers.updateGalleryController);

router.delete("/gallery/:id", galleryControllers.deleteGalleryController);
export const galleryRouters = router;