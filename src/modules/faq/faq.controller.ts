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

export const faqControllers = {
    createFAQController,
}