import { ObjectId } from "mongodb";
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

// get single service
const getSingleService = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.servicesCollection.findOne(query);
        
        if (!result) {
            const error: any = new Error("Service not found!");
            error.statusCode = 404;
            throw error;
        }
        
        return result;
    } catch (err) {
        throw err;
    }
};

// services update 
const updateService = async (id: string, updateData: any) => {
    try {
        const query = { _id: new ObjectId(id) };
        
        const result = await collections.servicesCollection.replaceOne(
            query, 
            { ...updateData, updatedAt: new Date() } 
        );

        if (result.matchedCount === 0) {
            const error: any = new Error("Service not found!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

// delete service 
const deleteService = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.servicesCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            const error: any = new Error("Service not found to delete!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};
export const serviceServices = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService
}