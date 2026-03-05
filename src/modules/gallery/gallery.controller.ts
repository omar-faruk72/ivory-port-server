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

// get single gallery
const getSingleGalleryController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await galleryServices.getSingleGallery(id as string);

        res.status(200).json({
            success: true,
            message: "Gallery item fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to fetch gallery item",
        });
    }
};

// update gallery
const updateGalleryController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await galleryServices.updateGallery(id as string, updateData);

        res.status(200).json({
            success: true,
            message: "Gallery item updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to update gallery item",
        });
    }
};

// delete gallery 
const deleteGalleryController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await galleryServices.deleteGallery(id as string);

        res.status(200).json({
            success: true,
            message: "Gallery item deleted successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to delete gallery item",
        });
    }
};
export const galleryControllers = {
    addGalleryController,
    getAllGalleryController,
    getSingleGalleryController,
    updateGalleryController,
    deleteGalleryController,
}