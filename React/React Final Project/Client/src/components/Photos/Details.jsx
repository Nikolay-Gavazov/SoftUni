import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import * as photoService from "../../services/PhotoService";
import * as commentsService from "../../services/commentService";
import useForm from "../../hooks/useForm";
import styles from "../../style/Form.module.css";
import style from "../../style/Details.module.css";
import PageLoader from "../Shared/PageLoader";


const Details = () => {
    const [photo, setPhoto] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState('');
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const {userId, isAuthenticated, email} = useContext(AuthContext);

    useEffect(() => {
      setIsloading(true);
      photoService.getById(id)
      .then(setPhoto)
      .catch(error => {
        if(error.code === 404){
          navigate('*')
        }else{
          setError(error.message);
        }
      })
      .finally(() => setIsloading(false));

      commentsService.getAll(id)
      .then(setComments)
      .catch(error => setError(error.message));
    },[id]);

    const deleteHandler = (e) => {
      e.preventDefault();
      let confirmation = false;

      confirmation = confirm(`Are you sure you want to delete your ${photo.title} photo?`);

      if(confirmation){
       try {
        photoService.del(id);
        navigate('/gallery');
        setError('')
       } catch (error) {
        setError(error.message)
       }
      }
    };
    
    const addCommentHandler = async (values) =>{
    
      try {
        const newComment = await commentsService.create(
          id,
          email,
          values.comment,
          userId
        )
        setComments(state => [...state , newComment]);
        formValue.comment= '';
      } catch (error) {
        console.log(error);
      }
      
    };
    const initValues = useMemo(() => ({
      comment: '',
    }), [])
  
    const {formValue, onSubmit, onChange } = useForm(initValues, addCommentHandler);
  

    return(
      <>
        <div className="container-fluid tm-container-content tm-mt-60">
  <div className="row mb-4">
    <h2 className="col-12 tm-text-primary" style={{textAlign:"center"}}>{photo.title}</h2>
  </div>
  <div className="row tm-mb-90" style={{flexDirection:"column", alignItems:"center"}}>
    <div className={style.details} >
      <img src={photo.imageUrl} alt="Image" className="img-fluid" />
    
    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12" style={{width:"100%"}}>
      <div className="tm-bg-gray tm-video-details">
      {isLoading && (<PageLoader/>)}
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
          <div className="details-comments" >
          <h2 style={{margin:"1.5em auto", color:" #009999", textAlign:"center"}}>Comments:</h2>
          <ul className={style.commentUl}>
            {comments.map(({email, text, _id}) => (
              <li className={style.comment} key={_id}>
              <p className={style.commentP}>{email}: " {text} "</p>
            </li>
            ))}
          </ul>
          {comments.length === 0 &&(
            <p className={style.noComments}>No comments.</p>
          )}
        </div>
        
        {photo._ownerId == userId ? (
          <div style={{display:"flex", justifyContent:"center", gap:"1em"}} className="ownerBtn">
          <Link to={`/gallery/${id}/edit`} className="btn btn-primary">
            Edit
          </Link>
          <button onClick={deleteHandler} className="btn btn-primary">
            Delete
          </button>
    </div>
        ): 
        isAuthenticated && (
          <div className={styles.form}>
          <article className={style.create}>
        <form className="tm-contact-form mx-auto" onSubmit={onSubmit}>
        <label className="mb-4" style={{color:"white"}}>Add new comment:</label>
        <div className="form-group">
          <textarea name="comment" style={{resize:"none"}} className="form-control rounded-0" placeholder="Comment......" value={formValue.comment} onChange={onChange}/>
        </div>
          <div className="form-group tm-text-right" style={{display: "flex", justifyContent: "center"}}>
          <input className="btn btn-primary" type="submit" defaultValue="Add Comment" />
          </div>
        </form>
        {error && (
                <p className={styles.errorMessage}>{error}</p>
              )}
      </article>
      </div>
        )}
      </div>
    </div>
    </div>
  </div>
</div>
</>
    );
};

export default Details;