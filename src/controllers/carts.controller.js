import { getCarritos, addCarrito, getCarritoById, updateCarrito, deleteCarritoById, deleteAllCarritos } from "../services/carts.service.js"
import { getProductById } from "../services/product.service.js"
import { logger } from '../loggers/index.js'


const getCarritosControllers = async (req, res) => {
    try {
        const carritos = await getCarritos();
        res.json({ status: "success", data: carritos });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", message: error.message });
    }
};


const postCarritosControllers = async (req, res) => {
    try {
        const nuevoCarrito = await addCarrito(req.body);
        res.json({ status: "success", data: nuevoCarrito });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const getByIdCarritosControllers = async (req, res) => {
    try {
        const carritoId = await getCarritoById(req.params.id);
        res.json({ status: "success", data: carritoId });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const updateCarritosControllers = async (req, res) => {
    try {
        const id = req.params.id
        id = parseInt(id)
        const carrito = await getCarritoById(id)
        let productoId = req.body.id
        const producto = await getProductById(productoId)
        await updateCarrito(carrito, producto)
        res.json({ status: "success", data: id });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};


const deleteCarritoByIdControllers = async (req, res) => {
    try {
        const id = await deleteCarritoById(req.params.id);
        res.json({ status: "success", data: id });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};


const deleteAllCarritosControllers = async (req, res) => {
    try {
        const deleteCarritos = await deleteAllCarritos();
        res.json({ status: "success", data: deleteCarritos });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};



export { getCarritosControllers, postCarritosControllers, getByIdCarritosControllers, updateCarritosControllers, deleteCarritoByIdControllers, deleteAllCarritosControllers }