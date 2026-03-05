import { Request, Response } from "express";
import { galleryServices } from "./gallery.service";

const addGalleryController = async (req: Request, res: Response) => {
    try {
        const result = await galleryServices.addGallery(req.body);

        res.status(201).json({
            success: true,
            message: "Gallery data saved successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
        });
    }
};
export const galleryControllers = {
    addGalleryController,
}