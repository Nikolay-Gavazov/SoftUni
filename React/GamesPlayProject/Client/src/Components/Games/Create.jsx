import * as gameService from "../../services/gameService";
import useForm from "../../hooks/useForm";

const Create = () => {
  
  const {formValue,onGameSubmitHandler, onChangeHandler } = useForm({title:'',category:'',maxLevel:1, imageUrl:'',summary:''}, gameService.create);

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onGameSubmitHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValue.title}
            onChange={onChangeHandler}
            placeholder="Enter game title..."
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formValue.category}
            onChange={onChangeHandler}
            placeholder="Enter game category..."
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            value={formValue.maxLevel}
            onChange={onChangeHandler}
            min={1}
            placeholder={1}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formValue.imageUrl}
            onChange={onChangeHandler}
            placeholder="Upload a photo..."
          />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" value={formValue.summary} onChange={onChangeHandler} />
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
