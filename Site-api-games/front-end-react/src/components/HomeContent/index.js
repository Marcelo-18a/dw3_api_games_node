//importando useState;
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
//importando o axios (para enviar as requisicoes HTTP)
import { useState, useEffect } from "react";
import axios from "axios";

const HomeContent = () => {
  // Criando um estados para lista de jogos

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        // atualizando o estado com a lista de jogos
        setGames(response.data.games);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, [games]); // dependecia do useEffect

  //função de deletar
  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/games/${gameId}`
      );
      if (response.status == 204) {
        alert("O jogo foi excluido com sucesso!");
        //filtrando a lista de jogos removendo o jogo que foi excluido atravez de sua id
        setGames(games.filter((games) => game._id !== gameId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          {/* <Loading /> */}
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => (
              <ul key={game._id} className={styles.listGames}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                  <div className={styles.gameInfo}>
                    <h3>{game.title}</h3>
                    <li>Plataforma: {game.descriptions.platform}</li>
                    <li>Gênero: {game.descriptions.genre}</li>
                    <li>Classificação: {game.descriptions.rating}</li>
                    <li>Ano: {game.year}</li>
                    <li>
                      preço:
                      {game.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </li>
                    {/* botão para deletar */}
                    <button
                      className={styles.btnDel}
                      onClick={() => {
                        const confirmed = window.confirm(
                          "Deseja mesmo excluir o jogo?"
                        );
                        if (confirmed){
                          deleteGame(game._id);
                        }
                      }}
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
