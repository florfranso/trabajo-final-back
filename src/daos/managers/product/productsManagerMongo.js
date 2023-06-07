class ProductsManagerMongo{
    constructor(model){
        this.model = model;
    };

    async getAll() {
        try {
            const listarTodos = await this.model.find({});
            return listarTodos
        } catch (error) {
            throw new Error('No se pudieron obtener los productos')
        }
    }

    async save(producto) {
        try {
            const leer = await this.model.find();
            if (leer.length == 0) {
                const id = 1;
                const nuevoProducto = { id: id, ...producto }
                const productAdded = await this.model.create(nuevoProducto)
                return productAdded
            } else {
                const onlyIds = leer.map((producto) => producto.id)
                const largestId = Math.max.apply(Math, onlyIds);
                const id = largestId + 1;
                const nuevoProducto = { id: id, ...producto }
                const productAdded = await this.model.create(nuevoProducto)
                return productAdded
            }
        } catch (error) {
            throw new Error(`Hubo un error al crear el producto ${error.message}`)
        }
    }

    async getById(id) {
        try {
            const productoPorId = await this.model.findOne({id: id})
            return productoPorId
        } catch (error) {
            throw new Error(`Error para recuperar el producto ${error.message}`)
        }
    }

    async update  (id, data) {
        try {
            await this.model.updateOne({id: id}, {$set: data})
        } catch (error) {
            throw new Error(`Error para actualizar el producto ${error.message}`)
        }
    }

    async deleteById(id) {
        try {
            await this.model.deleteOne({id: id})
        } catch (error) {
            throw new Error(`Error para borrar el producto ${error.message}`)
        }
    }

    async deleteAll() {
        try {
            await this.model.deleteMany({})
        } catch (error) {
            throw new Error(`Error para borrar los productos ${error.message}`)
        }
    }
}

export {ProductsManagerMongo}
