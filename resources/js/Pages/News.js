import { Link } from "@inertiajs/inertia-react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function News() {
    return ( 
    <>
    <Header />
  {/* Page Header Start */}
  <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
    <div className="container py-5">
      <div className="row align-items-center py-4">
        <div className="col-md-6 text-center text-md-left">
          <h1 className="mb-4 mb-md-0 text-white">Articles</h1>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <div className="d-inline-flex align-items-center">
            <Link className="btn text-white" href="/">
              Home
            </Link>
            <i className="fas fa-angle-right text-white" />
            <a className="btn text-white disabled" href="">
              Articles
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Blog Start */}
  <div className="container py-5">
    <div className="row">
      {/* Blog Grid Start */}
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-1.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-2.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-3.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-1.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-2.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-3.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-1.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-2.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-3.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="bg-light mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src="template/img/blog-3.jpg" alt="" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    Dolor site amet clita kasd sanct ipsum
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2">
                      <i className="fa fa-user text-secondary" /> Admin
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-folder text-secondary" /> Web Design
                    </small>
                    <small className="mr-2">
                      <i className="fa fa-comments text-secondary" /> 15
                    </small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                labore. Lorem et lorem amet sed sed kasd ipsum rebum
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Blog Grid End */}
      {/* Sidebar Start */}
      <div className="col-lg-4 mt-5 mt-lg-0">
      
        {/* Recent Post Start */}
        <div className="mb-5">
          <h3 className="font-weight-bold mb-4">Recent Post</h3>
          <div className="d-flex align-items-center border-bottom mb-3 pb-3">
            <img
              className="img-fluid"
              src="template/img/blog-1.jpg"
              style={{ width: 80, height: 80 }}
              alt=""
            />
            <div className="d-flex flex-column pl-3">
              <a className="text-dark mb-2" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
              <div className="d-flex">
                <small className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </small>
                <small className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </small>
                <small className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom mb-3 pb-3">
            <img
              className="img-fluid"
              src="template/img/blog-2.jpg"
              style={{ width: 80, height: 80 }}
              alt=""
            />
            <div className="d-flex flex-column pl-3">
              <a className="text-dark mb-2" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
              <div className="d-flex">
                <small className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </small>
                <small className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </small>
                <small className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom mb-3 pb-3">
            <img
              className="img-fluid"
              src="template/img/blog-3.jpg"
              style={{ width: 80, height: 80 }}
              alt=""
            />
            <div className="d-flex flex-column pl-3">
              <a className="text-dark mb-2" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
              <div className="d-flex">
                <small className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </small>
                <small className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </small>
                <small className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom mb-3 pb-3">
            <img
              className="img-fluid"
              src="template/img/blog-1.jpg"
              style={{ width: 80, height: 80 }}
              alt=""
            />
            <div className="d-flex flex-column pl-3">
              <a className="text-dark mb-2" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
              <div className="d-flex">
                <small className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </small>
                <small className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </small>
                <small className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom mb-3 pb-3">
            <img
              className="img-fluid"
              src="template/img/blog-2.jpg"
              style={{ width: 80, height: 80 }}
              alt=""
            />
            <div className="d-flex flex-column pl-3">
              <a className="text-dark mb-2" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
              <div className="d-flex">
                <small className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </small>
                <small className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </small>
                <small className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Post End */}
        {/* Image Start */}
       
      </div>
      {/* Sidebar End */}
    </div>
  </div>
  {/* Blog End */}
  <Footer />
    </>

     );
}

export default News;