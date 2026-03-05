import collections from "../../config/collections";

const addTreatmentFee = async (feeData: any) => {
    try {
        const payload = {
            ...feeData,
            createdAt: new Date(),
        };

        const result = await collections.treatmentFeesCollection.insertOne(payload);
        return result;
    } catch (err) {
        throw err;
    }
};

// get all treatment
const getAllTreatment = async (page: number, limit: number) => {
    try {
        const skip = (page - 1) * limit;
        const fees = await collections.treatmentFeesCollection
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
        const total = await collections.treatmentFeesCollection.countDocuments();

        return {
            fees,
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
export const treatmentServices = {
    addTreatmentFee,
    getAllTreatment,
}