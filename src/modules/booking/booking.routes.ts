import { Router } from "express";
import { bookingControllers } from "./booking.controller";

const router = Router();

router.post("/add-booking", bookingControllers.createBookingController);

// get all booking api
router.get("/all-bookings", bookingControllers.getAllBookingsController);

// get single booking api
router.get("/booking/:id", bookingControllers.getSingleBookingController);

// update booking
router.put("/booking/:id", bookingControllers.updateBookingController);

export const bookingRouters = router;