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

export const contactControllers = {
    addContactController,
}