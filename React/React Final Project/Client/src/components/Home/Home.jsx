import { useEffect, useState } from "react"
import Photo from "../photos/Photo";
import { getLatest } from "../../services/PhotoService";

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() =>{
        getLatest()
        .then(setPhotos);
    },[]);
    return(
        <div className="container-fluid tm-container-content tm-mt-60">
        <div>
        <h1 style={{color:"#009999", margin:"2em 0", textAlign:"center"}}>Unlock Creativity with Endless Visual Inspiration – Where Every Image Tells a Story, and It's All Yours for Free!</h1>
      </div>
      <h2 className="col-6 tm-text-primary" style={{margin:"1em 0"}}>Latest Photos</h2>
      <div className="row mb-4" style={{justifyContent:"center"}}>
      <div className="row tm-mb-90 tm-gallery">
        {photos.map(photo => <Photo key={photo._id} {...photo}/>)}
      </div>
    </div>
        </div>
    );
};
export default Home;