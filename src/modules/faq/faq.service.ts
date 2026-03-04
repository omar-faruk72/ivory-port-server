import { ObjectId } from "mongodb";
import collections from "../../config/collections";

const createFAQ = async (faqData: { question: string; answer: string }) => {
    try {
        const newFAQ = {
            ...faqData,
            createdAt: new Date(),
        };

        const result = await collections.faqsCollection.insertOne(newFAQ);
        return result;
    } catch (err) {
        throw err;
    }
};

// get all faq
const getAllFAQs = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const faqs = await collections.faqsCollection
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
        const total = await collections.faqsCollection.countDocuments();

        return {
            faqs,
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

// get single faq
const getSingleFAQ = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.faqsCollection.findOne(query);

        if (!result) {
            const error: any = new Error("FAQ not found!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

// update faq
const updateFAQ = async (id: string, updateData: { question: string; answer: string }) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.faqsCollection.replaceOne(
            query,
            {
                ...updateData,
                updatedAt: new Date()
            }
        );

        if (result.matchedCount === 0) {
            const error: any = new Error("FAQ not found to update!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

export const faqServices = {
    createFAQ,
    getAllFAQs,
    getSingleFAQ,
    updateFAQ,
}