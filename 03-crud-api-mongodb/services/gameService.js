import Game from "../models/Games.js";

// O service será responsável por conter os métodos de manipulação do banco.
class gameService {
  // buscando os registros do banco
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, year, genre, platform, price) {
    try {
      const newGame = new Game({
        title,
        year,
        genre,
        platform,
        price,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  // Deletando registro no banco
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi deletado com sucesso!`);
    } catch (error){
      console.log(error);
    }
  }
}
export default new gameService();
