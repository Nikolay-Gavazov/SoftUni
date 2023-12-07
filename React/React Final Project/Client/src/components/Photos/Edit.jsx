import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "../../style/Form.module.css";
import useForm from "../../hooks/useForm";
import * as photoService from "../../services/PhotoService";
import PageLoader from "../Shared/PageLoader";

const Edit = () =>{
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    const [photo, setPhoto] = useState({
        title: "", imageUrl:"", resolution: "", format:"", license:""
    });

    useEffect(() =>{
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
    },[]);


    
    const titleValidator = () => {
      if (formValue.title.length < 3 || formValue.title.length > 20) {
        setFormError(state => ({
          ...state,
          title: 'Title must be between 3 and 20 characters.',
        }));
      } else {
        if (formError.title) {
          setFormError(state => ({ ...state, title: '' }));
        }
      }
    };

    const urlValidator = () => {
      const urlRegex = /^(https?|ftp):\/\/[^\s\$.?#].[^\s]*$/gm;
      if (!urlRegex.test(formValue.imageUrl)) {
        setFormError(state => ({
          ...state,
          imageUrl: 'This is not a valid Image URL. Please enter a valid Image URL',
        }));
      } else {
        if (formError.imageUrl) {
          setFormError(state => ({ ...state, imageUrl: '' }));
        }
      }
    };

    const resolutionValidator = () => {
      const resulutionRegex = /^[0-9]{3,}[a-z][0-9]{3,}$/gm;
      if(!resulutionRegex.test(formValue.resolution)){
        setFormError(state => ({
          ...state,
          resolution: 'Resolution must be at least 800x800 pixels',
        }));
      }
       else {
        if (formError.resolution) {
          setFormError(state => ({ ...state, resolution: '' }));
        }
      }
    };
    const formatValidator = () => {
      if (formValue.format.length < 3) {
        setFormError(state => ({
          ...state,
          format: 'Format is Required',
        }));
      } else {
        if (formError.format) {
          setFormError(state => ({ ...state, format: '' }));
        }
      }
    };
    
    const licenseValidator = () => {
      if (formValue.license.length < 4) {
        setFormError(state => ({
          ...state,
          license: 'License is Required',
        }));
      } else {
        if (formError.license) {
          setFormError(state => ({ ...state, license: '' }));
        }
      }
    };

    const {formValue, onSubmit, onChange} = useForm(photo, editPhotoHandler);
    return(
        <div className={styles.form}>
        <div className="col-lg-4 col-12 mb-5">
        {isLoading && (<PageLoader/>)}
          <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Edit Photo</h2>
          <form id="contact-form"className="tm-contact-form mx-auto"onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text"name="title"value={formValue.title}onChange={onChange}onBlur={titleValidator}className="form-control rounded-0"placeholder="Title"/>
            </div>
            {formError.title && (
                    <p className={styles.errorMessage}>{formError.title}</p>
                  )}
            <div className="form-group">
              <input type="text"name="imageUrl"value={formValue.imageUrl}onChange={onChange}onBlur={urlValidator}className="form-control rounded-0"placeholder="https://..."/>
            </div>
            {formError.imageUrl && (
                    <p className={styles.errorMessage}>{formError.imageUrl}</p>
                  )}
            <div className="form-group">
              <input type="text"name="resolution"value={formValue.resolution}onChange={onChange} onBlur={resolutionValidator} className="form-control rounded-0"placeholder="1920x1080"/>
            </div>
            {formError.resolution && (
                    <p className={styles.errorMessage}>{formError.resolution}</p>
                  )}
            <div className="form-group">
              <input type="text"name="format"value={formValue.format}onChange={onChange} onBlur={formatValidator} className="form-control rounded-0"placeholder="JPG,PNG"/>
            </div>
            {formError.format && (
                    <p className={styles.errorMessage}>{formError.format}</p>
                  )}
            <div className="form-group">
              <input type="text"name="license"value={formValue.license}onChange={onChange} onBlur={licenseValidator} className="form-control rounded-0"placeholder="License"/>
            </div>
            {formError.license && (
                    <p className={styles.errorMessage}>{formError.license}</p>
                  )}
            <div className="form-group tm-text-right" style={{display: "flex", justifyContent: "center", gap:"1em"}}>
              <button type="submit" className="btn btn-primary" disabled={(Object.values(formError).some(x => x)
                      || (Object.values(formValue).some(x => x == '')))}>
                Edit
              </button>
              <NavLink to={`/gallery/${id}`} className="btn btn-primary">Cancel</NavLink>
            </div>
            {error && (
                <p className={styles.errorMessage}>{error}</p>
              )}
          </form>
        </div>
      </div>
    )
}
export default Edit;