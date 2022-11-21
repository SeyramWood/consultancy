import { Link } from "@inertiajs/inertia-react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Events() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Events</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn text-white" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-right text-white" />
                <a className="btn text-white disabled" href="">
                  Events
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
          {/* News Grid Start */}
          <div className="col-lg-8">
            <div className="row">
              {/* modal 1 display */}
              <div
                className="modal fade bd-example-modal-lg1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg"
                  role="document">

                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container">
                        <div className="row m-4">
                          <div className="col-12">
                            <img src="template/img/img/1.jpeg" className="img-fluid" style={{height:"200px"}} alt="" />
                          </div>
                          <div className="col-12">
                            <p className="pt-3">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Delectus enim alias voluptatibus! Eum earum illum deleniti
                              incidunt sequi odio aliquam iure, iusto dignissimos neque
                              placeat,
                              eaque explicabo obcaecati provident! Mollitia.

                            </p>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Corrupti totam eveniet consequuntur enim ad cumque neque
                              dignissimos illo sunt officiis soluta fuga libero voluptas
                              molestiae perspiciatis,
                              aspernatur iste? Deleniti, reprehenderit?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur libero iusto quidem, reprehenderit eum praesentium optio rerum autem asperiores harum vel blanditiis illum! Aperiam necessitatibus dicta animi totam incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* end modal 1 display */}
              {/* card one */}
              <div className="col-md-6 mb-2" data-toggle="modal"
                data-target=".bd-example-modal-lg1">
                <div className="bg-light mb-4">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="template/img/img/1.jpeg" style={{height:"196px"}} alt="" />

                  </div>
                  <p className="m-0 p-4">
                    Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                    ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                    labore. Lorem et lorem amet sed sed kasd ipsum rebum
                  </p>
                </div>
              </div>
              {/* modal two display */}
              <div
                className="modal fade bd-example-modal-lg1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel2"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg"
                  role="document">

                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container">
                        <div className="row m-4">
                          <div className="col-12">
                            <img src="template/img/img/banner2.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-12">
                            <p className="pt-3">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Delectus enim alias voluptatibus! Eum earum illum deleniti
                              incidunt sequi odio aliquam iure, iusto dignissimos neque
                              placeat,
                              eaque explicabo obcaecati provident! Mollitia.

                            </p>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Corrupti totam eveniet consequuntur enim ad cumque neque
                              dignissimos illo sunt officiis soluta fuga libero voluptas
                              molestiae perspiciatis,
                              aspernatur iste? Deleniti, reprehenderit?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur libero iusto quidem, reprehenderit eum praesentium optio rerum autem asperiores harum vel blanditiis illum! Aperiam necessitatibus dicta animi totam incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* modal two display */}
              <div
                className="modal fade bd-example-modal-lg2"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel2"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg"
                  role="document">

                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container">
                        <div className="row m-4">
                          <div className="col-12">
                            <img src="template/img/img/banner2.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-12">
                            <p className="pt-3">
                              23Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Delectus enim alias voluptatibus! Eum earum illum deleniti
                              incidunt sequi odio aliquam iure, iusto dignissimos neque
                              placeat,
                              eaque explicabo obcaecati provident! Mollitia.

                            </p>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Corrupti totam eveniet consequuntur enim ad cumque neque
                              dignissimos illo sunt officiis soluta fuga libero voluptas
                              molestiae perspiciatis,
                              aspernatur iste? Deleniti, reprehenderit?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur libero iusto quidem, reprehenderit eum praesentium optio rerum autem asperiores harum vel blanditiis illum! Aperiam necessitatibus dicta animi totam incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* en of modal two display */}
              {/* card two */}
              <div className="col-md-6 mb-2" data-toggle="modal"
                data-target=".bd-example-modal-lg2">
                <div className="bg-light mb-4">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="template/img/img/ev.png" alt="" />

                  </div>
                  <p className="m-0 p-4">
                    2Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                    ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                    labore. Lorem et lorem amet sed sed kasd ipsum rebum
                  </p>
                </div>
              </div>
              {/* modal 3 display */}
              <div
                className="modal fade bd-example-modal-lg3"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel3"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg"
                  role="document">

                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container">
                        <div className="row m-4">
                          <div className="col-12">
                            <img src="template/img/img/banner2.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-12">
                            <p className="pt-3">
                              2Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Delectus enim alias voluptatibus! Eum earum illum deleniti
                              incidunt sequi odio aliquam iure, iusto dignissimos neque
                              placeat,
                              eaque explicabo obcaecati provident! Mollitia.

                            </p>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Corrupti totam eveniet consequuntur enim ad cumque neque
                              dignissimos illo sunt officiis soluta fuga libero voluptas
                              molestiae perspiciatis,
                              aspernatur iste? Deleniti, reprehenderit?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur libero iusto quidem, reprehenderit eum praesentium optio rerum autem asperiores harum vel blanditiis illum! Aperiam necessitatibus dicta animi totam incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* end of  modal 3 display */}
              {/* card three */}
              <div className="col-md-6 mb-2" data-toggle="modal"
                data-target=".bd-example-modal-lg3">
                <div className="bg-light mb-4">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="template/img/img/ev.png" alt="" />

                  </div>
                  <p className="m-0 p-4">
                    3Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                    ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                    labore. Lorem et lorem amet sed sed kasd ipsum rebum
                  </p>
                </div>

                {/* modal four display */}
                {/*  end of modal four display */}
                {/* card four */}
              </div>
              {/* modal 4 display */}
              <div
                className="modal fade bd-example-modal-lg4"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel4"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg"
                  role="document">

                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container">
                        <div className="row m-4">
                          <div className="col-12">
                            <img src="template/img/img/1.jpeg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-12">
                            <p className="pt-3">
                              4Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Delectus enim alias voluptatibus! Eum earum illum deleniti
                              incidunt sequi odio aliquam iure, iusto dignissimos neque
                              placeat,
                              eaque explicabo obcaecati provident! Mollitia.

                            </p>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Corrupti totam eveniet consequuntur enim ad cumque neque
                              dignissimos illo sunt officiis soluta fuga libero voluptas
                              molestiae perspiciatis,
                              aspernatur iste? Deleniti, reprehenderit?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur libero iusto quidem, reprehenderit eum praesentium optio rerum autem asperiores harum vel blanditiis illum! Aperiam necessitatibus dicta animi totam incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* end of modal 4 display */}
              {/* card four */}
              <div className="col-md-6 mb-2" data-toggle="modal"
                data-target=".bd-example-modal-lg4">
                <div className="bg-light mb-4">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="template/img/img/ev.png" alt="" />

                  </div>
                  <p className="m-0 p-4">
                    3Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                    ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                    labore. Lorem et lorem amet sed sed kasd ipsum rebum
                  </p>
                </div>

                {/* modal four display */}
                {/*  end of modal four display */}
                {/* card four */}
              </div>
              {/* end of card four */}
            </div>

            {/* modal 4 display */}
            {/* end of modal 4 display */}
            {/* card four */}

            {/* end card four */}
            
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
                  src="template/img/img/ev.png"
                  style={{ width: 80, height: 80 }}
                  alt=""
                />
                <div className="d-flex flex-column pl-3">
                  <a className="text-dark mb-2" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                 
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                <img
                  className="img-fluid"
                  src="template/img/img/ev.png"
                  style={{ width: 80, height: 80 }}
                  alt=""
                />
                <div className="d-flex flex-column pl-3">
                  <a className="text-dark mb-2" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
              
                </div>
              </div>
             
             
            </div>
            {/* Recent Post End */}
            {/* Image Start */}

          </div>
          {/* Sidebar End */}
        </div>
      </div>

      {/*gallery  */}
      <div className="container">
        <h1 className="display-4 text-green border-bottom  text-center ">Gallery</h1>
        <div className="row mt-3 pt-4">
          <div className="col-lg-6 p-2">
            <div className="border">
              {/* first */}
              <div
                className=""
                data-toggle="modal"
                data-target=".bd-example-modal-four"
              >
                <img src="template/img/img/banner1.jpg" className="img-fluid w-100" alt="" />
              </div>

              <div
                className="modal fade bd-example-modal-four"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    {/* <div className="mt-4 text-center">dddd</div> */}
                    <button type="button" className="close mt-3" data-dismiss="modal" aria-label="Close">
                      <button className="btn btn-primary">Close</button>
                    </button>
                    {/* slidere */}'
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="template/img/img/banner.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                    {/*end slidere */}
                  </div>
                </div>
              </div>

            </div>
            <div className="border">
              <h6 className="p-4 text-black">Text Here</h6>
            </div>

          </div>
          {/* second */}
          <div className="col-lg-6 p-2">
            <div className="border">

              <div
                data-toggle="modal"
                data-target=".bd-example-modal-two"
              >
                <img src="template/img/img/banner3.jpg" className="img-fluid w-100" alt="" />
              </div>

              <div
                className="modal fade bd-example-modal-two"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <button type="button" className="close mt-3" data-dismiss="modal" aria-label="Close">
                      <button className="btn btn-primary">Close</button>
                    </button>
                    {/* slidere */}'
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                    >

                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="template/img/img/banner2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner2.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                    {/* slidere */}
                  </div>
                </div>
              </div>


            </div>
            <div className="border">
              <h6 className="p-4 text-black">Text Here</h6>
            </div>

          </div>

          {/* third */}
          <div className="col-lg-6 p-2">
            <div className="border">

              <div
                data-toggle="modal"
                data-target=".bd-example-modal-three"
              >
                <img src="template/img/img/banner3.jpg" className="img-fluid w-100" alt="" />
              </div>

              <div
                className="modal fade bd-example-modal-three"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    {/* slidere */}
                    <button type="button" className="close mt-3 mb-3" data-dismiss="modal" aria-label="Close">
                      <button className="btn btn-primary">Close</button>
                    </button>

                    <div
                      id="carouselExampleCaptions"
                      className="carousel slide"
                      data-ride="carousel"
                    >

                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="template/img/img/banner.jpg" className="d-block w-100" alt="..." />

                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner2.jpg" className="d-block w-100" alt="..." />

                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner1.jpg" className="d-block w-100" alt="..." />

                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>


                    {/* slidere */}
                  </div>
                </div>
              </div>
            </div>
            <div className="border">
              <h6 className="p-4 text-black">Text Here</h6>
            </div>
          </div>
          {/* four */}
          <div className="col-lg-6 p-2">
            <div className="border">

              <div
                data-toggle="modal"
                data-target=".bd-example-modal-last"
              >
                <img src="template/img/img/banner1.jpg" className="img-fluid w-100" alt="" />
              </div>

              <div
                className="modal fade bd-example-modal-last"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    {/* slidere */}
                    <button type="button" className="close mb-3 mt-3" data-dismiss="modal" aria-label="Close">
                      <button className="btn btn-primary">Close</button>
                    </button>
                    <div
                      id="carouselExampleFade"
                      className="carousel slide carousel-fade"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="template/img/img/banner.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="template/img/img/banner2.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleFade"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleFade"
                        role="button"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>


                    {/* slidere */}
                  </div>
                </div>
              </div>


            </div>
            <div className="border">
              <h6 className="p-4 text-black">Text Here</h6>
            </div>

          </div>
        </div>
      </div>
      {/*gallery  */}
      {/* Blog End */}
      <Footer />
    </>

  );
}

export default Events;