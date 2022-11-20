import { Link } from "@inertiajs/inertia-react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Publication() {
    return ( 
      <>
    
     <Header />
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Publications</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn text-white" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-right text-white" />
                <a className="btn text-white disabled" href="">
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Detail Start */}
      <div className="container py-5">
        <div className="row">
          {/* Blog Detail Start */}
          <div className="col-lg-8">
            <div className="d-flex flex-column text-left mb-4">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                Publications
              </h6>
              <h1 className="mb-4 section-title">
                Diam dolor est ipsum clita lorem
              </h1>
              <div className="d-index-flex mb-2">
                <span className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </span>
                <span className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </span>
                <span className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </span>
              </div>
            </div>
            <div className="mb-5">
              <img
                className="img-fluid w-100 mb-4"
                src="template/img/img/dr2.jpg"
                alt="Image"
                style={{width:"100%",height:"500px"}}
              />
              <p>
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum
                sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et
                lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd
                accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit
                gubergren dolores et, consetetur justo invidunt at et aliquyam ut et
                vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit
                stet no diam kasd vero.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                aliquyam dolores vero stet consetetur elitr takimata rebum sanctus.
                Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem
                kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos
                et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit
                vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                justo dolore sit invidunt.
              </p>
              <h2 className="mb-4">Est dolor lorem et ea</h2>
              <img
                className="img-fluid w-50 float-left mr-4 mb-3"
                src="img/blog-1.jpg"
                alt="Image"
              />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
                kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
                Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
                labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
                kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren
                at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam
                dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
                eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit
                ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod
                kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd
                clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et
                ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna
                dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
                amet et est accusam labore eirmod vero et voluptua. Amet labore
                clita duo et no. Rebum voluptua magna eos magna, justo gubergren
                labore sit voluptua eos.
              </p>
              <h3 className="mb-4">Est dolor lorem et ea</h3>
              <img
                className="img-fluid w-50 float-right ml-4 mb-3"
                src="img/blog-2.jpg"
                alt="Image"
              />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
                kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
                Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
                labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
                kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren
                at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam
                dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
                eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit
                ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod
                kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd
                clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et
                ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna
                dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
                amet et est accusam labore eirmod vero et voluptua. Amet labore
                clita duo et no.
              </p>
            </div>
            {/* Related Post Start */}
            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Related Post</h3>
              <div className="owl-carousel related-carousel position-relative">
                <div className="bg-light">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
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
                <div className="bg-light">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
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
                <div className="bg-light">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src="img/blog-3.jpg" alt="" />
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
            {/* Related Post End */}
            {/* Comment List Start */}
            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">3 Comments</h3>
              <div className="media mb-4">
                <img
                  src="img/user.jpg"
                  alt="Image"
                  className="img-fluid mr-3 mt-1"
                  style={{ width: 45 }}
                />
                <div className="media-body">
                  <h6>
                    John Doe{" "}
                    <small>
                      <i>01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                    rebum magna dolores sed sed eirmod ipsum. Gubergren clita
                    aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
              <div className="media mb-4">
                <img
                  src="img/user.jpg"
                  alt="Image"
                  className="img-fluid mr-3 mt-1"
                  style={{ width: 45 }}
                />
                <div className="media-body">
                  <h6>
                    John Doe{" "}
                    <small>
                      <i>01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                    rebum magna dolores sed sed eirmod ipsum. Gubergren clita
                    aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-light">Reply</button>
                  <div className="media mt-4">
                    <img
                      src="img/user.jpg"
                      alt="Image"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        John Doe{" "}
                        <small>
                          <i>01 Jan 2045 at 12:00pm</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd diam
                        tempor rebum magna dolores sed sed eirmod ipsum. Gubergren
                        clita aliquyam consetetur sadipscing, at tempor amet ipsum
                        diam tempor consetetur at sit.
                      </p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment List End */}
            {/* Comment Form Start */}
            <div className="bg-light p-5">
              <h3 className="font-weight-bold mb-4">Leave a comment</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="url" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group mb-0">
                  <input
                    type="submit"
                    defaultValue="Leave Comment"
                    className="btn btn-primary px-3"
                  />
                </div>
              </form>
            </div>
            {/* Comment Form End */}
          </div>
          {/* Blog Detail End */}
          {/* Sidebar Start */}
          <div className="col-lg-4 mt-5 mt-lg-0">
        
            {/* Category Start */}
            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Categories</h3>
              <ul className="list-group">
                <a href="">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  Books
                  <span className="badge badge-primary badge-pill">150</span>
                </li>
                </a>
                
                <a href="">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  Articles
                  <span className="badge badge-primary badge-pill">131</span>
                </li>
                </a>
                
                <a href="">
                   <li className="list-group-item d-flex justify-content-between align-items-center">
                  Research
                  <span className="badge badge-primary badge-pill">78</span>
                </li>
                </a>
               
                
              </ul>
            </div>
           
            {/* Image Start */}
           
          </div>
          {/* Sidebar End */}
        </div>
      </div>
     
     <Footer />
    </>
    

     );
}

export default Publication;