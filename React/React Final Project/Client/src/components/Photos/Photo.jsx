import { Link } from "react-router-dom";

const Photo = ({
  title, imageUrl, _createdOn, _id
}) => {
  const createdOn = new Date(_createdOn);
  const formatedDate = createdOn.toLocaleDateString();

    return(
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className="effect-ming tm-video-item">
        <img src={imageUrl} alt="Image" className="img-fluid" />
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2>{title}</h2>
          <Link to={`/gallery/${_id}`}>View more</Link>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{formatedDate}</span>
      </div>
    </div>
    )
}

export default Photo;