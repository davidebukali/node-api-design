import { body, oneOf, validationResult } from "express-validator"

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
];

export const validateUpdate = [
    body('title').optional().isString(),
    body('body').optional().isString(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional().isString(),
];

export const validateCreateUpdate = [
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
];

export const validateUpdatePoint = [
    body('name').optional().isString(),
    body('description').optional().isString(),
];

export const validateCreateUpdatePoint = [
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
];