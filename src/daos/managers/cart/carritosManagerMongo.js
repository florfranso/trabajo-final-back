class CarritosManagerMongo{
    constructor(model){
        this.model = model;
    };

    async getAll() {
        try {
            const listarTodos = await this.model.find({});
            return listarTodos
        } catch (error) {
            throw new Error('No se pudieron obtener los carritos')
        }
    }

    async save () {
        try {
            const leer = await this.model.find();
            if (leer.length == 0) {
                const id = 1;
                const nuevoCarrito = { id: id }
                await this.model.create(nuevoCarrito)
                return id
            } else {
                const onlyIds = leer.map((carrito) => carrito.id)
                const largestId = Math.max.apply(Math, onlyIds);
                const id = largestId + 1;
                const nuevoCarrito = { id: id }
                await this.model.create(nuevoCarrito)
                return id
            }
        } catch (error) {
            throw new Error(`Hubo un error al crear el carrito ${error.message}`)
        }
    }

    async getById(id) {
        try {
            const productoPorId = await this.model.findOne({id: id})
            return productoPorId
        } catch (error) {
            throw new Error(`Error para recuperar el carrito ${error.message}`)
        }
    }

    async update (carrito, producto) {
        try {
            carrito.productos.push(producto)
            await this.model.updateOne({id: carrito.id}, {$set: carrito})
        } catch (error) {
            throw new Error(`Error para actualizar el carrito ${error.message}`)
        }
    }

    async deleteById(id) {
        try {
            await this.model.deleteOne({id: id})
        } catch (error) {
            throw new Error(`Error para borrar el carrito ${error.message}`)
        }
    }

    async deleteAll() {
        try {
            await this.model.deleteMany({})
        } catch (error) {
            throw new Error(`Error para borar los carritos ${error.message}`)
        }
    }
}

export {CarritosManagerMongo}