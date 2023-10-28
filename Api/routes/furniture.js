const express = require('express');
const router = express.Router();
const database = require('../database/database');
const Joi = require("joi");
const { MESSAGE_RESPONSE_CODE, MESSAGE_RESPONSE } = require('../lib/constant')

router.post('/', async function (req, res, next) {
    try {

        const pedido = req.body;
        await database.createForniture(pedido);
        return res.status(MESSAGE_RESPONSE_CODE.OK).json({ message: MESSAGE_RESPONSE.OK });
    } catch (error) {
        return res.status(MESSAGE_RESPONSE_CODE.BAD_REQUEST).json({ message: error.message });
    }
})

router.get('/:id?', async function (req, res, next) {
    let response = await database.getAllPedidos();
    res.send(response);
})

module.exports = router;