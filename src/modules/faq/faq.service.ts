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

export const faqServices = {
    createFAQ,
    getAllFAQs,
}