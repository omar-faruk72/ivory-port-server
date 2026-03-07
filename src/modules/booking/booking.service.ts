import collections from "../../config/collections";

const createBooking = async (bookingData: any) => {
    try {
        const payload = {
            ...bookingData,
            status: "pending", 
            paymentStatus: "unpaid",
            createdAt: new Date(),
        };

        const result = await collections.bookingCollection.insertOne(payload);
        return result;
    } catch (err) {
        throw err;
    }
};

// get all booking api
const getAllBookings = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const bookings = await collections.bookingCollection
            .find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .toArray();

        const total = await collections.bookingCollection.countDocuments();

        return {
            bookings,
            meta: {
                page,
                limit,
                total,
                totalPage: Math.ceil(total / limit)
            }
        };
    } catch (err) {
        throw err;
    }
};

export const bookingServices = {
    createBooking,
    getAllBookings,
}