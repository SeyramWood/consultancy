import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Welcome() {
    return (
        <>

            <Header />
            {/* Carousel Start */}
            <div className="container-fluid p-0" >
                <div
                    id="header-carousel"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="w-100"
                                src="template/img/img/banner3.jpg"
                                alt="Image"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-2" style={{ maxWidth: 900 }}>
                                    {/* <h4 className="text-white text-uppercase mb-md-3">
                                        Laundry &amp; Dry Cleaning
                                    </h4> */}
                                    <h3 className="display-3 text-white mb-md-3">
                                        CENTRE FOR DIPLOMACY &amp; GLOBAL ENGAGEMENT
                                    </h3>
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
                                src="template/img/img/banner1.jpg"
                                alt="Image"

                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-2" style={{ maxWidth: 900 }}>
                                    {/* <h4 className="text-white text-uppercase mb-md-3">
                                        Laundry &amp; Dry Cleaning
                                    </h4> */}
                                    <h3 className="display-3 text-white mb-md-4">
                                        CENTRE FOR DIPLOMACY &amp; GLOBAL ENGAGEMENT
                                    </h3>
                                    <Link
                                        href=""
                                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                                    >
                                        Learn More
                                    </Link>
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
                            className="btn "
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
                            className="btn "
                            style={{ width: 45, height: 45 }}
                        >
                            <span className="carousel-control-next-icon mb-n2" />
                        </div>
                    </a>
                </div>
            </div>
            {/* Carousel End */}
            {/* core values Start */}
            <div className="container-fluid contact-info  mb-4">
                <div className="container" style={{ padding: "0 30px" }}>
                    <div className="row">
                        <div
                            className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
                            style={{ height: 100 }}
                        >
                            <div className="d-inline-flex">
                                <div className="d-flex flex-column">

                                    <h6 className="text-white text-center font-weight-medium">

                                        <i>CONDUCTING EVIDENCE - BASED RESEARCH</i>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0"
                            style={{ height: 100 }}
                        >
                            <div className="d-inline-flex text-left">
                                <div className="d-flex flex-column">
                                    <h6 className="text-white text-center font-weight-medium">
                                        <i>TRAINGING AN EXCELLENT CORPS OF RESEARCHERS AND LEADERS</i>
                                    </h6>

                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
                            style={{ height: 100 }}
                        >
                            <div className="d-inline-flex text-left">
                                <div className="d-flex flex-column">
                                    <h5 className="text-white text-center font-weight-medium">
                                        <i>STIMULATING INFORMED PUBLIC DEBATE</i>
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Info End */}

            {/* Custom research */}
            <div className="container"  >

                <div className="row" >
                    <div className="border-bottom" style={{ width: "100%" }}>
                        <h2 className="display-4 text-green text-center mb-0" >Research</h2>
                    </div>

                    <div className="p-4 m-3" >
                        <div className="col-12 p-2">
                            <div className="row p-2"  >
                                <div className="col-4">
                                    <img src="template/img/img/resh.jpg " className="float-right" alt="" style={{ width: "200px", height: "100px" }} />
                                </div>
                                <div className="col-8">
                                    <h6 className="lead" style={{ fontSize: "12px" }}>Type Of Research</h6>
                                    <h6 className=""><b>Heading of Researchs comes here</b></h6>
                                    <p className="pt-0 mt-0" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet id nulla nesciunt pariatur eaque
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="row p-2"  >
                                <div className="col-4">
                                    <img src="template/img/img/resh.jpg " className="float-right" alt="" style={{ width: "200px", height: "100px" }} />
                                </div>
                                <div className="col-8">
                                    <h6 className="lead" style={{ fontSize: "12px" }}>Type Of Research</h6>
                                    <h6><b>Heading of Researchs comes here</b></h6>
                                    <p className="pt-0 mt-0" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet id nulla nesciunt pariatur eaque
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="row p-2"  >
                                <div className="col-4">
                                    <img src="template/img/img/resh.jpg " className="float-right" alt="" style={{ width: "200px", height: "100px" }} />
                                </div>
                                <div className="col-8">
                                    <h6 className="lead" style={{ fontSize: "12px" }}>Type Of Research</h6>
                                    <h6><b>Heading of Researchs comes here</b></h6>
                                    <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet id nulla nesciunt pariatur eaque
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="row p-2"  >
                                <div className="col-4">
                                    <img src="template/img/img/resh.jpg " className="float-right" alt="" style={{ width: "200px", height: "100px" }} />
                                </div>
                                <div className="col-8">
                                    <h6 className="lead" style={{ fontSize: "12px" }}>Type Of Research</h6>
                                    <h6><b>Heading of Researchs comes here</b></h6>
                                    <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet id nulla nesciunt pariatur eaque
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="row p-2"  >
                                <div className="col-4">
                                    <img src="template/img/img/resh.jpg " className="float-right" alt="" style={{ width: "200px", height: "100px" }} />
                                </div>
                                <div className="col-8">
                                    <h6 className="lead" style={{ fontSize: "12px" }}>Type Of Research</h6>
                                    <h6><b>Heading of Researchs comes here</b></h6>
                                    <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet id nulla nesciunt pariatur eaque
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* End Custom research */}

            {/* custom events */}
            <div className="" style={{ marginBottom: "90px" }}>
                <div className="col-12 " >
                    <div className="container border-bottom">
                        <h2 className="display-4 m-0 p-0 text-green text-center" >
                            Events
                        </h2>
                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                            <div className="row">

                                <div className="col-4 ">
                                    <Link href="/events">
                                         <img src="template/img/img/1.jpeg" className="float-right" alt="" style={{ width: "80px", height: "100px" }} />
                                   </Link>

                                   </div>
                                <div className="col-8 ">

                                    <h6 style={{ fontSize: "12px" }}>UPCOMING EVENT</h6>
                                    <Link href="/events">
                                        <h6><b>(CFDGE) LAUNCING</b></h6>
                                    </Link>
                                    <p className="" style={{ fontSize: "12px" }}>Date: Jan 14 Venue: South Africa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                            <div className="row ">
                            <div className="col-4 ">
                                    <Link href="/events">
                                         <img src="template/img/img/1.jpeg" className="float-right" alt="" style={{ width: "80px", height: "100px" }} />
                                   </Link>

                                   </div>
                                <div className="col-8">
                                    <h6 style={{ fontSize: "12px" }}>UPCOMING EVENT</h6>
                                    <Link href="/events">
                                        <h6><b>(CFDGE) LAUNCING</b></h6>
                                    </Link>
                                    <p className="" style={{ fontSize: "14px" }}>Date: Jan 14 Venue: South Africa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 ">
                            <div className="row">
                            <div className="col-4 ">
                                    <Link href="/events">
                                         <img src="template/img/img/1.jpeg" className="float-right" alt="" style={{ width: "80px", height: "100px" }} />
                                   </Link>

                                   </div>
                                <div className="col-8">
                                    <h6 style={{ fontSize: "12px" }}>UPCOMING EVENT</h6>
                                    <Link href="/events">
                                        <h6 ><b>(CFDGE) LAUNCING</b></h6>
                                    </Link>
                                    <p className="" style={{ fontSize: "12px" }}>Date: Jan 14 Venue: South Africa
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center pt-4">
                        <Link href="/events">
                            <button className="btn btn-primary text-center"
                                style={{ width: "30%", borderRadius: "40px" }}>  More Events
                            </button></Link>
                    </div>
                </div>

            </div>
            {/* End custom events */}

            {/* custom blogs */}
            <div className="" style={{ marginBottom: "90px" }}>
                <div className="container" >
                    <div className="container border-bottom">
                        <h2 className="display-4 m-0 p-0 text-green text-center" >
                            Articles
                        </h2></div>
                    <div className="row mt-5">
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid w-100"
                                        src="template/img/img/dr.png"
                                        alt=""
                                        style={{ height: "225px", width: "" }}
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
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                    A development and international relations analyst,
                                    Professor Lord Mawuko-Yevugah
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid w-100"
                                        src="template/img/img/dr2.jpg"
                                        alt=""
                                        style={{ height: "225px", width: "" }}
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
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                    A development and international relations analyst,
                                    Professor Lord Mawuko-Yevugah
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid w-100"
                                        src="template/img/img/dr.png"
                                        alt=""
                                        style={{ height: "225px", width: "" }}
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
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                    A development and international relations analyst,
                                    Professor Lord Mawuko-Yevugah
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                        <Link href="/publications">
                            <button className="btn btn-primary text-center"
                                style={{ width: "30%", borderRadius: "40px" }}>
                                More Articles
                            </button>
                        </Link>

                    </div>
                </div>

            </div>

            {/* end custom blogs */}

            {/* custom books */}
            <div className=" p-3" style={{ marginBottom: "90px" }}>
                <div className="col-12 " >
                    <div className="container border-bottom">
                        <h2 className="display-4 m-0 p-0 text-green text-center" >
                            Books
                        </h2>
                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                            <div className="row">
                                <div className="col-4">
                                    <img src="template/img/img/book1.jpeg" className=" float-right" alt="" style={{ width: "100px", height: "160px" }} />
                                </div>
                                <div className="col-8">
                                    <h6><b>Made In Ghana</b></h6>
                                    <p className="">Made in Ghana is a collection of essays on
                                        wide-ranging issues highlighting the challenges of democratic
                                        governance and
                                        socio-economic transformation in Ghana and Africa ...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                            <div className="row ">
                                <div className="col-4">
                                    <img src="template/img/img/book2.jpeg" className="float-right" alt="" style={{ width: "100px", height: "160px" }} />
                                </div>
                                <div className="col-8">
                                    <h6><b>Reinventing Development</b></h6>
                                    <p className="">This book shows how
                                        the new architecture of aid has important implications in three
                                        distinct but related ways: the discursive construction and
                                        production of post-colonial societies ..
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 ">
                            <div className="row ">
                                <div className="col-4">
                                    <img src="template/img/img/book3.jpeg" className="float-right" alt="" style={{ width: "100px", height: "160px" }} />
                                </div>
                                <div className="col-8">
                                    <h6><b><a href="">African Time</a></b></h6>
                                    <p className="">AFRICAN TIME In this wide-ranging collection of
                                        essays, Lord Mawuko-Yevugah explores the challenges of political
                                        reform and democratic
                                        governance in Africa at the beginning ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <Link href="/publications">
                            <button className="btn btn-primary text-center" style={{ width: "30%", borderRadius: "40px" }}>
                                More Books
                            </button>
                        </Link>

                    </div>

                </div>

            </div>
            {/* end custom books */}

            {/* About Start */}

            {/* About End */}
            {/* Services Start */}

            {/* Services End */}
            {/* Features Start */}

            {/* Features End */}
            {/* Working Process Start */}
            {/*}
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
            </div> */}
            {/* Working Process End */}
            {/* Pricing Plan Start */}
            {/* <div className="container-fluid pt-5 pb-3">
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
            </div> */}
            {/* Pricing Plan End */}
            {/* Testimonial Start */}

            {/* Testimonial End */}
            {/* Blog Start */}
            <div className="container-fluid mt-5 pb-2">
                <div className="container">

                    <h1 className="display-4 border-bottom text-green text-center mb-5">
                        Social Media
                    </h1>
                    <div className="row">
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                         className="img-fluid"
                                         style={{width:"100%",height:"230px"}}
                                        src="template/img/img/fb.png"
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
                                     
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                   Social Media Test here
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                         className="img-fluid"
                                         style={{width:"100%",height:"230px"}}
                                        src="template/img/img/twitter.jpg"
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
                                       
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                Social Media Test here
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        style={{width:"100%",height:"230px"}}
                                        src="template/img/img/link.png"
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
                        
                                    </a>
                                </div>
                                <p className="m-0 p-4">
                                Social Media Test here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Blog End */}
            <Footer />
        </>
    );
}

export default Welcome;
