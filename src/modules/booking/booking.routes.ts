import { Router } from "express";
import { bookingControllers } from "./booking.controller";

const router = Router();

router.post("/add-booking", bookingControllers.createBookingController);

// get all booking api
router.get("/all-bookings", bookingControllers.getAllBookingsController);

export const bookingRouters = router;