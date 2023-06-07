import mongoose from 'mongoose';
import { options } from './options.js';
import { logger } from "../loggers/index.js";


class ConnectDB {
    static #instance;

    constructor() {
        mongoose.connect(options.mongoDB.url)
    }

    static async getInstance() {
        if (ConnectDB.#instance) {
            logger.info('Base de datos ya conectada')
            return ConnectDB.#instance
        }
        this.#instance = new ConnectDB();
        logger.info('Base de datos conectada')
        return this.#instance;
    }
}

export { ConnectDB }
