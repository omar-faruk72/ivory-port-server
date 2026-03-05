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
    },

    get galleryCollection() {
        return getDB().collection('gallery');
    }
};

export default collections;