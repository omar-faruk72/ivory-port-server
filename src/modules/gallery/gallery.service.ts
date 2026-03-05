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

export const galleryServices = {
    addGallery,
}