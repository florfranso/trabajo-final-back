import MongoStore from 'connect-mongo';
import session from 'express-session';
import dotenv from 'dotenv';
import {options} from "../options.js"

dotenv.config()

const sessionStore = new MongoStore({
    mongoUrl: options.mongoDB.url,
    ttl: 6000,
})

export default session({
    store: sessionStore,
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
});

/* app.use(session({
    //definir el sistema donde vamos a almacenar las sesiones
    store: MongoStore.create({
        mongoUrl: options.mongoDB.mongoUrlSessions,
        ttl: 600
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    /* cookie: {
        maxAge: 20000 //20seg
    } 
}))*/