const Service = () => {
    return(
    <div className="container-xxl service py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-primary text-uppercase">// Our Services //</h6>
        <h1 className="mb-5">Explore Our Services</h1>
      </div>
      <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-lg-4">
          <div className="nav w-100 nav-pills me-4">
            <button
              className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
              data-bs-toggle="pill"
              data-bs-target="#tab-pane-1"
              type="button"
            >
              <i className="fa fa-car-side fa-2x me-3" />
              <h4 className="m-0">Diagnostic Test</h4>
            </button>
            <button
              className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
              data-bs-toggle="pill"
              data-bs-target="#tab-pane-2"
              type="button"
            >
              <i className="fa fa-car fa-2x me-3" />
              <h4 className="m-0">Engine Servicing</h4>
            </button>
            <button
              className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
              data-bs-toggle="pill"
              data-bs-target="#tab-pane-3"
              type="button"
            >
              <i className="fa fa-cog fa-2x me-3" />
              <h4 className="m-0">Tires Replacement</h4>
            </button>
            <button
              className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
              data-bs-toggle="pill"
              data-bs-target="#tab-pane-4"
              type="button"
            >
              <i className="fa fa-oil-can fa-2x me-3" />
              <h4 className="m-0">Oil Changing</h4>
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tab-content w-100">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: 350 }}>
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src="img/service-1.jpg"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-3">
                    15 Years Of Experience In Auto Servicing
                  </h3>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                    sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Quality Servicing
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Expert Workers
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Modern Equipment
                  </p>
                  <a href="" className="btn btn-primary py-3 px-5 mt-3">
                    Read More
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-2">
              <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: 350 }}>
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src="img/service-2.jpg"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-3">
                    15 Years Of Experience In Auto Servicing
                  </h3>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                    sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Quality Servicing
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Expert Workers
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Modern Equipment
                  </p>
                  <a href="" className="btn btn-primary py-3 px-5 mt-3">
                    Read More
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-3">
              <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: 350 }}>
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src="img/service-3.jpg"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-3">
                    15 Years Of Experience In Auto Servicing
                  </h3>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                    sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Quality Servicing
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Expert Workers
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Modern Equipment
                  </p>
                  <a href="" className="btn btn-primary py-3 px-5 mt-3">
                    Read More
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-4">
              <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: 350 }}>
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src="img/service-4.jpg"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-3">
                    15 Years Of Experience In Auto Servicing
                  </h3>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                    sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Quality Servicing
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Expert Workers
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-3" />
                    Modern Equipment
                  </p>
                  <a href="" className="btn btn-primary py-3 px-5 mt-3">
                    Read More
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Service;