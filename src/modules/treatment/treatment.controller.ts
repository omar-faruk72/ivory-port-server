import { Request, Response } from "express";
import { treatmentServices } from "./treatment.service";

const addTreatmentController = async (req: Request, res: Response) => {
    try {
        const result = await treatmentServices.addTreatmentFee(req.body);

        res.status(201).json({
            success: true,
            message: "Treatment fee added successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to add treatment fee",
        });
    }
};

// get all treatment
const getAllTreatmentController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10; 

        const result = await treatmentServices.getAllTreatment(page, limit);

        res.status(200).json({
            success: true,
            message: "Treatment fees fetched successfully!",
            meta: result.meta,
            data: result.fees,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch treatment fees",
        });
    }
};

// get single treatment
const getSingleTreatmentController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await treatmentServices.getSingleTreatment(id as string);

        res.status(200).json({
            success: true,
            message: "Treatment fee fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to fetch treatment fee",
        });
    }
};
export const treatmentControllers = {
    addTreatmentController,
    getAllTreatmentController,
    getSingleTreatmentController,
}