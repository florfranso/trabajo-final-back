import { carritosDao } from "../daos/factory.js";

const getCarritos = async () => {
    return await carritosDao.getAll();
}

const addCarrito = async (producto) => {
    await carritosDao.guardar(producto)
    return producto;
}

const getCarritoById = async (id) => {
    const producto = await carritosDao.getById(id)
    return producto;
}

const updateCarrito = async (carrito, producto) => {
    const productoActualizado = await carritosDao.actualizar(carrito, producto);
    return productoActualizado
}

const deleteCarritoById = async (id) => {
    const productoBorrado = await carritosDao.deleteById(id);
    return productoBorrado
}

const deleteAllCarritos = async () => {
    const borrarTodo = await carritosDao.deleteAll();
    return borrarTodo
}

export { getCarritos, addCarrito, getCarritoById, updateCarrito, deleteCarritoById, deleteAllCarritos }