import { useEffect, useState } from "react";
import Photo from "./Photo";
import { getAll } from "../../services/PhotoService";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() =>{
      getAll()
      .then(setPhotos);
    },[]);

    return(
      <div className="container-fluid tm-container-content tm-mt-60">
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