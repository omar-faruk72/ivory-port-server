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

// get all gallery
const getAllGalleryController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10; 
        const result = await galleryServices.getAllGallery(page, limit);

        res.status(200).json({
            success: true,
            message: "Gallery images fetched successfully!",
            meta: result.meta,
            data: result.images,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch gallery images",
        });
    }
};
export const galleryControllers = {
    addGalleryController,
    getAllGalleryController,
}