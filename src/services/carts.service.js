import { carritosDao, productDao } from "../daos/factory.js";
import { ProductDTO } from '../daos/dtos/product.dto.js'

const getCarritos = async (email) => {
    return await carritosDao.getCart(email)
}

const addCarrito = async (email) => {
    await carritosDao.crearCarrito(email)
}

const deleteCarrito = async (email) => {
    await carritosDao.borrarCarrito(email)
}

const updateCarrito = async (email, productId) => {
    const carrito = await carritosDao.getCart(email)
    const producto = await productDao.getById(productId)
    if (producto !== null) {
        carrito.productos.push(producto)
        await carritosDao.agregarProducto(email, carrito)
        return 'Producto agregado'
    } else {
        return 'Producto inexistente'
    }
}

const deleteProductFromCart = async (email, productId) => {
    const carrito = await carritosDao.getCart(email)
    const findProduct = carrito.productos.find(producto => producto.id == productId)
    if(findProduct === undefined) {
        return 'el producto no existe en el carrito'
    } else {
        const minusOneCart = carrito.productos.filter(product => product.id != productId)
        await carritosDao.deleteProduct(email, minusOneCart)
        return 'producto correctamente eliminado del carrito'
    }
    
}

const buyProductsInCart = async (email) => {
    const carrito = await carritosDao.getCart(email)
    const productos = carrito.productos
    const newProductsDTO = productos.map(product => new ProductDTO(product))
    await carritosDao.borrarCarrito(email)
    return newProductsDTO
}

export {getCarritos, addCarrito, deleteCarrito, updateCarrito, deleteProductFromCart, buyProductsInCart}