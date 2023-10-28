const express = require('express');
const router = express.Router();
const database = require('../database/database');
const FurnitureController = require('../controller/furniture.controller')
const Joi = require("joi");
const { MESSAGE_RESPONSE_CODE, MESSAGE_RESPONSE, VALIDATED_FIELDS, STATUS } = require('../lib/constant')

router.post('/', async function (req, res, next) {
    try {
        const schema = Joi.object({
            name: VALIDATED_FIELDS.NAME,
            desc: VALIDATED_FIELDS.DESC,
            price: VALIDATED_FIELDS.PRICE,
            date: VALIDATED_FIELDS.DATE,
            status: VALIDATED_FIELDS.STATUS
        })
        const data = await schema.validateAsync(req.body)
        const response = await FurnitureController.create(data);
        if (response)
            return res.status(MESSAGE_RESPONSE_CODE.OK).json({ message: MESSAGE_RESPONSE.OK });

        return res.status(MESSAGE_RESPONSE_CODE.BAD_REQUEST).json({ message: MESSAGE_RESPONSE.BAD_REQUEST });
    } catch (error) {
        return res.status(MESSAGE_RESPONSE_CODE.BAD_REQUEST).json({ message: error.message });
    }
})

router.get('/:id?', async function (req, res, next) {
    try {
        const { id } = req.params

        if (id) {
            const furniture = await FurnitureController.findById(id)
            if (furniture) {
                return res.status(MESSAGE_RESPONSE_CODE.OK).json({ message: MESSAGE_RESPONSE.OK, furniture });
            }
        } else {
            const furniture = await FurnitureController.find({ condition: "status", operation: "==", value: STATUS.ACTIVE })
            if (furniture) {
                return res.status(MESSAGE_RESPONSE_CODE.OK).json({ message: MESSAGE_RESPONSE.OK, furniture });
            }
        }

        return res.status(MESSAGE_RESPONSE_CODE.BAD_REQUEST).json({ message: MESSAGE_RESPONSE.BAD_REQUEST });
    } catch (error) {
        return res.status(MESSAGE_RESPONSE_CODE.BAD_REQUEST).json({ message: error.message });
    }
})

module.exports = router;