import Joi from "joi";

const artPieceSchema = Joi.object({
    userId: Joi.number().required(),
    image: Joi.string().required(),
    title: Joi.string().max(50).required()
})

export default artPieceSchema;