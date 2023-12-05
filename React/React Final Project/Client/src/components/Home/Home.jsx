import { useEffect, useState } from "react"
import Photo from "../Photos/PhotoItem";
import { getLatest } from "../../services/PhotoService";
import PageLoader from "../Shared/PageLoader";

const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() =>{
        setIsloading(true);
        getLatest()
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