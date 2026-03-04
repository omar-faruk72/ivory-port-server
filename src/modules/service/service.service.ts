import collections from "../../config/collections";

const createService = async (serviceData: any) => {
    try {
        const newService = {
            ...serviceData,
            createdAt: new Date(),
        };

        const result = await collections.servicesCollection.insertOne(newService);
        return result;
    } catch (err) {
        throw err;
    }
};

export const serviceServices = {
    createService,
}