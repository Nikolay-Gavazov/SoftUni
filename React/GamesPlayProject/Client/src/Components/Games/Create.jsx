import { useNavigate } from "react-router-dom";
import * as gameService from "../../services/gameService";

const Create = () => {
  const navigate = useNavigate();
  const createGameHandler = async (e) =>{
    e.preventDefault();
    const gameData = Object.fromEntries(new FormData(e.currentTarget));
    
    try {
      await gameService.create(gameData);
      navigate('/gameList');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createGameHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            placeholder={1}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" defaultValue={""} />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Create Game"
          />
        </div>
      </form>
    </section>
  );
};

export default Create;
