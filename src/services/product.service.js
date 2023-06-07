import { productDao } from "../daos/factory.js";
import { ProductDTO } from "../daos/dtos/product.dto.js";

const getProductos = async () => {
    const product = await productDao.getAll();
    const newProductDto = product.map(producto=>new ProductDTO(producto));
    return newProductDto;
}

const saveProduct = async (producto) => {
    return await productDao.save(producto) 
}

const getProductById = async (id) => {
    const producto = await productDao.getById(id)
    return producto;
}

const updateProduct = async (id, data) => {
    const productoActualizado = await productDao.update(id, data);
    return productoActualizado
}

const deleteProductById = async (id) => {
    const productoBorrado = await productDao.deleteById(id);
    return productoBorrado
}

const deleteAllProducts = async () => {
    const borrarTodo = await productDao.deleteAll();
    return borrarTodo
}

export {getProductos, saveProduct, getProductById, updateProduct, deleteProductById, deleteAllProducts}