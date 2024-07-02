import {Router} from 'express'
import {body, validationResult} from 'express-validator';
import { handleInputErrors, validateCreateUpdatePoint, validateProduct, validateUpdate, validateUpdatePoint } from './modules/middleware';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteIt, getOneUpdate, getUpdates, updateIt } from './handlers/update';

const router = Router();

// Product
router.get('/product', getProducts);
router.get('/product/:id', getOneProduct);
router.put('/product/:id', validateProduct, handleInputErrors, updateProduct);
router.post('/product', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct);

// Update
router.get('/update', getUpdates);
router.get('/update/:id', getOneUpdate);
router.put('/update/:id', validateUpdate, updateIt);
router.post('/update', createUpdate);
router.delete('/update/:id', deleteIt);

// Update point
router.get('/updatepoint', (req, res) => {});
router.get('/updatepoint/:id', (req, res) => {});
router.put('/updatepoint/:id', validateUpdatePoint, (req, res) => {});
router.post('/updatepoint', validateCreateUpdatePoint, (req, res) => {});
router.delete('/updatepoint/:id', (req, res) => {});

export default router;