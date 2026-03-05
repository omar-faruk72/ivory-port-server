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

export const treatmentListServices = {
    addTreatmentList,
}