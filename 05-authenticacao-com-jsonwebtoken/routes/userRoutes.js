import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

//rota para cadastrar o usuario
userRoutes.post("/user", userController.createUser);

export default userRoutes;
