import path from 'path';
import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config()



//definir argumentos y valores por defecto
const argOptions = {alias:{m:"modo",p:"port", }, default:{modo:process.env.MODEPROD , port:process.env.PORT}};

const objArguments = minimist(process.argv.slice(2), argOptions);

const options = {

    server: {
        MODO: objArguments.modo,
        PORT: objArguments.port,
        persistence:process.env.PERSISTENCE
    },
    mongoDB: {
        url: process.env.DB_MONGO_URL
    },
}

export {options};

