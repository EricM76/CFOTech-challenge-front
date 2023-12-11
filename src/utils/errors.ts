import Joi from "joi";

export const schema = Joi.object({
    nombre: Joi.string().min(3).max(30).required().messages({
      "any.required": "El nombre es requerido",
      "string.empty": "El nombre es requerido"
    }),
    empresa: Joi.string().min(3).max(30).required().messages({
      "any.required": "La empresa es requerida",
      "string.empty": "La empresa es requerida"
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "any.required": "El email es requerido",
      "string.empty": "El email es requerido",
      "string.email": "El email tiene un fomato incorrecto"
    }),
    telefono: Joi.number().allow('').messages({
        "number.base" : "Solo se permiten números",
    }),
    notas: Joi.string().allow('')
  });