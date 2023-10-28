const Joi = require("joi");

module.exports = {
    STATUS: {
        ACTIVE: 1,
        DELETED: 2,
        INACTIVE: 3,
    },
    MESSAGE_RESPONSE: {
        OK: "OK",
        CREATE: "CREATE SUCCESS",
        CREATE_ERROR: "CREATE ERROR",
        DELETE: "DELETE SUCCESS",
        DELETE_ERROR: "DELETE ERROR",
        UPDATE: "UPDATE SUCCESS",
        UPDATE_ERROR: "UPDATE ERROR",
        BAD_REQUEST: "BAD REQUEST",
        INVALID_ID: "ID inválido."

    },
    MESSAGE_RESPONSE_CODE: {
        OK: 200,
        CREATE: 201,
        BAD_REQUEST: 400
    },
    VALIDATED_FIELDS: {
        NAME: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,80}$/).required().messages({
            'string.base': 'El campo name tiene que ser de tipo string',
            'string.empty': 'El campo name no puede ser un campo vacio',
            'string.pattern.base': 'El campo name es invalido',
            // 'string.pattern': 'La cadena debe contener caracteres alfabéticos en mayúsculas y minúsculas, caracteres especiales como la letra "ñ" y vocales acentuadas, además de espacios en blanco. La longitud de la cadena debe estar entre 3 y 80 caracteres.',
            'any.required': 'El campo name es requerido'
        }),
        LAST_NAME: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,80}$/).required().messages({
            'string.base': 'El campo lastname tiene que ser de tipo string',
            'string.empty': 'El campo lastname no puede ser un campo vacío',
            'string.pattern.base': 'El campo lastname tiene un formato incorrecto',
            'any.required': 'El campo lastname es requerido'
        }),
        PASSWORD: Joi.string().required().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\._\$\*\?]).{8,}$/).messages({
            'string.base': 'El campo password debe ser de tipo string',
            'string.pattern.base':
                'El campo password debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial, y tener una longitud mínima de 8 caracteres',
            'any.required': 'El campo password es requerido'
        }),
        TARGET: Joi.string().required().messages({
            'string.base': 'El campo target debe ser de tipo string',
            'any.required': 'El campo target es requerido'
        }),
        DATA: Joi.object().required().messages({
            'object.base': 'El campo data debe ser de tipo Object',
            'any.required': 'El campo data es requerido'
        }),
        SCORE: Joi.object().required().messages({
            'object.base': 'El campo score debe ser de tipo Object',
            'any.required': 'El campo score es requerido'
        }),
        NOTIFICATION: Joi.string().required().messages({
            'string.base': 'El campo notification debe ser de tipo string',
            'any.required': 'El campo notification es requerido'
        }),
        DESC_NOTIFICATION: Joi.string().required().messages({
            'string.base': 'El campo dec_notification debe ser de tipo string',
            'any.required': 'El campo desc_notification es requerido'
        }),
        BENEFIT: Joi.string().required().messages({
            'string.base': 'El campo benefit debe ser de tipo string',
            'any.required': 'El campo benefit es requerido'
        }),
        ADDRESS: Joi.string().required().messages({
            'string.base': 'El campo address debe ser de tipo string',
            'string.empty': 'El campo address no puede estar vacío',
            'any.required': 'El campo address es requerido'
        }),
        URL: Joi.string().required().messages({
            'string.base': 'El campo url debe ser de tipo string',
            'string.empty': 'El campo url no puede estar vacío',
            'any.required': 'El campo url es requerido'
        }),
        ID_LOCAL: Joi.string().required().messages({
            'string.base': 'El campo id_local tiene que ser de tipo string',
            'string.empty': 'El campo id_local no puede ser un campo vacio',
            'any.required': 'El campo id_local es requerido'
        }),
        ID_OPPONENT: Joi.string().required().messages({
            'string.base': 'El campo id_opponent tiene que ser de tipo string',
            'string.empty': 'El campo id_opponent no puede ser un campo vacio',
            'any.required': 'El campo id_opponent es requerido'
        }),
        URL_LOCAL: Joi.string().required().messages({
            'string.base': 'El campo url_local tiene que ser de tipo string',
            'string.empty': 'El campo url_local no puede ser un campo vacio',
            'any.required': 'El campo url_local es requerido'
        }),
        URL_OPPONENT: Joi.string().required().messages({
            'string.base': 'El campo url_opponent tiene que ser de tipo string',
            'string.empty': 'El campo url_opponent no puede ser un campo vacio',
            'any.required': 'El campo url_opponent es requerido'
        }),
        BANNER_WEB: Joi.string().required().messages({
            'string.base': 'El campo bannerWeb tiene que ser de tipo string',
            'string.empty': 'El campo bannerWeb no puede ser un campo vacio',
            'any.required': 'El campo bannerWeb es requerido'
        }),
        BANNER_MOBILE: Joi.string().required().messages({
            'string.base': 'El campo bannerMobile tiene que ser de tipo string',
            'string.empty': 'El campo bannerMobile no puede ser un campo vacio',
            'any.required': 'El campo bannerMobile es requerido'
        }),
        ROLE: Joi.string().required().messages({
            'string.base': 'El campo role tiene que ser de tipo string',
            'string.empty': 'El campo role no puede ser un campo vacio',
            'any.required': 'El campo role es requerido'
        }),
        STREAM: Joi.string().required().messages({
            'string.base': 'El campo stream tiene que ser de tipo string',
            'string.empty': 'El campo stream no puede ser un campo vacio',
            'any.required': 'El campo stream es requerido'
        }),
        IMG: Joi.string().regex(/^(\/|https:).*$/).required().messages({
            'string.base': 'El campo img tiene que ser de tipo string',
            'string.empty': 'Elcampo img no puede ser un campo vacio',
            'string.pattern.base':
                'El campo img debe empezar con "/" o "https:" ',
            'any.required': 'El campo img es requerido'
        }),
        VIDEO: Joi.string().required().messages({
            'string.base': 'El campo video tiene que ser de tipo string',
            'string.empty': 'El campo video no puede ser un campo vacio',
            'any.required': 'El campo video es requerido'
        }),
        TITLE: Joi.string().required().messages({
            'string.base': 'El campo title tiene que ser de tipo string',
            'string.empty': 'El campo title no puede ser un campo vacio',
            'any.required': 'El campo title es requerido'
        }),
        SUBTITLE: Joi.string().required().messages({
            'string.base': 'El campo subtitle tiene que ser de tipo string',
            'string.empty': 'El campo subtitle no puede ser un campo vacio',
            'any.required': 'El campo subtitle es requerido'
        }),
        AUTHOR: Joi.string().required().messages({
            'string.base': 'El campo author tiene que ser de tipo string',
            'string.empty': 'El campo author no puede ser un campo vacio',
            'any.required': 'El campo author es requerido'
        }),
        TEAM: Joi.string().required().messages({
            'string.base': 'El campo team tiene que ser de tipo string',
            'string.empty': 'El campo team no puede ser un campo vacio',
            'any.required': 'El campo team es requerido'
        }),
        OPPONENT: Joi.string().required().messages({
            'string.base': 'El campo opponent tiene que ser de tipo string',
            'string.empty': 'El campo opponent no puede ser un campo vacio',
            'any.required': 'El campo opponent es requerido'
        }),
        SEDE: Joi.string().required().messages({
            'string.base': 'El campo sede tiene que ser de tipo string',
            'string.empty': 'El campo sede no puede ser un campo vacio',
            'any.required': 'El campo sede es requerido'
        }),
        DESC: Joi.string().required().messages({
            'string.base': 'El campo desc tiene que ser de tipo string',
            'string.empty': 'El campo desc no puede ser un campo vacio',
            'any.required': 'El campo desc es requerido'
        }),
        FILE: Joi.string().required().messages({
            'string.base': 'El campo file tiene que ser de tipo string',
            'string.empty': 'El campo file no puede ser un campo vacio',
            'any.required': 'El campo file es requerido'
        }),
        COUNTRY: Joi.string().required().messages({
            'string.base': 'El campo country tiene que ser de tipo string',
            'string.empty': 'El campo country no puede ser un campo vacio',
            'any.required': 'El campo country es requerido'
        }),
        MAIN_PHOTO: Joi.string().required().messages({
            'string.base': 'El campo main_phonto tiene que ser de tipo string',
            'string.empty': 'El campo main_phonto no puede ser un campo vacio',
            'any.required': 'El campo main_phonto es requerido'
        }),
        AMOUNT: Joi.number().required().min(0).messages({
            'number.min': 'El campo amount no puede ser menor a 0',
            'number.base': 'El  campo amount tiene que ser number',
            'number.empty': 'El campo amount no puede ser un campo vacio',
            'any.required': 'El campo amount es requerido'
        }),
        HIGH: Joi.number().required().min(0).messages({
            'number.min': 'El campo high no puede ser menor a 0',
            'number.base': 'El  campo high tiene que ser number',
            'number.empty': 'El campo high no puede ser un campo vacio',
            'any.required': 'El campo high es requerido'
        }),
        WEIGHT: Joi.number().required().min(0).messages({
            'number.min': 'El campo weight no puede ser menor a 0',
            'number.base': 'El  campo weight tiene que ser number',
            'number.empty': 'El campo weight no puede ser un campo vacio',
            'any.required': 'El campo weight es requerido'
        }),
        GAMES_DATES: Joi.array().required().messages({
            'array.base': 'El campo games_dates, tiene que ser tipo Array',
            'array.empty': 'El campo games_dates no puede ser un campo vacio',
            'any.required': 'El campo games_dates es requerido'
        }),
        GALLERY: Joi.array().required().messages({
            'array.base': 'El campo gallery, tiene que ser tipo Array',
            'array.empty': 'El campo gallery no puede ser un campo vacio',
            'any.required': 'El campo gallery es requerido'
        }),
        PRESENTED_BY: Joi.array().required().messages({
            'array.base': 'El campo presented_by, tiene que ser tipo Array',
            'array.empty': 'El campo presented_by no puede ser un campo vacio',
            'any.required': 'El campo presented_by es requerido'
        }),
        SHIP_ADDRESS: Joi.array().required().messages({
            'array.base': 'El campo address, tiene que ser tipo Array',
            'array.empty': 'El campo address no puede ser un campo vacio',
            'any.required': 'El campo address es requerido'
        }),
        SHOP_CART: Joi.array().required().messages({
            'array.base': 'El campo shop_cart, tiene que ser tipo Array',
            'array.empty': 'El campo shop_cart no puede ser un campo vacio',
            'any.required': 'El campo shop_cart es requerido'
        }),
        PERMISSIONS: Joi.array().required().messages({
            'array.base': 'El campo permissions, tiene que ser tipo Array',
            'array.empty': 'El campo permissions no puede ser un campo vacio',
            'any.required': 'El campo permissions es requerido'
        }),
        TAG: Joi.array().required().messages({
            'array.base': 'El campo tag, tiene que ser tipo Array',
            'array.empty': 'El campo tag no puede ser un campo vacio',
            'any.required': 'El campo tag es requerido'
        }),
        DATE: Joi.date().required().messages({
            'date.base': 'El campo date, tiene que ser tipo Date',
            'date.empty': 'El campo date no puede ser un campo vacio',
            'any.required': 'El campo date es requerido'
        }),
        PLAYER_NUMBER: Joi.number().greater(-1).required().messages({
            'number.base': 'El campo number, tiene que ser tipo number',
            'number.greater': 'El campo number, tiene que ser mayor o igual a 0',
            'number.empty': 'El campo number no puede ser un campo vacio',
            'number.required': 'El campo number es requerido',
            'any.required': 'El campo number es requerido'
        }),
        IS_LOCAL: Joi.number().min(1).max(3).required().messages({
            'number.base': 'El campo isLocal, tiene que ser tipo number',
            'number.min': 'El campo isLocal, tiene que ser entre 1 - 3',
            'number.max': 'El campo isLocal, tiene que ser entre 1 - 3',
            'number.empty': 'El campo isLocal no puede ser un campo vacio',
            'number.required': 'El campo isLocal es requerido',
            'any.required': 'El campo isLocal es requerido'
        }),
        ORDER: Joi.number().min(0).required().messages({
            'number.base': 'El campo order, tiene que ser tipo number',
            'number.min': 'El campo order, tiene que ser mayor a 1',
            'number.empty': 'El campo order no puede ser un campo vacio',
            'number.required': 'El campo order es requerido',
            'any.required': 'El campo order es requerido'
        }),
        GAME_STATUS: Joi.number().min(1).max(4).required().messages({
            'number.base': 'El campo game_status, tiene que ser tipo number',
            'number.min': 'El campo game_status, tiene que ser entre 1 - 4',
            'number.max': 'El campo game_status, tiene que ser entre 1 - 4',
            'number.empty': 'El campo game_status no puede ser un campo vacio',
            'number.required': 'El campo game_status es requerido',
            'any.required': 'El campo game_status es requerido'
        }),
        STATUS: Joi.number().min(0).max(2).required().messages({
            'number.base': 'El campo status, tiene que ser tipo number',
            'number.min': 'El campo status, tiene que ser entre 0 - 2',
            'number.max': 'El campo status, tiene que ser entre 0 - 2',
            'number.empty': 'El campo status no puede ser un campo vacio',
            'number.required': 'El campo status es requerido',
            'any.required': 'El campo status es requerido'
        }),
        TYPE: Joi.number().min(0).required().messages({
            'number.base': 'El campo type, tiene que ser tipo number',
            'number.min': 'El campo type, tiene que ser mayor a 0',
            'number.empty': 'El campo type no puede ser un campo vacio',
            'number.required': 'El campo type es requerido',
            'any.required': 'El campo type es requerido'
        }),
        PRICE: Joi.number().min(0).required().messages({
            'number.base': 'El campo price, tiene que ser tipo number',
            'number.min': 'El campo price, tiene que ser mayor a 0',
            'number.empty': 'El campo price no puede ser un campo vacio',
            'number.required': 'El campo price es requerido',
            'any.required': 'El campo price es requerido'
        }),
        BIRTHDATE: Joi.string().pattern(/^(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$/).required().messages({
            'string.base': 'El campo birthday tiene que ser de tipo string',
            'string.empty': 'El campo birthday no puede ser un campo vacio',
            'any.required': 'El campo birthday es requerido'
        }),
        OFFICE_HOURS: Joi.string().required().messages({
            'array.base': 'El campo office_hours tiene que ser de tipo string',
            'any.empty': 'El campo office_hours no puede ser un campo vacio',
            'any.required': 'El campo office_hours es requerido'
        }),
        PHONE: Joi.string().pattern(/^([0-9]{2}-?){4}[0-9]{2}$/).required().messages({
            'string.base': 'El campo phone tiene que ser de tipo string',
            'string.empty': 'El campo phone no puede ser un campo vacio',
            'string.pattern.base': 'El campo phone tiene un formato invalido',
            'any.required': 'El campo phone es requerido'
        }),
        EMAIL: Joi.string().email({ minDomainSegments: 2, maxDomainSegments: 3 }).required().messages({
            'string.base': 'El campo email tiene que ser de tipo string',
            'string.empty': 'El campo email no puede ser un campo vacio',
            'string.email': 'El campo email tiene un formato invalido',
            'any.required': 'El campo email es requerido'
        }),
        ID_MONGOOSE: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
            'string.base': 'El _id tiene que ser de tipo string',
            'string.pattern.base': 'El _id tiene formato invalido',
            'string.empty': 'El campo _id no puede ser un campo vacio',
            'any.required': 'El campo _id es requerido'
        }),
    },
}