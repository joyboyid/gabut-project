import express from "express";
import {
    getProducts,
    getProductById,
    createProducts,
    updateProducts,
    deleteProducts
} from "../controllers/Products.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.delete('/products/:id', deleteProducts);
router.patch('/products/:id', updateProducts);

export default router;
