class CarritosManagerMemory {
    constructor() {
        this.elementos = []
    }

    getAll() {
        try {
            return this.elementos
        } catch (error) {
            throw new Error('No se pudieron obtener los carritos')
        }
    }

    guardar() {
        try {
            const leer = this.elementos;
            if (leer.length == 0) {
                const id = 1;
                const nuevoCarrito = { id: id }
                this.elementos.push(nuevoCarrito)
                return id
            } else {
                const onlyIds = leer.map((carrito) => carrito.id)
                const largestId = Math.max.apply(Math, onlyIds);
                const id = largestId + 1;
                const nuevoCarrito = { id: id }
                this.elementos.push(nuevoCarrito)
                return id
            }
        } catch (error) {
            throw new Error(`Hubo un error al crear el carrito ${error.message}`)
        }
    }

    getById(id) {
        try {
            const carritoPorId = this.elementos.find((carrito) => carrito.id == id)
            return carritoPorId
        } catch (error) {
            throw new Error(`Error para recuperar el carrito ${error.message}`)
        }
    }

    actualizar(id, producto) {
        try {
            const posicionCarrito = this.elementos.findIndex((carrito) => carrito.id == id.id)
            let carritoModificado = {id, ...producto}
            this.elementos[posicionCarrito] = carritoModificado
        } catch (error) {
            throw new Error(`Error para actualizar el carrito ${error.message}`)
        }
    }

    deleteById(id) {
        try {
            const minusOne = this.elementos.filter((producto) => producto.id != id)
            this.elementos = minusOne
        } catch (error) {
            throw new Error(`Error para borrar el carrito ${error.message}`)
        }
    }

    deleteAll() {
        try {
            this.elementos = []
        } catch (error) {
            throw new Error(`Error para borar los carritos ${error.message}`)
        }
    }
}

export {CarritosManagerMemory}