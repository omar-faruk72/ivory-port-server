import { Request, Response } from "express";
import { bookingServices } from "./booking.service";

const createBookingController = async (req: Request, res: Response) => {
    try {
        const result = await bookingServices.createBooking(req.body);

        res.status(201).json({
            success: true,
            message: "Appointment booked successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to book appointment",
        });
    }
};

export const bookingControllers = {
    createBookingController,
}