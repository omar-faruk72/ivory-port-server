import { getDB } from "./db"

const collections = {
    get usersCollection() {
        return getDB().collection('users');
    },
};

export default collections;