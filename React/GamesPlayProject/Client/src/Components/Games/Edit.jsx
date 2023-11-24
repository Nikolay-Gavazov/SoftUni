import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as gameService from "../../services/gameService";
import useForm from "../../hooks/useForm";

const Edit = () => {
  const { id } = useParams();
  const [game, setGame] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getById(id).then((result) => setGame(result));
  }, []);

  const editGameHandler = async (values) => {
    try {
      const result = await gameService.update(values, id);
      setGame(result);
      navigate(`/gameList/${id}`);
    } catch (error) {
      return error;
    }
  };

  const { formValue, onSubmit, onChange } = useForm(game, editGameHandler);

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <input
            type="text"
            id="title"
            name="title"
            value={formValue.title}
            onChange={onChange}
            placeholder="Enter game title..."
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formValue.category}
            onChange={onChange}
            placeholder="Enter game category..."
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            value={formValue.maxLevel}
            onChange={onChange}
            min={1}
            placeholder={1}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formValue.imageUrl}
            onChange={onChange}
            placeholder="Upload a photo..."
          />
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={formValue.summary}
            onChange={onChange}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Edit Game"
          />
        </div>
      </form>
    </section>
  );
};

export default Edit;
