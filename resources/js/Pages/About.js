import Footer from "./components/Footer";
import Header from "./components/Header";

function About() {
    return ( 
        <>
<Header />
  {/* Page Header Start */}
  <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
    <div className="container py-5">
      <div className="row align-items-center py-4">
        <div className="col-md-6 text-center text-md-left">
          <h1 className="mb-4 mb-md-0 text-white">About Us</h1>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <div className="d-inline-flex align-items-center">
            <a className="btn text-white" href="">
              Home
            </a>
            <i className="fas fa-angle-right text-white" />
            <a className="btn text-white disabled" href="">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header Start */}
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img className="img-fluid" src="template/img/about.jpg" alt="" />
        </div>
        <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
          <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
            Learn About Us
          </h6>
          <h1 className="mb-4">We Are Quality Laundry Provider In Your City</h1>
          <h5 className="font-weight-medium font-italic mb-4">
            Clita sit et ipsum sed. Volup duo sea dolor rebum ea rebum kasd
            stet. Dolor at duo dolor sit stet.
          </h5>
          <p className="mb-2">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <div className="row">
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">
                  Quality Laundry Service
                </p>
              </div>
            </div>
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">
                  Express Fast Delivery
                </p>
              </div>
            </div>
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">
                  Highly Professional Staff
                </p>
              </div>
            </div>
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">
                  100% Satisfaction Gguarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Working Process Start */}
  <div className="container-fluid pt-5">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
        Working Process
      </h6>
      <h1 className="display-4 text-center mb-5">How We Work</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">1</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Order Place</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">2</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Free Pick Up</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">3</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Dry Cleaning</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">4</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Free Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Working Process End */}
  {/* Features Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
          <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
            Our Features
          </h6>
          <h1 className="mb-4">Why Choose Us</h1>
          <p>
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">
                10
              </h1>
              <h5 className="font-weight-bold">Years Expereince</h5>
            </div>
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">
                250
              </h1>
              <h5 className="font-weight-bold">Expert Worker</h5>
            </div>
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">
                1250
              </h1>
              <h5 className="font-weight-bold">Happy Clients</h5>
            </div>
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">
                9550
              </h1>
              <h5 className="font-weight-bold">Dry Cleaning</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
            <i className="fa fa-5x fa-certificate text-white mb-5" />
            <h1 className="display-1 text-white mb-3">10+</h1>
            <h1 className="text-white m-0">Years Experience</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Footer Start */}
 <Footer />
</>

     );
}

export default About;