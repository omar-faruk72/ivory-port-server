import { ObjectId } from "mongodb";
import collections from "../../config/collections";

const addTreatmentList = async (treatmentData: any) => {
    try {
        const payload = {
            ...treatmentData,
            createdAt: new Date(),
        };

        const result = await collections.treatmentListCollection.insertOne(payload);
        return result;
    } catch (err) {
        throw err;
    }
};

// get all treatment list
const getAllTreatmentsList = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const treatments = await collections.treatmentListCollection
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
        const total = await collections.treatmentListCollection.countDocuments();

        return {
            treatments,
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

// get single treatment list
const getSingleTreatmentsList = async (id: string) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.treatmentListCollection.findOne(query);

        if (!result) {
            const error: any = new Error("Treatment not found in list!");
            error.statusCode = 404;
            throw error;
        }

        return result;
    } catch (err) {
        throw err;
    }
};
export const treatmentListServices = {
    addTreatmentList,
    getAllTreatmentsList,
    getSingleTreatmentsList,
}