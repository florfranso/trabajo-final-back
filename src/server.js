import express from 'express'
import {options} from './config/options.js';
import cluster from 'cluster';
import { logger } from './loggers/index.js';
import passport from 'passport';
import path from 'path'
import handlebars from 'express-handlebars'
import cookieParser from 'cookie-parser';


import session from "./config/Session/session.js";

//routers
import { productsRouter } from './routes/product.route.js';
import { userRouter } from './routes/user.routes.js'
import { cartsRouter } from './routes/carts.routes.js'
import { authRouter } from './routes/auth.routes.js'


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

//server
const app = express();
const PORT = options.server.PORT;

if (options.server.MODO === "CLUSTER" && cluster.isPrimary) {
    //modo cluster
    for (let i = 0; i < numCores; i++) {
        cluster.fork();
    };

    cluster.on("exit", (worker) => {
        console.log(`proceso ${worker.process.pid} murio`);
        cluster.fork();
    });
} else {
    //modo fork
    const server = app.listen(PORT, () => {
        logger.info(`Servidor escuchando en puerto ${JSON.stringify(PORT)} con el proceso ${process.pid}`);
    })
    server.on('error', error => {
        logger.error(`Error en el servidor ${error}`);
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('src/public'));
    app.use(session);
    


    //configuracion template engine handlebars
    app.set('views', 'src/views');
    app.engine('.hbs', handlebars.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs'); 



    //configurar passport
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cookieParser());

    app.use((req, res, next) => {
        logger.error(`${req.method} ${req.url}`)
        next()
    })
    app.use('*', (req, res, next) => {
        logger.error(`${req.method} ${req.originalUrl}- ruta no encontrada`)
        next()
    })

    //api routes
    app.use('/api/productos', productsRouter);
    app.use(authRouter);
    app.use('/api/carritos', cartsRouter);
    app.use('/api/user', userRouter);

}


