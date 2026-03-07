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

export const contactServices = {
    addContact,
}