
const LatestPhotos = () =>{
    return(
      <div className="row mb-4">
      <h2 className="col-6 tm-text-primary">Latest Photos</h2>
      <div className="col-6 d-flex justify-content-end align-items-center">
        <form action="" className="tm-text-primary">
          Page{" "}
          <input
            type="text"
            defaultValue={1}
            size={1}
            className="tm-input-paging tm-text-primary"
          />{" "}
          of 200
        </form>
      </div>
    </div>
    )
}

export default LatestPhotos;