import { body, validationResult } from "express-validator"

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400);
        res.json({errors: errors.array()});
    } else {
        next();
    }
}

export const validateProduct = [
    body('name').isString(),
    body('belongsToId').isString(),
    body('updates').isString(),
];