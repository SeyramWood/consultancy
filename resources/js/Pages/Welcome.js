import React from "react";

function Welcome() {
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
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <div
                    id="header-carousel"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="w-100"
                                src="template/img/carousel-1.jpg"
                                alt="Image"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h4 className="text-white text-uppercase mb-md-3">
                                        Laundry &amp; Dry Cleaning
                                    </h4>
                                    <h1 className="display-3 text-white mb-md-4">
                                        Best For Laundry Services
                                    </h1>
                                    <a
                                        href=""
                                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                className="w-100"
                                src="template/img/carousel-2.jpg"
                                alt="Image"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h4 className="text-white text-uppercase mb-md-3">
                                        Laundry &amp; Dry Cleaning
                                    </h4>
                                    <h1 className="display-3 text-white mb-md-4">
                                        Highly Professional Staff
                                    </h1>
                                    <a
                                        href=""
                                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#header-carousel"
                        data-slide="prev"
                    >
                        <div
                            className="btn btn-secondary"
                            style={{ width: 45, height: 45 }}
                        >
                            <span className="carousel-control-prev-icon mb-n2" />
                        </div>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#header-carousel"
                        data-slide="next"
                    >
                        <div
                            className="btn btn-secondary"
                            style={{ width: 45, height: 45 }}
                        >
                            <span className="carousel-control-next-icon mb-n2" />
                        </div>
                    </a>
                </div>
            </div>
            {/* Carousel End */}
            {/* Contact Info Start */}
            <div className="container-fluid contact-info mt-5 mb-4">
                <div className="container" style={{ padding: "0 30px" }}>
                    <div className="row">
                        <div
                            className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
                            style={{ height: 100 }}
                        >
                            <div className="d-inline-flex">
                                <i className="fa fa-2x fa-map-marker-alt text-white m-0 mr-3" />
                                <div className="d-flex flex-column">
                                    <h5 className="text-white font-weight-medium">
                                        Our Location
                                    </h5>
                                    <p className="m-0 text-white">
                                        123 Street, New York, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0"
                            style={{ height: 100 }}
                        >
                            <div className="d-inline-flex text-left">
                                <i className="fa fa-2x fa-envelope text-white m-0 mr-3" />
                                <div className="d-flex flex-column">
                                    <h5 className="text-white font-weight-medium">
                                        Email Us
                                    </h5>
                                    <p className="m-0 text-white">
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
                            style={{ height: 100 }}
                        >
                            <div className="d-inline-flex text-left">
                                <i className="fa fa-2x fa-phone-alt text-white m-0 mr-3" />
                                <div className="d-flex flex-column">
                                    <h5 className="text-white font-weight-medium">
                                        Call Us
                                    </h5>
                                    <p className="m-0 text-white">
                                        +012 345 6789
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Info End */}
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container pt-0 pt-lg-4">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img
                                className="img-fluid"
                                src="template/img/about.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
                            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
                                Learn About Us
                            </h6>
                            <h1 className="mb-4">
                                We Are Quality Laundry Provider In Your City
                            </h1>
                            <h5 className="font-weight-medium font-italic mb-4">
                                Clita sit et ipsum sed. Volup duo sea dolor
                                rebum ea rebum kasd stet. Dolor at duo dolor sit
                                stet.
                            </h5>
                            <p className="mb-2">
                                Invidunt lorem justo sanctus clita. Erat lorem
                                labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed
                                sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor
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
            {/* Services Start */}
            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                    <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
                        Our Services
                    </h6>
                    <h1 className="display-4 text-center mb-5">
                        What We Offer
                    </h1>
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
                                <h4 className="font-weight-bold m-0">
                                    Dry Cleaning
                                </h4>
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
                                <h4 className="font-weight-bold m-0">
                                    Wash &amp; Laundry
                                </h4>
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
                                <h4 className="font-weight-bold m-0">
                                    Curtain Laundry
                                </h4>
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
                                <h4 className="font-weight-bold m-0">
                                    Suits Cleaning
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
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
                                Invidunt lorem justo sanctus clita. Erat lorem
                                labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed
                                sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor
                            </p>
                            <div className="row">
                                <div className="col-sm-6 mb-4">
                                    <h1
                                        className="text-secondary"
                                        data-toggle="counter-up"
                                    >
                                        10
                                    </h1>
                                    <h5 className="font-weight-bold">
                                        Years Expereince
                                    </h5>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <h1
                                        className="text-secondary"
                                        data-toggle="counter-up"
                                    >
                                        250
                                    </h1>
                                    <h5 className="font-weight-bold">
                                        Expert Worker
                                    </h5>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <h1
                                        className="text-secondary"
                                        data-toggle="counter-up"
                                    >
                                        1250
                                    </h1>
                                    <h5 className="font-weight-bold">
                                        Happy Clients
                                    </h5>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <h1
                                        className="text-secondary"
                                        data-toggle="counter-up"
                                    >
                                        9550
                                    </h1>
                                    <h5 className="font-weight-bold">
                                        Dry Cleaning
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
                                <i className="fa fa-5x fa-certificate text-white mb-5" />
                                <h1 className="display-1 text-white mb-3">
                                    10+
                                </h1>
                                <h1 className="text-white m-0">
                                    Years Experience
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
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
                                        borderWidth: "15px !important",
                                    }}
                                >
                                    <h2 className="display-2 text-secondary m-0">
                                        1
                                    </h2>
                                </div>
                                <h3 className="font-weight-bold m-0 mt-2">
                                    Order Place
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderWidth: "15px !important",
                                    }}
                                >
                                    <h2 className="display-2 text-secondary m-0">
                                        2
                                    </h2>
                                </div>
                                <h3 className="font-weight-bold m-0 mt-2">
                                    Free Pick Up
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderWidth: "15px !important",
                                    }}
                                >
                                    <h2 className="display-2 text-secondary m-0">
                                        3
                                    </h2>
                                </div>
                                <h3 className="font-weight-bold m-0 mt-2">
                                    Dry Cleaning
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderWidth: "15px !important",
                                    }}
                                >
                                    <h2 className="display-2 text-secondary m-0">
                                        4
                                    </h2>
                                </div>
                                <h3 className="font-weight-bold m-0 mt-2">
                                    Free Delivery
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Working Process End */}
            {/* Pricing Plan Start */}
            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                    <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
                        Our Pricing Plan
                    </h6>
                    <h1 className="display-4 text-center mb-5">
                        The Best Price
                    </h1>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="bg-light text-center mb-2 pt-4">
                                <div
                                    className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                                    style={{
                                        width: 200,
                                        height: 200,
                                        border: "15px solid #ffffff",
                                    }}
                                >
                                    <h3 className="text-white">Basic</h3>
                                    <h1 className="display-4 text-white mb-0">
                                        <small
                                            className="align-top"
                                            style={{
                                                fontSize: 22,
                                                lineHeight: 45,
                                            }}
                                        >
                                            $
                                        </small>
                                        49
                                        <small
                                            className="align-bottom"
                                            style={{
                                                fontSize: 16,
                                                lineHeight: 40,
                                            }}
                                        >
                                            / Mo
                                        </small>
                                    </h1>
                                </div>
                                <div className="d-flex flex-column align-items-center py-3">
                                    <p>HTML5 &amp; CSS3</p>
                                    <p>Bootstrap 4</p>
                                    <p>Responsive Layout</p>
                                    <p>Compatible With All Browsers</p>
                                </div>
                                <a
                                    href=""
                                    className="btn btn-secondary py-2 px-4"
                                >
                                    Signup Now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-light text-center mb-2 pt-4">
                                <div
                                    className="d-inline-flex flex-column align-items-center justify-content-center bg-primary rounded-circle shadow mt-2 mb-4"
                                    style={{
                                        width: 200,
                                        height: 200,
                                        border: "15px solid #ffffff",
                                    }}
                                >
                                    <h3 className="text-white">Standard</h3>
                                    <h1 className="display-4 text-white mb-0">
                                        <small
                                            className="align-top"
                                            style={{
                                                fontSize: 22,
                                                lineHeight: 45,
                                            }}
                                        >
                                            $
                                        </small>
                                        99
                                        <small
                                            className="align-bottom"
                                            style={{
                                                fontSize: 16,
                                                lineHeight: 40,
                                            }}
                                        >
                                            / Mo
                                        </small>
                                    </h1>
                                </div>
                                <div className="d-flex flex-column align-items-center py-3">
                                    <p>HTML5 &amp; CSS3</p>
                                    <p>Bootstrap 4</p>
                                    <p>Responsive Layout</p>
                                    <p>Compatible With All Browsers</p>
                                </div>
                                <a
                                    href=""
                                    className="btn btn-primary py-2 px-4"
                                >
                                    Signup Now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-light text-center mb-2 pt-4">
                                <div
                                    className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                                    style={{
                                        width: 200,
                                        height: 200,
                                        border: "15px solid #ffffff",
                                    }}
                                >
                                    <h3 className="text-white">Premium</h3>
                                    <h1 className="display-4 text-white mb-0">
                                        <small
                                            className="align-top"
                                            style={{
                                                fontSize: 22,
                                                lineHeight: 45,
                                            }}
                                        >
                                            $
                                        </small>
                                        149
                                        <small
                                            className="align-bottom"
                                            style={{
                                                fontSize: 16,
                                                lineHeight: 40,
                                            }}
                                        >
                                            / Mo
                                        </small>
                                    </h1>
                                </div>
                                <div className="d-flex flex-column align-items-center py-3">
                                    <p>HTML5 &amp; CSS3</p>
                                    <p>Bootstrap 4</p>
                                    <p>Responsive Layout</p>
                                    <p>Compatible With All Browsers</p>
                                </div>
                                <a
                                    href=""
                                    className="btn btn-secondary py-2 px-4"
                                >
                                    Signup Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan End */}
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
                        Testimonial
                    </h6>
                    <h1 className="display-4 text-center mb-5">
                        Our Clients Say
                    </h1>
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
                                    zIndex: 1,
                                }}
                                alt=""
                            />
                            <div className="bg-light text-center p-4 pt-0">
                                <h5 className="font-weight-medium mt-5">
                                    Client Name
                                </h5>
                                <p className="text-muted font-italic">
                                    Profession
                                </p>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et
                                    ipsum est duo elitr eirmod clita lorem.
                                    Dolor ipsum clita
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
                                    zIndex: 1,
                                }}
                                alt=""
                            />
                            <div className="bg-light text-center p-4 pt-0">
                                <h5 className="font-weight-medium mt-5">
                                    Client Name
                                </h5>
                                <p className="text-muted font-italic">
                                    Profession
                                </p>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et
                                    ipsum est duo elitr eirmod clita lorem.
                                    Dolor ipsum clita
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
                                    zIndex: 1,
                                }}
                                alt=""
                            />
                            <div className="bg-light text-center p-4 pt-0">
                                <h5 className="font-weight-medium mt-5">
                                    Client Name
                                </h5>
                                <p className="text-muted font-italic">
                                    Profession
                                </p>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et
                                    ipsum est duo elitr eirmod clita lorem.
                                    Dolor ipsum clita
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
                                    zIndex: 1,
                                }}
                                alt=""
                            />
                            <div className="bg-light text-center p-4 pt-0">
                                <h5 className="font-weight-medium mt-5">
                                    Client Name
                                </h5>
                                <p className="text-muted font-italic">
                                    Profession
                                </p>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et
                                    ipsum est duo elitr eirmod clita lorem.
                                    Dolor ipsum clita
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Blog Start */}
            <div className="container-fluid mt-5 pb-2">
                <div className="container">
                    <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
                        Our Blog
                    </h6>
                    <h1 className="display-4 text-center mb-5">
                        Latest From Blog
                    </h1>
                    <div className="row">
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid w-100"
                                        src="template/img/blog-1.jpg"
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                                        style={{
                                            top: 0,
                                            left: 0,
                                            background: "rgba(0, 0, 0, .4)",
                                        }}
                                    >
                                        <h4 className="text-center text-white font-weight-medium mb-3">
                                            Dolor site amet clita kasd sanct
                                            ipsum
                                        </h4>
                                        <div className="d-flex text-light">
                                            <small className="mr-2">
                                                <i className="fa fa-user text-secondary" />{" "}
                                                Admin
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-folder text-secondary" />{" "}
                                                Web Design
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-comments text-secondary" />{" "}
                                                15
                                            </small>
                                        </div>
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                    Amet dolores labore magna et amet tempor
                                    dolor et dolor. Et sit ipsum et eos rebum
                                    labore ea labore sea. Et sed elitr labore
                                    sed labore. Lorem et lorem amet sed sed kasd
                                    ipsum rebum
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid w-100"
                                        src="template/img/blog-2.jpg"
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                                        style={{
                                            top: 0,
                                            left: 0,
                                            background: "rgba(0, 0, 0, .4)",
                                        }}
                                    >
                                        <h4 className="text-center text-white font-weight-medium mb-3">
                                            Dolor site amet clita kasd sanct
                                            ipsum
                                        </h4>
                                        <div className="d-flex text-light">
                                            <small className="mr-2">
                                                <i className="fa fa-user text-secondary" />{" "}
                                                Admin
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-folder text-secondary" />{" "}
                                                Web Design
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-comments text-secondary" />{" "}
                                                15
                                            </small>
                                        </div>
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                    Amet dolores labore magna et amet tempor
                                    dolor et dolor. Et sit ipsum et eos rebum
                                    labore ea labore sea. Et sed elitr labore
                                    sed labore. Lorem et lorem amet sed sed kasd
                                    ipsum rebum
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid w-100"
                                        src="template/img/blog-3.jpg"
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                                        style={{
                                            top: 0,
                                            left: 0,
                                            background: "rgba(0, 0, 0, .4)",
                                        }}
                                    >
                                        <h4 className="text-center text-white font-weight-medium mb-3">
                                            Dolor site amet clita kasd sanct
                                            ipsum
                                        </h4>
                                        <div className="d-flex text-light">
                                            <small className="mr-2">
                                                <i className="fa fa-user text-secondary" />{" "}
                                                Admin
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-folder text-secondary" />{" "}
                                                Web Design
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-comments text-secondary" />{" "}
                                                15
                                            </small>
                                        </div>
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                    Amet dolores labore magna et amet tempor
                                    dolor et dolor. Et sit ipsum et eos rebum
                                    labore ea labore sea. Et sed elitr labore
                                    sed labore. Lorem et lorem amet sed sed kasd
                                    ipsum rebum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            {/* Footer Start */}
            <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="">
                            <h1 className="text-secondary mb-3">
                                <span className="text-white">DRY</span>ME
                            </h1>
                        </a>
                        <p>
                            Volup amet magna clita tempor. Tempor sea eos vero
                            ipsum. Lorem lorem sit sed elitr sit no, sed kasd et
                            ipsum dolor duo dolor
                        </p>
                        <div className="d-flex justify-content-start mt-4">
                            <a
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                            <a
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a
                                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                            >
                                <i className="fab fa-instagram" />
                            </a>
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
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Home
                            </a>
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                About Us
                            </a>
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Services
                            </a>
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Pricing
                            </a>
                            <a className="text-white" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Contact Us
                            </a>
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

export default Welcome;
