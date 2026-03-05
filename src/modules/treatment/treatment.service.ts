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

export const treatmentServices = {
    addTreatmentFee,
}