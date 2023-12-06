import { useEffect, useState } from "react";
import Photo from "./PhotoItem";
import { getAll } from "../../services/PhotoService";
import PageLoader from "../Shared/PageLoader";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() =>{
      setIsloading(true);
      getAll()
      .then(setPhotos)
      .catch(error => {
        if(error.code === 404){
          navigate('*')
        }else{
          setError(error.message);
        }
      })
      .finally(() => setIsloading(false));
    },[]);

    return(
      <div className="container-fluid tm-container-content tm-mt-60">
        {isLoading && (<PageLoader/>)}
      <h2 className="col-6 tm-text-primary" style={{margin:"1em 0"}}>Gallery</h2>
      <div className="row mb-4" style={{justifyContent:"center"}}>
      <div className="row tm-mb-90 tm-gallery">
        {photos.map(photo => <Photo key={photo._id} {...photo}/>)}
      </div>
      </div>
      </div>
    )
}

export default Gallery;