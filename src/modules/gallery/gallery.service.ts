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

export const galleryServices = {
    addGallery,
    getAllGallery,
}