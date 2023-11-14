const Topbar = () =>{
    return(
        <div className="container-fluid bg-light p-0">
  <div className="row gx-0 d-none d-lg-flex">
    <div className="col-lg-7 px-5 text-start">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
        <small className="fa fa-map-marker-alt text-primary me-2" />
        <small>Mladost 3, Sofia, Bulgaria</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center py-3">
        <small className="far fa-clock text-primary me-2" />
        <small>Mon - Fri : 09.00 - 18.00</small>
      </div>
    </div>
    <div className="col-lg-5 px-5 text-end">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
        <small className="fa fa-phone-alt text-primary me-2" />
        <small>+359 888 888 888</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center">
        <a className="btn btn-sm-square bg-white text-primary me-1" href="https://www.facebook.com/">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-1" href="https://twitter.com/">
          <i className="fab fa-twitter" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-1" href="https://youtube.com/">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-0" href="https://linkedin.com/">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </div>
</div>
    )
}
export default Topbar;