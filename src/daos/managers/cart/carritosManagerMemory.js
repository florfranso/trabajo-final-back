class CarritosManagerMemory {
    constructor() {
        this.carrito = { email: String, productos: [] }
        this.newCarrito = {}
    }

    crearCarrito(userEmail) {
        const newCarrito = this.carrito
        newCarrito.email = userEmail
        this.newCarrito = newCarrito
    }

    agregarProducto(email, addOneCart) {
        this.newCarrito = {email: email, productos: addOneCart}
    }

    deleteProduct(email, deleteOneCart) {
        this.newCarrito.productos = deleteOneCart
        this.carrito = this.newCarrito
    }

    getCart(email) {
        if(this.carrito.email == email) {
            return this.carrito
        }
    }

    borrarCarrito(email) {
        this.carrito = { email: String, productos: [] }
        this.newCarrito = {}
    }
}

export { CarritosManagerMemory }


