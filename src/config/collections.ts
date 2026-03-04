import { getDB } from "./db"

const collections = {
    get usersCollection() {
        return getDB().collection('users');
    },

    get servicesCollection() {
        return getDB().collection('services');
    }
};

export default collections;