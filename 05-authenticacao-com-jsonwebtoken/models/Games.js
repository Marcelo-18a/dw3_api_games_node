import mongoose from "mongoose";

//criando um documento aninhado

const descriptionSchema = mongoose.Schema({
  genre: String,
  platform : String,
  rating: String
})


const gameSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: descriptionSchema
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
