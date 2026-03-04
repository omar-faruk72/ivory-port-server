import { Request, Response } from "express";
import { faqServices } from "./faq.service";

const createFAQController = async (req: Request, res: Response) => {
    try {
        const faqData = req.body;
        const result = await faqServices.createFAQ(faqData);

        res.status(201).json({
            success: true,
            message: "FAQ added successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to add FAQ",
        });
    }
};

// get all faq
const getAllFAQsController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10; 

        const result = await faqServices.getAllFAQs(page, limit);

        res.status(200).json({
            success: true,
            message: "FAQs fetched successfully!",
            meta: result.meta,
            data: result.faqs,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch FAQs",
        });
    }
};

// get single faq
const getSingleFAQController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await faqServices.getSingleFAQ(id as string);

        res.status(200).json({
            success: true,
            message: "FAQ fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to fetch FAQ",
        });
    }
};

// update faq
const updateFAQController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const result = await faqServices.updateFAQ(id as string, updateData);

        res.status(200).json({
            success: true,
            message: "FAQ updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to update FAQ",
        });
    }
};

// delete faq
const deleteFAQController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await faqServices.deleteFAQ(id as string);

        res.status(200).json({
            success: true,
            message: "FAQ deleted successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to delete FAQ",
        });
    }
};

export const faqControllers = {
    createFAQController,
    getAllFAQsController,
    getSingleFAQController,
    updateFAQController,
    deleteFAQController
}