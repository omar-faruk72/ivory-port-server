import { Request, Response } from "express";
import { serviceServices } from "./service.service";

const createServiceController = async (req: Request, res: Response) => {
    try {
        const serviceData = req.body;
        const result = await serviceServices.createService(serviceData);

        res.status(201).json({
            success: true,
            message: "Dental service added successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to add service",
        });
    }
};

export const serviceControllers = {
    createServiceController,
}