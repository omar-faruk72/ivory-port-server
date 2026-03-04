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

export const faqServices = {
    createFAQ,
}