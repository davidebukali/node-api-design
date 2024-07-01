import {Router} from 'express'
import {body, validationResult} from 'express-validator';
import { handleInputErrors, validateCreateUpdatePoint, validateProduct, validateUpdate, validateUpdatePoint } from './modules/middleware';
import { createProduct, getProducts } from './handlers/product';

const router = Router();

// Product
router.get('/product', getProducts);
router.get('/product/:id', (req, res) => {});
router.put('/product/:id', validateProduct, handleInputErrors, (req, res) => {
    res.json({message: 'Ok'})
});
router.post('/product', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', (req, res) => {});

// Update
router.get('/update', (req, res) => {});
router.get('/update/:id', (req, res) => {});
router.put('/update/:id', validateUpdate, (req, res) => {});
router.post('/update', (req, res) => {});
router.delete('/update/:id', (req, res) => {});

// Update point
router.get('/updatepoint', (req, res) => {});
router.get('/updatepoint/:id', (req, res) => {});
router.put('/updatepoint/:id', validateUpdatePoint, (req, res) => {});
router.post('/updatepoint', validateCreateUpdatePoint, (req, res) => {});
router.delete('/updatepoint/:id', (req, res) => {});

export default router;