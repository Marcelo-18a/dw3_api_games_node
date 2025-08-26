import gameService from "../services/gameService.js";
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

export default { getAllgames, createGame };
