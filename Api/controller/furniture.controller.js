const { Furniture } = require('../database/database')
const { v4: uuidv4 } = require('uuid');

class FornitureController {

    async create(data) {
        try {
            const id = uuidv4()
            let doc = Furniture.doc(id);
            const response = await doc.set({ ...data, id });
            return response;
        } catch (err) {
            console.error(err);
            return null
        }
    }

    async findById(id) {
        try {
            const ref = Furniture.doc(id);
            const doc = await ref.get();
            return !doc.exists ? null : doc.data()
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async find(filter) {
        const snapshot = await Furniture.where(filter.condition, filter.operation, filter.value).get();
        let array = [];
        snapshot.forEach(doc => {
            array.push(doc.data());
        });
        if (array.length != 0)
            return array
        else
            return null
    }
    async findOne(filter) {
        const snapshot = await Furniture.where(filter.condition, '==', filter.value).get();
        let array = [];
        snapshot.forEach(doc => {
            array.push(doc.data().pedido);
        });
        if (array.length != 0)
            return array
        else
            return null
    }

}

module.exports = new FornitureController();