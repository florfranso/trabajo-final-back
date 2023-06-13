import { logger } from "../loggers/index.js";
import { getUsers, getUserById, deleteUser, updateUser, deleteUserById } from "../services/user.service.js"
import passport from "passport";
import { transporter, adminEmail } from '../config/Messages/gmail.js'

const getUsersController = async (req, res) => {
    try {
        const users = await getUsers();
        res.json({ status: "success", data: users });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const postUserController = async (req, res) => {
    try {
        const user = await saveUser(req.body);
        res.json({ status: "success", data: user });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.json({ status: "success", data: user });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const deleteUserByIdController = async (req, res) => {
    try {
        const user = await deleteUserById(req.params.id);
        res.json({ status: "success", data: user });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const updateUserController = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.json({ status: "success", data: user });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const deleteAllUserController = async (req, res) => {
    try {
        const user = await deleteUser();
        res.json({ status: "success", data: user });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
};

const authLogin = async (req, res) => {
    try {
        res.redirect('/login');
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authRegister = async (req, res) => {
    try {
        const errorMsg = req.session.messages ? req.session.messages[0] : '';
        res.render('registro', { error: errorMsg });
        req.session.messages = [];
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authRegisterError = async (req, res) => {
    try {
        res.render('registro-error')
        res.json({ status: "usuario no registrado" });
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authLoginEnter = async (req, res) => {
    try {
        res.render('login')
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authLoginAutenticate = async (req, res) => {
    try {
        passport.authenticate('loginStrategy',
            {
                successRedirect: 'perfil',
                failureMessage: true,
                failureRedirect: 'login-error'
            })
    } catch (error) {
        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}


const authPerfil = async (req, res) => {
    try {
        const user = {
            nombre: req.user.name,
            celular: req.user.phone,
            avatar: req.user.avatar
        }
        res.render('perfil', { datos: user })
    } catch (error) {

        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authHome = async (req, res) => {
    try {
        const user = {
            nombre: req.user.name,

        }
        res.render('home', { datos: user });
    } catch (error) {

        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authLoginError = async (req, res) => {
    try {
        res.render('login-error');
    } catch (error) {

        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authLogout = async (req, res) => {
    try {
        req.session.destroy(err => {
            if (err) {
                throw err
            } const user = {
                nombre: req.user.name,
            }
            res.render('logout', { datos: user })
        })
    } catch (error) {

        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}

const authRegisterPost = async (req, res) => {
    try {
        passport.authenticate(saveUser,
            {
                failureRedirect: 'registro-error',
                failureMessage: true
            }), async (req, res) => {
                res.redirect("perfil")
                const emailTemplate = `<div>
                    <h1>Datos del usuario</h1>
                    <p>Email: ${req.body.email}</p>
                    <p>Nombre: ${req.body.name}</p>
                    <p>Dirección: ${req.body.address}</p>
                    <p>Edad: ${req.body.age}</p>
                    <p>Teléfono: ${req.body.phone}</p>
                    <p>Avatar: ${req.body.avatar}</p>
                    </div>`;
                const mailOptions = {
                    from: 'servidor node',
                    to: adminEmail,
                    subject: 'Nuevo usuario registrado',
                    html: emailTemplate
                };
                try {
                    await transporter.sendMail(mailOptions)
                } catch (error) {
                    logger.error(error)
                }
            }
    } catch (error) {

        logger.error(error);
        res.json({ status: "error", message: error.message });
    }
}


export { getUsersController, postUserController, updateUserController, deleteUserByIdController, getUserByIdController, deleteAllUserController, authLogin, authRegister, authRegisterError, authLoginEnter, authLoginAutenticate, authPerfil, authHome, authLoginError, authLogout, authRegisterPost }