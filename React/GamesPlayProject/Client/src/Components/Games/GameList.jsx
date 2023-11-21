import { useEffect, useState } from "react";
import Game from "./Game";
import { getAll } from "../../services/gameService";

const GameList = () => {
    const [games, setGames] = useState([]);
    useEffect(() =>{
      getAll()
        .then(setGames)
    }, []);
    const onChangeHandler = (id) => {
      setGames(state => state.filter(games => games._id != id));
    };
    
    return(
      <section id="catalog-page">
      <h1>All Games</h1>
      {games.map(game => <Game key={game._id} {...game}/>)}

      {games.length === 0 &&(
        <h3 className="no-articles">No articles yet</h3>
        )}
    </section>
    );
};

export default GameList;