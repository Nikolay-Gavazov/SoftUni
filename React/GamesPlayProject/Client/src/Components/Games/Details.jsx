import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";

const Details = () => {
  const [game, setGame] = useState([]);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(() =>{
    gameService.getById(id)
    .then(setGame);

    commentService.getAll(id)
    .then(setComments);

  },[id]);

  const deleteHandler = (e) =>{
    e.preventDefault();
    let confirmation = false;

    confirmation = confirm("Are you sure you want to delete this game");

    if(confirmation){
      gameService.del(id);
      navigate('/')
    }
  }

  const addCommentHandler = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    try {
      const newComment = await commentService.create(
        id,
        formData.get('username'),
        formData.get('comment'),
      )
      setComments(state=> [...state , newComment]);
      console.log(formData.values);
    } catch (error) {
      console.log(error);
    }
    
  };
    return(
      <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        {/* Bonus ( for Guests and Users ) */}
        
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* list all comments for current game (If any) */}
            {comments.map(({username, text, _id}) => (
              <li className="comment" key={_id}>
              <p>{username}: {text}</p>
            </li>
            ))}
          </ul>
          {comments.length === 0 &&(
            <p className="no-comment">No comments.</p>
          )}
        </div>

        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <Link to={`/gamelist/${id}/edit`} className="button">
            Edit
          </Link>
          <a onClick={deleteHandler} className="button">
            Delete
          </a>
        </div>
      </div>

      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input type="text" name="username"  placeholder="username"/>
          <textarea name="comment" placeholder="Comment......" defaultValue={""} />
          <input className="btn submit" type="submit" defaultValue="Add Comment" />
        </form>
      </article>
    </section>
    );
};

export default Details;