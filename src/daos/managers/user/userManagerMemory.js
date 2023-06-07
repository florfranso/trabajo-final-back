class UserManagerMemory{
    constructor(){
        this.users = [
            {
                name:"pepe",
                lastname:"perez",
                age:23
            }
        ];
    };

    async create(user){
        this.users.push(user);
    };

    async getAll(){
        return this.users;
    };

    async getById(id){};
}

export {UserManagerMemory}