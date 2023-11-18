import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as gameService from "../../services/gameService";
const Edit = () => {
  const navigate = useNavigate();
  const [game, setGame] = useState([]);
  const {id} = useParams();
  useEffect(() =>{
    gameService.getById(id).then(result => setGame(result));
  },[id]);

  const editGameHandler = async (e) =>{
    e.preventDefault();
    const gameData = Object.fromEntries(new FormData(e.currentTarget));
    
    try {
      await gameService.update(gameData, id);
      navigate(`/gameList/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
    return(
      <section id="edit-page" className="auth">
      <form id="edit" onSubmit={editGameHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" defaultValue={game.title} />
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" defaultValue={game.category} />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            defaultValue={game.maxLevel}
          />
          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" defaultValue={game.summary} />
          <input className="btn submit" type="submit" defaultValue="Edit Game" />
        </div>
      </form>
    </section>
    );
};

export default Edit;