import { Router } from "express";
import { galleryControllers } from "./gallery.controller";
import { auth, isAdmin } from "../../middleware/auth.middleware";

const router = Router();

router.post("/add-gallery", auth, isAdmin, galleryControllers.addGalleryController);

router.get("/all-gallery", galleryControllers.getAllGalleryController);

router.get("/gallery/:id", galleryControllers.getSingleGalleryController);

router.put("/gallery/:id",auth, isAdmin, galleryControllers.updateGalleryController);

router.delete("/gallery/:id", auth, isAdmin, galleryControllers.deleteGalleryController);
export const galleryRouters = router;