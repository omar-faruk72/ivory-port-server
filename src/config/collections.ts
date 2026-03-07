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
    },

    get treatmentFeesCollection() { 
        return getDB().collection('treatment_fees');
    },

    get treatmentListCollection() { 
        return getDB().collection('treatment_list');
    }, 

    get contactCollection() { 
        return getDB().collection('contacts');
    }, 

    get bookingCollection() { 
        return getDB().collection('bookings');
    }
};

export default collections;