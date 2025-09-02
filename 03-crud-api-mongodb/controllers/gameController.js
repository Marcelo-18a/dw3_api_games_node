import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";
// função para listar jogos
const getAllgames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// funcão para cadastrar jogos

const createGame = async (req, res) => {
  try {
    const { title, year, genre, platform, price } = req.body;
    await gameService.Create(title, year, genre, platform, price);
    res.sendStatus(201); // recurso criado
  } catch (error) {
    console.log(error);
    res.status(500).json({ errpr: "error interno do servidor" });
  }
};
// função para deletar jogos

const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await gameService.Delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: `a ID enviada é invalida` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};
export default { getAllgames, createGame, deleteGame };
