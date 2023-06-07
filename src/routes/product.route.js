import express from 'express';
import { getProductosControllers, postProductosControllers, getByIdProductosControllers, updateProductosControllers, deleteProductByIdControllers, deleteAllProductsControllers } from '../controllers/products.controller.js';
import {checkAdminRole} from '../middlewares/checkRole.js'
import { checkLogged } from '../middlewares/auth.js';



const productsRouter = express.Router();

productsRouter.get('/', getProductosControllers)
productsRouter.post('/', checkAdminRole, postProductosControllers)
productsRouter.get('/:id', getByIdProductosControllers)
productsRouter.put('/:id',checkAdminRole, updateProductosControllers)
productsRouter.delete('/:id', checkAdminRole, deleteProductByIdControllers)
productsRouter.delete('/',checkAdminRole, deleteAllProductsControllers)

export {productsRouter}

