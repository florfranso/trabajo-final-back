import express from 'express';

import {getUsersController, postUserController,getUserByIdController,deleteUserByIdController,updateUserController, deleteAllUserController} from "../controllers/user.controller.js"


const userRouter = express.Router();

userRouter.get("/", getUsersController);
userRouter.post("/", postUserController);
userRouter.get("/:id", getUserByIdController);
userRouter.delete("/id", deleteUserByIdController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/", deleteAllUserController);


export {userRouter}
