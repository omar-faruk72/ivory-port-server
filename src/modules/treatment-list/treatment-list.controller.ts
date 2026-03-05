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

export const treatmentListController = {
    addTreatmentListController,
}