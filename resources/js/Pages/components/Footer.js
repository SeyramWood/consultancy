import { Link } from "@inertiajs/inertia-react";
function Footer() {
    return (
        <>
            <script src="template/lib/owlcarousel/owl.carousel.min.js" defer></script>

            {/* Footer Start */}
            <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <Link href="">
                            {/* <h1 className="text-secondary mb-3">
                                <span className="text-white mb-4" >Center For Diplomacy And Foriegn Policy</span>
                            </h1> */}
                        </Link>
                        <h4 className="text-white">
                            CENTRE FOR AFRICAN DIPLOMACY & GLOBAL ENGAGEMENT
                        </h4>
                        <div className="d-flex justify-content-start mt-4">

                            <a
                                target="_blank"
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="https://m.facebook.com/profile.php?id=100088421100288"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a
                                target="_blank"
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="https://m.facebook.com/profile.php?id=100088421100288"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a
                                target="_blank"
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="https://m.facebook.com/profile.php?id=100088421100288"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="" id="contact"></a>
                        <h4 className="text-white mb-4">Get In Touch</h4>

                        <p className="text-white">
                            <i className="fa fa-map-marker-alt mr-2" />15 Kwatei Asuasa St, GE - 358-8736
                        </p>
                        <p className="text-white">
                            <i className=" mr-2" />Achimota-Accra
                        </p>
                        <p className="text-white">
                            <i className="fa fa-phone-alt mr-2" />
                            +233 544 831 297
                        </p>
                        <p className="text-white">
                            <i className="fa fa-phone-alt mr-2" />
                            +233 596 999 628
                        </p>
                        <p className="text-white">
                            <i className="fa fa-envelope mr-2" />
                            secretariat@cdge-gh.org
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
                            <Link className="text-white mb-2" href="/events">
                                <i className="fa fa-angle-right mr-2" />
                                Events
                            </Link>
                            <Link className="text-white" href="/publications">
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
                                    className="btn btn-lg btn-secondary text-white btn-block border-0"
                                    type="submit"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-green text-white py-4 px-sm-3 px-md-5">
                <p className="m-0 text-center text-white">
                    ©{" "}
                    <a className="text-white font-weight-medium" href="#">
                        Centre For African Diplomacy & Global Engagement
                    </a>
                    . All Rights Reserved.
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