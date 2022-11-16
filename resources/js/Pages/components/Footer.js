import { Link } from "@inertiajs/inertia-react";
function Footer() {
    return ( 
        <>
         {/* Footer Start */}
         <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <Link href="">
                            <h1 className="text-secondary mb-3">
                                <span className="text-white">DRY</span>ME
                            </h1>
                        </Link>
                        <p>
                            Volup amet magna clita tempor. Tempor sea eos vero
                            ipsum. Lorem lorem sit sed elitr sit no, sed kasd et
                            ipsum dolor duo dolor
                        </p>
                        <div className="d-flex justify-content-start mt-4">
                            <Link
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-linkedin-in" />
                            </Link>
                            <Link
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-instagram" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-white mb-4">Get In Touch</h4>
                        <p>
                            Dolor clita stet nonumy clita diam vero, et et ipsum
                            diam labore
                        </p>
                        <p>
                            <i className="fa fa-map-marker-alt mr-2" />
                            123 Street, New York, USA
                        </p>
                        <p>
                            <i className="fa fa-phone-alt mr-2" />
                            +012 345 67890
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-2" />
                            info@example.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" href="/">
                                <i className="fa fa-angle-right mr-2" />
                                Home
                            </Link>
                            <Link className="text-white mb-2" href="/about">
                                <i className="fa fa-angle-right mr-2" />
                                About Us
                            </Link>
                            <Link className="text-white mb-2" href="/service">
                                <i className="fa fa-angle-right mr-2" />
                                Services
                            </Link>
                            <Link className="text-white mb-2" href="/news">
                                <i className="fa fa-angle-right mr-2" />
                                News & Events
                            </Link>
                            <Link className="text-white" href="/publication">
                                <i className="fa fa-angle-right mr-2" />
                                Publications
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-white mb-4">Newsletter</h4>
                        <form action="">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Your Name"
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control border-0"
                                    placeholder="Your Email"
                                    required="required"
                                />
                            </div>
                            <div>
                                <button
                                    className="btn btn-lg btn-secondary btn-block border-0"
                                    type="submit"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
                <p className="m-0 text-center text-white">
                    ©{" "}
                    <a className="text-white font-weight-medium" href="#">
                        Your Site Name
                    </a>
                    . All Rights Reserved. Designed by
                    <a
                        className="text-white font-weight-medium"
                        href="https://htmlcodex.com"
                    >
                        HTML Codex
                    </a>
                </p>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
     );
}

export default Footer;