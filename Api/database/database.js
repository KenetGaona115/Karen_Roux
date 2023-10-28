const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('../proyectomuebles-7993d-288434c24e2f.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
const Furniture = db.collection('furniture');
const Informaction = db.collection('information');

async function deletePedido(id) {
    const snapshot = await collectionPedidos.doc(id).delete();
    return snapshot
}

async function updatePedido(pedido) {
    try {
        await collectionPedidos.doc(pedido.id).set({
            pedido
        })
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

async function getAllPedidosPendientes() {
    const snapshot = await collectionPedidos.where('pedido.estadoPedido', '==', '1').get();
    let array = [];
    snapshot.forEach(doc => {
        array.push(doc.data().pedido);
    });
    if (array.length != 0)
        return array
    else
        return null
}

async function getAllPedidosCapturados() {
    const snapshot = await collectionPedidos.where('pedido.estadoPedido', '==', '2').get();
    let array = [];
    snapshot.forEach(doc => {
        array.push(doc.data().pedido);
    });
    if (array.length != 0)
        return array
    else
        return null
}

async function getAllCustomerOrders(id) {
    const snapshot = await collectionPedidos.where('pedido.claveCliente', '==', id).get();
    let array = [];
    snapshot.forEach(doc => {
        array.push(doc.data().pedido);
    });
    if (array.length != 0)
        return array
    else
        return null
}

module.exports = {
    Furniture,
    Informaction
};