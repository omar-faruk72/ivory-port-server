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

export const bookingServices = {
    createBooking,
}