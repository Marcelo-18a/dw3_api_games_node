import express from "express";
import mongoose from "mongoose";
const app = express();
import Game from "./models/Games.js";


//config do express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Iniciando a conexão com o banco de dados do MongoBD

mongoose.connect("mongodb://127.0.0.1:27017/api-thegames")

// criando um retorno da API
app.get("/", (req, res) => {
  const games = [
    {
      title: "Delta",
      year: 2024,
      genero: "FPS",
      platform: "PC (Windows)",
      price: 0,
    },
    {
      title: "Diablo III",
      year: 2009,
      genero: "RPG",
      platform: "PC (Windows)",
      price: 150,
    },
    {
      title: "League of Legends",
      year: 2009,
      genero: "MOBA",
      platform: "PC (Windows)",
      price: 0,
    },
  ];
  res.json(games);
});

//rodando a api na porta 4000

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log();
  }
  console.log(`API rodando em http://localhost:${port}.`);
});
