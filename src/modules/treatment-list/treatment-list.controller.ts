import { Request, Response } from "express";
import { treatmentListServices } from "./treatment-list.service";

const addTreatmentListController = async (req: Request, res: Response) => {
    try {
        const result = await treatmentListServices.addTreatmentList(req.body);

        res.status(201).json({
            success: true,
            message: "Treatment added to list successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to add treatment to list",
        });
    }
};

// get all treatment list
const getAllTreatmentsListController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const result = await treatmentListServices.getAllTreatmentsList(page, limit);

        res.status(200).json({
            success: true,
            message: "Treatment list fetched successfully!",
            meta: result.meta,
            data: result.treatments,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch treatment list",
        });
    }
};

// get single treatment list 
const getSingleTreatmentsListController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await treatmentListServices.getSingleTreatmentsList(id as string);

        res.status(200).json({
            success: true,
            message: "Treatment fetched successfully from list!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Something went wrong",
        });
    }
};
export const treatmentListController = {
    addTreatmentListController,
    getAllTreatmentsListController,
    getSingleTreatmentsListController
}