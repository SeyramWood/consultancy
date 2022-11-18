import { Link } from "@inertiajs/inertia-react";

function Header() {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-primary py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <Link className="text-white pr-3" href="">
                                    FAQs
                                </Link>
                                <span className="text-white">|</span>
                                <Link className="text-white px-3" href="">
                                    Help
                                </Link>
                                <span className="text-white">|</span>
                                <Link className="text-white pl-3" href="">
                                    Support
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <Link className="text-white px-3" href="">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link className="text-white px-3" href="">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link className="text-white px-3" href="">
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                                <Link className="text-white px-3" href="">
                                    <i className="fab fa-instagram" />
                                </Link>
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
                        <Link href="/" className="navbar-brand">
                            <h1 className="m-0 text-secondary">
                                <img src="template/img/img/logo.jpg" style={{height:"70px",width:"150px"}} alt="" />
                                {/* <span className="text-primary">DRY</span>ME */}
                            </h1>
                        </Link>
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
                                <Link
                                    href="/"
                                    className="nav-item nav-link"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="nav-item nav-link"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/service"
                                    className="nav-item nav-link"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/news"
                                    className="nav-item nav-link"
                                >
                                    News & Events
                                </Link>
                                <Link
                                    href="/publications"
                                    className="nav-item nav-link"
                                >
                                    Publications
                                </Link>
                                {/* <div className="nav-item dropdown">
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
                                </a> */}
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