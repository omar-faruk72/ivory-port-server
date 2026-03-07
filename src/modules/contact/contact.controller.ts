import { Request, Response } from "express";
import { contactServices } from "./contact.service";

const addContactController = async (req: Request, res: Response) => {
    try {
        const result = await contactServices.addContact(req.body);

        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to send message",
        });
    }
};

// get all contact
const getAllContactsController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const result = await contactServices.getAllContact(page, limit);

        res.status(200).json({
            success: true,
            message: "Contact messages fetched successfully!",
            meta: result.meta,
            data: result.messages,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch contact messages",
        });
    }
};

// get single contact
const getSingleContactController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await contactServices.getSingleContact(id as string);

        res.status(200).json({
            success: true,
            message: "Contact message fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to fetch contact message",
        });
    }
};

// update contact
const updateContactController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const result = await contactServices.updateContact(id as string, updateData);

        res.status(200).json({
            success: true,
            message: "Contact information updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to update contact",
        });
    }
};

// delete contact
const deleteContactController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await contactServices.deleteContact(id as string);

        res.status(200).json({
            success: true,
            message: "Contact message deleted successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to delete contact message",
        });
    }
};

export const contactControllers = {
    addContactController,
    getAllContactsController,
    getSingleContactController,
    updateContactController,
    deleteContactController
}