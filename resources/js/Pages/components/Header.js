

function Header() {
    return ( 
        <>
        {/* Topbar Start */}
        <div className="container-fluid bg-primary py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white pr-3" href="">
                                    FAQs
                                </a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">
                                    Help
                                </a>
                                <span className="text-white">|</span>
                                <a className="text-white pl-3" href="">
                                    Support
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="text-white pl-3" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
             {/* Navbar Start */}
             <div className="container-fluid position-relative nav-bar p-0">
                <div
                    className="container-lg position-relative p-0 px-lg-3"
                    style={{ zIndex: 9 }}
                >
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="" className="navbar-brand">
                            <h1 className="m-0 text-secondary">
                                <span className="text-primary">DRY</span>ME
                            </h1>
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between px-3"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav ml-auto py-0">
                                <a
                                    href="index.html"
                                    className="nav-item nav-link active"
                                >
                                    Home
                                </a>
                                <a
                                    href="about.html"
                                    className="nav-item nav-link"
                                >
                                    About
                                </a>
                                <a
                                    href="service.html"
                                    className="nav-item nav-link"
                                >
                                    Services
                                </a>
                                <a
                                    href="pricing.html"
                                    className="nav-item nav-link"
                                >
                                    Pricing
                                </a>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Pages
                                    </a>
                                    <div className="dropdown-menu border-0 rounded-0 m-0">
                                        <a
                                            href="blog.html"
                                            className="dropdown-item"
                                        >
                                            Blog Grid
                                        </a>
                                        <a
                                            href="single.html"
                                            className="dropdown-item"
                                        >
                                            Blog Detail
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="contact.html"
                                    className="nav-item nav-link"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
            </>
     );
}

export default Header;