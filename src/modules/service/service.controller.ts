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

// getall services
const getAllServicesController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 4; 

        const result = await serviceServices.getAllServices(page, limit);

        res.status(200).json({
            success: true,
            message: "Services fetched successfully!",
            meta: result.meta,
            data: result.services,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch services",
        });
    }
};

// get single service
const getSingleServiceController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; 
        const result = await serviceServices.getSingleService(id as string);

        res.status(200).json({
            success: true,
            message: "Service fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to fetch service",
        });
    }
};

// update services 
const updateServiceController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body; 
        
        const result = await serviceServices.updateService(id as string, updateData);

        res.status(200).json({
            success: true,
            message: "Service replaced/updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to update service",
        });
    }
};

// delete service 
const deleteServiceController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await serviceServices.deleteService(id as string);

        res.status(200).json({
            success: true,
            message: "Service deleted successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to delete service",
        });
    }
};

export const serviceControllers = {
    createServiceController,
    getAllServicesController,
    getSingleServiceController,
    updateServiceController,
    deleteServiceController
}