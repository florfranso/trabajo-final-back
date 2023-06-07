class ProductsManagerMemory{
    constructor(){
        this.productos = [];
    };

    getAll() {
        try {
            return this.productos;
        } catch (error) {
            throw new Error('No se pudieron obtener los productos')
        }
    }

    save (producto) {
        try {
            const leer = this.productos
            if (leer.length == 0) {
                const id = 1;
                const nuevoProducto = { id: id, ...producto }
                const productAdded = this.productos.push(nuevoProducto)
                return productAdded
            } else {
                const onlyIds = leer.map((producto) => producto.id)
                const largestId = Math.max.apply(Math, onlyIds);
                const id = largestId + 1;
                const nuevoProducto = { id: id, ...producto }
                const productAdded = this.productos.push(nuevoProducto)
                return productAdded
            }
        } catch (error) {
            throw new Error(`Hubo un error al crear el producto ${error.message}`)
        }
    }

    getById(id) {
        try {
            const productoPorId = this.productos.find((producto) => producto.id == id)
            return productoPorId
        } catch (error) {
            throw new Error(`Error para recuperar el producto ${error.message}`)
        }
    }

    update (id, data) {
        try {
            id = parseInt(id)
            const posicionProducto = this.productos.findIndex((producto => producto.id === id))
            let productoModificado = {id, ...datosProducto}
            this.produdctos[productoModificado] = productoModificado
        } catch (error) {
            throw new Error(`Error para actualizar el producto ${error.message}`)
        }
    }

    deleteById(id) {
        try {
            const minusOne = this.productos.filter((producto) => producto.id != id)
            this.productos = minusOne
        } catch (error) {
            throw new Error(`Error para borrar el producto ${error.message}`)
        }
    }

    deleteAll() {
        try {
            this.productos = []
        } catch (error) {
            throw new Error(`Error para borrar los productos ${error.message}`)
        }
    }
}

export {ProductsManagerMemory}