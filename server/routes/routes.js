import express from "express";
import { 
    getProducts,
 } from "../controllers/User.js";
 
const router = express.Router();
 
router.get('/user', getProducts);
// Route get product by id
router.get('/user/:id', getProductById);
// Route create product baru
router.post('/user', createProduct);
// Route update product by id
router.put('/user/:id', updateProduct);
// Route delete product by id
router.delete('/user/:id', deleteProduct);
 
// export router
export default router;