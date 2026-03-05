import { ObjectId } from "mongodb";
import collections from "../../config/collections";

const addGallery = async (imageData: any) => {
    try {
        const payload = {
            ...imageData,
            createdAt: new Date(),
        };

        const result = await collections.galleryCollection.insertOne(payload);
        return result;
    } catch (err) {
        throw err;
    }
};

// get all gallery
const getAllGallery = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const images = await collections.galleryCollection
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
        const total = await collections.galleryCollection.countDocuments();

        return {
            images,
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

// get single gallery
const getSingleGallery = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.galleryCollection.findOne(query);

        if (!result) {
            const error: any = new Error("Gallery item not found!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

// update gallery
const updateGallery = async (id: string, updateData: any) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.galleryCollection.replaceOne(
            query,
            {
                ...updateData,
                updatedAt: new Date()
            }
        );

        if (result.matchedCount === 0) {
            const error: any = new Error("Gallery item not found!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

// delete gallery
const deleteGallery = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.galleryCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            const error: any = new Error("Gallery item not found to delete!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};
export const galleryServices = {
    addGallery,
    getAllGallery,
    getSingleGallery,
    updateGallery, 
    deleteGallery
}