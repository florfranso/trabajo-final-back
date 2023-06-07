import { getProductos, saveProduct, getProductById, updateProduct, deleteProductById, deleteAllProducts } from "../services/product.service.js"
import {logger} from '../loggers/index.js'

const getProductosControllers = async (req, res) => {
    try {
        const productos = await getProductos();
        res.render('productsForm')
        //res.json({status:"success",data:productos});
    } catch (error) {
        logger.error(error);
        res.json({status:"error",message:error.message});
    }
};

const postProductosControllers = async (req, res) => {
    try {
        const producto = await saveProduct(req.body);
        res.json({status:"success", data:producto});
    } catch (error) {
        logger.error(error);
        res.json({status:"error",message:error.message});
    }
};

const getByIdProductosControllers = async (req, res) => {
    try {
        const productId = await getProductById(req.params.id);
        res.json({status:"success", data:productId});
    } catch (error) {
        logger.error(error);
        res.json({status:"error",message:error.message});
    }
};

const updateProductosControllers = async (req, res) => {
    try {
        const updateProductos = await updateProduct(req.params.id, req.body);
        res.json({status:"success", data:updateProductos});
    } catch (error) {
        logger.error(error);
        res.json({status:"error",message:error.message});
    }
};

const deleteProductByIdControllers = async (req, res) => {
    try {
        const deleteProductId = await deleteProductById(req.params.id);
        res.json({ status: "success", data: deleteProductId });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const deleteAllProductsControllers = async (req, res) => {
    try {
        const deleteProduct = await deleteAllProducts();
        res.json({ status: "success", data: deleteProduct });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

export {getProductosControllers, postProductosControllers, getByIdProductosControllers, updateProductosControllers, deleteProductByIdControllers, deleteAllProductsControllers}