import express from 'express';
import { getCarritosControllers, postCarritosControllers, getByIdCarritosControllers, updateCarritosControllers, deleteCarritoByIdControllers, deleteAllCarritosControllers } from '../controllers/carts.controller.js';

const cartsRouter = express.Router();


cartsRouter.get('/', getCarritosControllers)
cartsRouter.post('/', postCarritosControllers)
cartsRouter.get('/:id', getByIdCarritosControllers)
cartsRouter.put('/:id/productos', updateCarritosControllers)
cartsRouter.delete('/:id', deleteCarritoByIdControllers)
cartsRouter.delete('/', deleteAllCarritosControllers)

export {cartsRouter}