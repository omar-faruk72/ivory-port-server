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

export const contactControllers = {
    addContactController,
    getAllContactsController,
}