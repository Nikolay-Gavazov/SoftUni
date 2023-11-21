const Contacts = () => {
  return (
    <div className="container-fluid tm-mt-60">
  <div className="row tm-mb-50">
    <div className="col-lg-4 col-12 mb-5">
      <h2 className="tm-text-primary mb-5">Contact Page</h2>
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
          <select className="form-control" id="contact-select" name="inquiry">
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
      <div className="tm-address-col">
        <h2 className="tm-text-primary mb-5">Our Address</h2>
        <p className="tm-mb-50">
          Quisque eleifend mi et nisi eleifend pretium. Duis porttitor accumsan
          arcu id rhoncus. Praesent fermentum venenatis ipsum, eget vestibulum
          purus.{" "}
        </p>
        <p className="tm-mb-50">
          Nulla ut scelerisque elit, in fermentum ante. Aliquam congue mattis
          erat, eget iaculis enim posuere nec. Quisque risus turpis, tempus in
          iaculis.
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
      <h2 className="tm-text-primary mb-5">Our Location</h2>
      {/* Map */}
      <div className="mapouter mb-4">
        <div className="gmap-canvas">
          <iframe
            width="100%"
            height={520}
            id="gmap-canvas"
            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Contacts;