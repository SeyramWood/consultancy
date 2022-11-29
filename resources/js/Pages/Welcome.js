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
                                        CENTRE FOR AFRICAN DIPLOMACY & GLOBAL ENGAGEMENT
                                    </h3>
                                    <Link
                                        href="/about"
                                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                                    >
                                        Learn More
                                    </Link>
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
                                        CENTRE FOR AFRICAN DIPLOMACY & GLOBAL ENGAGEMENT
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

            {/* Who we are */}
            <div className="container-fluid pt-5">
                <div className="container">

                    <h1 className="display-4 text-green border-bottom  text-center ">Who We Are</h1>
                    <div className="mb-5">
                        <h4 className="text-center" style={{ marginTop: "40px" }}> <b> Our Purpose</b></h4>
                        <p>
                            The purpose of the Centre is to serve as a hub for providing cutting edge research
                            and training in foreign and public policy analysis using multi-disciplinary perspectives,
                            theoretical concepts and empirical evidence and contribute towards the design and
                            implementation of
                            effective policies on various aspects of Ghana’s foreign and diplomatic relations.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-center"> <b>Our Vision</b> </h4>
                        <p>
                            The vision of the Centre is to become the leading hub for research and training in foreign policy,
                            diplomacy and Africa’s global relations, and to provide the intellectual space for a balanced dialogue
                            and debate on global issues and in helping to provide an African input
                            inshaping global affairs in order to help build a fairer and equitable global system.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-center"> <b> Our Mission</b> </h4>
                        <p>
                            The Centre is committed to advancing academic and professional excellence inforeign
                            policy and diplomacy, through innovative research and advocacy, and preparing
                            transformational leaders and policy makers who are dedicated to confronting the critical
                            challenges of the changing global environment.
                        </p>
                    </div>

                </div>
            </div>

            {/* end of who we are */}

            {/* Custom research */}
            {/* <div className="container"  >

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

            </div> */}
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
                                        <img src="template/img/img/economy.jpeg" className="float-right" alt="" style={{ width: "80px", height: "100px" }} />
                                    </Link>

                                </div>
                                <div className="col-8 ">

                                    <h6 style={{ fontSize: "12px" }}>PREVIOUS EVENT</h6>
                                    <Link href="/events">
                                        <h6><b>COVID-19 PANDEMIC, RUSSIA-UKRAINE WAR & GHANA'S ECONOMIC CRISIS</b></h6>
                                    </Link>
                                    <p className="pb-0 mb-0" style={{ fontSize: "12px" }}>Date: Thursday, September 22nd 2022 </p>
                                    <span className="pt-0 mt-0" style={{ fontSize: "12px" }}>Venue: GIMPA Law School Moot Court Auditorium</span>
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
                                        <h6><b>LAUNCHING OF CENETRE FOR AFRICAN DIPLOMACY & GLOBAL ENGAMENT </b></h6>
                                    </Link>
                                    <p className="pb-0 mb-0" style={{ fontSize: "14px" }}>Date: Thursday, December 1st 2022 </p>
                                    <span className="pt-0 mt-0" style={{ fontSize: "12px" }}>Venue: GIMPA Executive Conference Centre</span>
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
                                        <h6><b>LAUNCHING OF CENETRE FOR AFRICAN DIPLOMACY & GLOBAL ENGAMENT </b></h6>
                                    </Link>
                                    <p className="pb-0 mb-0" style={{ fontSize: "14px" }}>Date: Thursday, December 1st 2022 </p>
                                    <span className="pt-0 mt-0" style={{ fontSize: "12px" }}>Venue: GIMPA Executive Conference Centre </span>
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
                                <a
                                    target="_blank"
                                    href="https://www.graphic.com.gh/news/politics/review-political-incentive-system-development-analyst.html"
                                    className="text-decoration-none"

                                >
                                    <div className="position-relative">

                                        <img
                                            className="img-fluid w-100"
                                            src="template/img/img/dr.png"
                                            alt=""
                                            style={{ height: "225px", width: "" }}
                                        />


                                    </div>
                                    <p className="m-0 p-4">
                                        Professor Lord Mawuko-Yevugah has called for a review of the country’s political and public incentive system
                                    </p> 
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <a
                                    target="_blank"
                                    href="https://newsghana.com.gh/ghana-needs-to-build-a-robust-local-economy-prof-mawuko-yevugah/?amp"
                                    className="text-decoration-none"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        background: "rgba(0, 0, 0, .4)",
                                    }}
                                >
                                    <div className="position-relative">
                                        <img
                                            className="img-fluid w-100"
                                            src="template/img/img/dr2.jpg"
                                            alt=""
                                            style={{ height: "225px", width: "" }}
                                        />

                                    </div>
                                    <p className="m-0 p-4">
                                        Ghana needs to build a robust local economy to withstand future shocks in the economy – Prof Mawuko-Yevugah
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <a
                                    href="https://mobile.ghanaweb.com/GhanaHomePage/business/Cut-down-freebies-for-appointees-Prof-Yevugah-urges-government-1635488"
                                    className=" text-decoration-none"

                                ><div className="position-relative">
                                        <img
                                            className="img-fluid w-100"
                                            src="template/img/img/article.jpg"
                                            alt=""
                                            style={{ height: "225px", width: "" }}
                                        />


                                    </div>
                                    <p className="m-0 p-4">
                                        Cut freebies apointees due to general economic difficulties – Prof. Mawuko-Yevuga
                                    </p> </a>
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
                                    <h6><b><a target="_blank" href="https://www.amazon.com/Made-Ghana-Reflections-Governance-Shifts-ebook/dp/B07LG4BJ1X">Made In Ghana</a></b></h6>
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
                                    <h6><b><a href="https://www.amazon.com/Reinventing-Development-Technologies-Governance-Contemporary-ebook/dp/B00L508H72">Reinventing Development</a></b></h6>
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
                                    <h6><b><a href="https://www.amazon.com/African-Time-Contemporary-Politics-Governance/dp/1481797484">African Time</a></b></h6>
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
                                        style={{ width: "100%", height: "230px" }}
                                        src="template/img/img/fb.png"
                                        alt=""
                                    />
                                    <a
                                        target="_blank"
                                        href="https://m.facebook.com/SocialistMovementOfGhana/posts/?ref=page_internal&mt_nav=0"
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
                                    {/* The Socialist Movement of Ghana - S.M.G */}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        style={{ width: "100%", height: "230px" }}
                                        src="template/img/img/twitter.jpg"
                                        alt=""
                                    />
                                    <a
                                        target="_blank"
                                        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FSocialistMovementOfGhana%2Fposts%2F%3Fref%3Dpage_internal%26mt_nav%3D0&psig=AOvVaw2sfgyh2t6CgyVoLLV0BS5B&ust=1669577512538000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDnsYnLzPsCFQAAAAAdAAAAABAJ"
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
                                    {/* The Socialist Movement of Ghana - S.M.G */}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="shadow mb-4">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        style={{ width: "100%", height: "230px" }}
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
                                    {/* The Socialist Movement of Ghana - S.M.G */}
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
