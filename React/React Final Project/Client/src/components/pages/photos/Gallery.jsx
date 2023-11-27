import Photo from "./Photo";

const Gallery = () => {
    return(
      <div className="container-fluid tm-container-content tm-mt-60">
      <div className="row mb-4">
      <h2 className="col-6 tm-text-primary">Gallery</h2>
      <div className="row tm-mb-90 tm-gallery">
        <Photo/>
      </div>
      </div>
      </div>
    )
}

export default Gallery;