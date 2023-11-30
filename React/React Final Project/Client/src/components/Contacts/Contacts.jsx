const Contacts = () => {
  return (
    <div className="container-fluid tm-mt-60">
      <h2 style={{display:"flex", justifyContent: "center", margin: "3em auto", color:"#009999"}}>Contacts Page</h2>
      <div className="row tm-mb-50">
        <div className="col-lg-4 col-12 mb-5">
          <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Contact Us</h2>
          <form
            id="contact-form"
            action=""
            method="POST"
            className="tm-contact-form mx-auto"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control rounded-0"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control rounded-0"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="contact-select"
                name="inquiry"
              >
                <option value="-">Subject</option>
                <option value="sales">Sales &amp; Marketing</option>
                <option value="creative">Creative Design</option>
                <option value="uiux">UI / UX</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                rows={8}
                name="message"
                className="form-control rounded-0"
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-group tm-text-right">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-12 mb-5">
          <div className="tm-address-col" style={{maxWidth:"420px", margin:"0 auto"}}>
            <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Our Address</h2>
            <p className="tm-mb-50">
              Quisque eleifend mi et nisi eleifend pretium. Duis porttitor
              accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget
              vestibulum purus.{" "}
            </p>
            <p className="tm-mb-50">
              Nulla ut scelerisque elit, in fermentum ante. Aliquam congue
              mattis erat, eget iaculis enim posuere nec. Quisque risus turpis,
              tempus in iaculis.
            </p>
            <address className="tm-text-gray tm-mb-50">
              120-240 Fusce eleifend varius tempus
              <br />
              Duis consectetur at ligula 10660
            </address>
            <ul className="tm-contacts">
              <li>
                <a href="#" className="tm-text-gray">
                  <i className="fas fa-envelope" />
                  Email: info@company.com
                </a>
              </li>
              <li>
                <a href="#" className="tm-text-gray">
                  <i className="fas fa-phone" />
                  Tel: 010-020-0340
                </a>
              </li>
              <li>
                <a href="#" className="tm-text-gray">
                  <i className="fas fa-globe" />
                  URL: www.company.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Our Location</h2>
          {/* Map */}
          <div className="mapouter mb-4" style={{maxWidth:"420px", margin:"0 auto"}}>
            <div className="gmap-canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.87489454851556!2d23.377408134003822!3d42.63944492923908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86c084796deb%3A0x11ee401206e440ee!2z0LYu0LouINCc0LvQsNC00L7RgdGCIDMgMzI5LCAxNzEyIGcuay4gTWxhZG9zdCAzLCBTb2ZpYQ!5e0!3m2!1sen!2sbg!4v1701081957219!5m2!1sen!2sbg"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
