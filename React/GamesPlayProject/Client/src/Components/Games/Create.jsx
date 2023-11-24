import * as gameService from "../../services/gameService";
import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useMemo } from "react";

const Create = () => {
  const navigate = useNavigate();
  
  const createGameHandler = async (values) => {
    try {
      await gameService.create(values);
      navigate('/gameList');
      formValue = {title:'',category:'',maxLevel:'', imageUrl:'',summary:''};
    } catch (error) {
      return error;
    }
  }
  const initValues = useMemo(() => ({title:'',category:'',maxLevel:'',imageUrl:'',summary:''}),[]);

  const {formValue, onSubmit, onChange } = useForm(initValues, createGameHandler);

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
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
          <textarea name="summary" id="summary" value={formValue.summary} onChange={onChange} />
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
