import { getDB } from "./db"

const collections = {
    get usersCollection() {
        return getDB().collection('users');
    },

    get servicesCollection() {
        return getDB().collection('services');
    },

    get faqsCollection() { 
        return getDB().collection('faqs');
    }
};

export default collections;