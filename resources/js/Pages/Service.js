import Footer from "./components/Footer";
import Header from "./components/Header";

function Service() {
    return ( 
        <>
<Header />
  {/* Page Header Start */}
  <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
    <div className="container py-5">
      <div className="row align-items-center py-4">
        <div className="col-md-6 text-center text-md-left">
          <h1 className="mb-4 mb-md-0 text-white">Our Services</h1>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <div className="d-inline-flex align-items-center">
            <a className="btn text-white" href="">
              Home
            </a>
            <i className="fas fa-angle-right text-white" />
            <a className="btn text-white disabled" href="">
              Services
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Services Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
        Our Services
      </h6>
      <h1 className="display-4 text-center mb-5">What We Offer</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-3x fa-cloud-sun text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Dry Cleaning</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fas fa-3x fa-soap text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Wash &amp; Laundry</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-3x fa-burn text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Curtain Laundry</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-3x fa-tshirt text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Suits Cleaning</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-3x fa-cloud-sun text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Dry Cleaning</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fas fa-3x fa-soap text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Wash &amp; Laundry</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-3x fa-burn text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Curtain Laundry</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
            style={{ height: 300 }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-3x fa-tshirt text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Suits Cleaning</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
        Testimonial
      </h6>
      <h1 className="display-4 text-center mb-5">Our Clients Say</h1>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="template/img/testimonial-1.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="template/img/testimonial-2.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="template/img/testimonial-3.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="template/img/testimonial-4.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
 <Footer />
</>

     );
}

export default Service;