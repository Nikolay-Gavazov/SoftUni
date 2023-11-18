import { Link } from "react-router-dom";

const Game = ({
  title,
  category,
  _id,
  imageUrl
}) => {
    return(
        <div className="allGames">
        <div className="allGames-info">
          <img src={imageUrl} />
          <h6>{title}</h6>
          <h2>{category}</h2>
          <Link to={`/gameList/${_id}`} className="details-button">
            Details
          </Link>
        </div>
      </div>
    );
};

export default Game;