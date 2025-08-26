import express from "express";
import getAllgames from "../controllers/gameController.js";
import gameController from "../controllers/gameController.js";

const gameRoutes = express.Router();

gameRoutes.get("/games", gameController.getAllgames);

gameRoutes.post("/games", gameController.createGame)
export default gameRoutes;
