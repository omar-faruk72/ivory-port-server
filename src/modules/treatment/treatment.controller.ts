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

export const treatmentControllers = {
    addTreatmentController,
}