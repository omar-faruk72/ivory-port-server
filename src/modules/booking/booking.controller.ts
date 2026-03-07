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

// get all booking api
const getAllBookingsController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const result = await bookingServices.getAllBookings(page, limit);

        res.status(200).json({
            success: true,
            message: "All bookings fetched successfully!",
            meta: result.meta,
            data: result.bookings,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
        });
    }
};

// get single booking api
const getSingleBookingController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await bookingServices.getSingleBooking(id as string);

        res.status(200).json({
            success: true,
            message: "Booking details fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Something went wrong while fetching booking",
        });
    }
};

// update booking
const updateBookingController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const result = await bookingServices.updateBooking(id as string, updateData);

        res.status(200).json({
            success: true,
            message: "Booking updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to update booking",
        });
    }
};

export const bookingControllers = {
    createBookingController,
    getAllBookingsController,
    getSingleBookingController,
    updateBookingController,
}