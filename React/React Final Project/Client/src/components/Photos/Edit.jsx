import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../style/Form.module.css";
import useForm from "../../hooks/useForm";
import * as photoService from "../../services/PhotoService";

const Edit = () =>{
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const [photo, setPhoto] = useState({
        title: "", imageUrl:"", resolution: "", format:"", license:""
    });

    useEffect(() =>{
        photoService.getById(id)
        .then(setPhoto);
    },[]);


    
    const editPhotoHandler = async (values) =>{
        try {
            const result = await photoService.update(values, id);
            setPhoto(result);
            navigate(`/gallery/${id}`);
        } catch (error) {
            setError(error);
        }
        
    };
    
    const {formValue, onSubmit, onChange} = useForm(photo, editPhotoHandler);
    return(
        <div className={styles.form}>
        <div className="col-lg-4 col-12 mb-5">
          <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Edit Photo</h2>
          <form id="contact-form"className="tm-contact-form mx-auto"onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text"name="title"value={formValue.title}onChange={onChange}className="form-control rounded-0"placeholder="Title"/>
            </div>
            <div className="form-group">
              <input type="text"name="imageUrl"value={formValue.imageUrl}onChange={onChange}className="form-control rounded-0"placeholder="https://..."/>
            </div>
            <div className="form-group">
              <input type="text"name="resolution"value={formValue.resolution}onChange={onChange}className="form-control rounded-0"placeholder="1920x1080"/>
            </div>
            <div className="form-group">
              <input type="text"name="format"value={formValue.format}onChange={onChange}className="form-control rounded-0"placeholder="JPG,PNG"/>
            </div>
            <div className="form-group">
              <input type="text"name="license"value={formValue.license}onChange={onChange}className="form-control rounded-0"placeholder="License"/>
            </div>
            <div className="form-group tm-text-right" style={{display: "flex", justifyContent: "center"}}>
              <button type="submit" className="btn btn-primary">
                Edit
              </button>
              {error && (
                <p>{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    )
}
export default Edit;