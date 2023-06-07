import path from 'path';
import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config()



//definir argumentos y valores por defecto
const argOptions = {alias:{m:"modo",p:"port"}, default:{modo:"FORK", port:process.env.PORT}};

const objArguments = minimist(process.argv.slice(2), argOptions);

const options = {

    fileSystem: {
        path: ''
    },
    server: {
        MODO: objArguments.modo,
        PORT: objArguments.port,
        persistence:process.env.PERSISTENCE
    },
    mongoDB: {
        url: process.env.DB_MONGO_URL
    }
}

export {options};

/*
const options = {
    mariaDB: {
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            //password:"",
            database:"MiPrimerDB"
        }
    },
    sqliteDB:{
        client:"sqlite",
        connection:{
            filename: ("/src/files/eccomerce.sqlite")
        },
        useNullAsDefault:true
    },
    fileSystem: {
        path: '/src/files'
    },

    server:{
        MODO: objArguments.modo,
        PORT: objArguments.port
    },
    mongoDB:{
        mongoUrlSessions:process.env.DB_MONGO_URL,
    }
}
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const options = {
    fileSystem: {
        pathProducts: 'productos.json',
        pathCarts: 'carritos.json',
    },
    // mariaDB:{
    //     client:"mysql",
    //     connection:{
    //         host:"127.0.0.1",
    //         user:"root",
    //         password:"",
    //         database:"coderhousedb"
    //     }
    // },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename:path.join(__dirname , "../DB/ecommerce.sqlite")
        },
        useNullAsDefault:true
    },
    firebase:{
        serviceKey:{},
        databaseUrl:""
    },
export default options;*/