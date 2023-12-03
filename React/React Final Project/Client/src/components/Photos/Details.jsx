import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import * as photoService from "../../services/PhotoService";
import * as commentsService from "../../services/commentService";

const Details = () => {
    const [photo, setPhoto] = useState([]);
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const {userId, isAuthenticated} = useContext(AuthContext);

    useEffect(() => {
      photoService.getById(id)
      .then(setPhoto);

      commentsService.getAll(id)
      .then(setComments);
    },[id]);

    const deleteHandler = (e) => {
      e.preventDefault();
      let confirmation = false;

      confirmation = confirm(`Are you sure you want to delete your ${photo.title} photo?`);

      if(confirmation){
        photoService.del(id);
        navigate('/gallery');
      }
    };

    return(
        <div className="container-fluid tm-container-content tm-mt-60">
  <div className="row mb-4">
    <h2 className="col-12 tm-text-primary" style={{textAlign:"center"}}>{photo.title}</h2>
  </div>
  <div className="row tm-mb-90" style={{flexDirection:"column", alignItems:"center"}}>
    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12" style={{padding:0, borderRadius:"8px", overflow:"hidden", boxShadow:"0px 0px 23px 0px rgba(0,153,153,0.54)"}}>
      <img src={photo.imageUrl} alt="Image" className="img-fluid" />
    
    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12" style={{width:"100%"}}>
      <div className="tm-bg-gray tm-video-details">
        <div className="mb-4 d-flex flex-wrap" style={{justifyContent:"space-between"}}>
          <div className="mr-4 mb-2">
            <h4 className="tm-text-gray-dark">Resolution: </h4>
            <span className="tm-text-primary">{photo.resolution}</span>
          </div>
          <div className="mr-4 mb-2">
            <h4 className="tm-text-gray-dark">Format: </h4>
            <span className="tm-text-primary">{photo.format}</span>
          </div>
          <div className="mr-4 mb-2">
            <h4 className="tm-text-gray-dark">License: </h4>
            <span className="tm-text-primary">{photo.license}</span>
          </div>
        </div>
        {photo._ownerId == userId && (
          <div style={{display:"flex", justifyContent:"center", gap:"1em"}} className="ownerBtn">
          <Link to={`/gallery/${id}/edit`} className="btn btn-primary">
            Edit
          </Link>
          <button onClick={deleteHandler} className="btn btn-primary">
            Delete
          </button>
    </div>
        )}
      </div>
    </div>
    </div>
  </div>
</div>
    );
};

export default Details;