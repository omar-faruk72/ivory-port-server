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

// get all service
const getAllServices = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const result = await collections.servicesCollection
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
        const total = await collections.servicesCollection.countDocuments();
        return {
            services: result,
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
export const serviceServices = {
    createService,
    getAllServices,
}