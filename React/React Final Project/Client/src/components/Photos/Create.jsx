import { useMemo, useState } from "react";
import styles from "../../style/Form.module.css";
import useForm from "../../hooks/useForm";
import { create } from "../../services/PhotoService";
import { useNavigate } from "react-router-dom";

const Create = () =>{
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const initValue = useMemo(() => ({title: "", imageUrl:"", resolution: "", format:"", license:""}), []);
    
    const createPhotoHandler = async (values) =>{
        try {
            await create(values);
            navigate("/gallery");
        } catch (error) {
            setError(error);
        }
        
    };
    
    const {formValue, onSubmit, onChange} = useForm(initValue, createPhotoHandler);
    return(
        <div className={styles.form}>
        <div className="col-lg-4 col-12 mb-5">
          <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Create New Photo</h2>
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
                Create
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
export default Create;