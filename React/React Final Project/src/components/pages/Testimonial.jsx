const Testimonial = () =>{
    return(
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="text-center">
      <h6 className="text-primary text-uppercase">// Testimonial //</h6>
      <h1 className="mb-5">Our Clients Say!</h1>
    </div>
    <div className="owl-carousel testimonial-carousel position-relative">
      <div className="testimonial-item text-center">
        <img
          className="bg-light rounded-circle p-2 mx-auto mb-3"
          src="img/testimonial-1.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
      <div className="testimonial-item text-center">
        <img
          className="bg-light rounded-circle p-2 mx-auto mb-3"
          src="img/testimonial-2.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
      <div className="testimonial-item text-center">
        <img
          className="bg-light rounded-circle p-2 mx-auto mb-3"
          src="img/testimonial-3.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
      <div className="testimonial-item text-center">
        <img
          className="bg-light rounded-circle p-2 mx-auto mb-3"
          src="img/testimonial-4.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Testimonial;