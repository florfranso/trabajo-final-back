class UserManagerMongo{
    constructor(model){
        this.model = model;
    };

    async getAll() {
        try {
            const listarTodos = await this.model.find({});
            return listarTodos
        } catch (error) {
            throw new Error('No se pudieron obtener los usuarios')
        }
    }

    

    async getById(id) {
        try {
            const productoPorId = await this.model.findOne({id: id})
            return productoPorId
        } catch (error) {
            throw new Error(`Error para recuperar un usuario ${error.message}`)
        }
    }

    async update  (id, data) {
        try {
            await this.model.updateOne({id: id}, {$set: data})
        } catch (error) {
            throw new Error(`Error para actualizar un usuario ${error.message}`)
        }
    }

    async deleteById(id) {
        try {
            await this.model.deleteOne({id: id})
        } catch (error) {
            throw new Error(`Error para borrar un usuario ${error.message}`)
        }
    }

    async deleteAll() {
        try {
            await this.model.deleteMany({})
        } catch (error) {
            throw new Error(`Error para borrar los usuario ${error.message}`)
        }
    }
}

export {UserManagerMongo}
