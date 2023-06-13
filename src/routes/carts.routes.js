import express from 'express';
import { getCarritosControllers, postCarritosControllers, updateCarritoControllers,deleteCarritoControllers, deleteProductCarritoControllers, buyCartControllers } from '../controllers/carts.controller.js';

const cartsRouter = express.Router();


cartsRouter.get('/', getCarritosControllers)
cartsRouter.post('/', postCarritosControllers)
cartsRouter.delete('/', deleteCarritoControllers)
cartsRouter.put('/add-producto', updateCarritoControllers)
cartsRouter.put('/delete-producto',deleteProductCarritoControllers)
cartsRouter.get('/comprar', buyCartControllers)

export {cartsRouter}