import { ObjectId } from "mongodb";
import collections from "../../config/collections";

const addContact = async (contactData: any) => {
    try {
        const payload = {
            ...contactData,
            status: "pending",
            createdAt: new Date(),
        };

        const result = await collections.contactCollection.insertOne(payload);
        return result;
    } catch (err) {
        throw err;
    }
};

// get all contact
const getAllContact = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const messages = await collections.contactCollection
            .find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .toArray();

        const total = await collections.contactCollection.countDocuments();

        return {
            messages,
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

// get single contact
const getSingleContact = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.contactCollection.findOne(query);

        if (!result) {
            const error: any = new Error("Contact message not found!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

// update contact
const updateContact = async (id: string, updateData: any) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.contactCollection.replaceOne(
            query,
            {
                ...updateData,
                updatedAt: new Date()
            }
        );

        if (result.matchedCount === 0) {
            const error: any = new Error("Contact message not found to update!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

export const contactServices = {
    addContact,
    getAllContact,
    getSingleContact,
    updateContact,
}