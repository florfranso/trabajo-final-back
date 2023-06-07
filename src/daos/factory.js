import { options } from "../config/options.js";
import { ConnectDB } from '../config/dbConecction.js';



let userDao;
let productDao;
let carritosDao;

switch (options.server.persistence) {
    case "mongo":
        const firtsConnection = ConnectDB.getInstance();
        const secondConnection = ConnectDB.getInstance();

        const { UserManagerMongo } = await import("./managers/user/userManagerMongo.js");
        const { UserModel } = await import("./dbModels/user.model.js");

        const { ProductsManagerMongo } = await import('./managers/product/productsManagerMongo.js');
        const { ProductModel } = await import('./dbModels/product.models.js');

        const { CarritosManagerMongo } = await import('./managers/cart/carritosManagerMongo.js');
        const { CarritoModel } = await import('./dbModels/cart.models.js');

        productDao = new ProductsManagerMongo(ProductModel);
        carritosDao = new CarritosManagerMongo(CarritoModel);
        userDao = new UserManagerMongo(UserModel);
        break;

    case "memory":
        const { UserManagerMemory } = await import("./managers/user/userManagerMemory.js");
        const { CarritosManagerMemory } = await import("./managers/cart/carritosManagerMemory.js");
        const { ProductsManagerMemory } = await import("./managers/product/productsManagerMemory.js")

        userDao = new UserManagerMemory();
        productDao = new ProductsManagerMemory();
        carritosDao = new CarritosManagerMemory();
        break;

    default:
        break;

}

export { userDao, productDao, carritosDao };