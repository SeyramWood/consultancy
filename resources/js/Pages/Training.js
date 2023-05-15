import { Link } from "@inertiajs/inertia-react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Training() {
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
            <div className="container-fluid pt-5 pb-3">
                <div className="container">

                    <h1 className="display-4 text-green border-bottom text-center mb-5">Training</h1>
                    <div className="row">

                        <div className="mb-4">
                            <p>

                                The Centre will provide learning opportunities to build and strengthen capacity in foreign
                                policy research and practice in
                                Ghana and the African region. The long-termgoal of the Training
                                and Mentorship Unit is to evolve into a regional hub for providing professional
                                training and development in international relations, diplomacy and negotiation,
                                international development,
                                security studies, international law and international political
                                economy. In addition, the Training Unit will offer short programmes with varying rangeof
                                certificate courses and non-certificate training for various public and private institutions
                                who wish to address specific
                                skills and challenges based on demand and/or to build capacity for leadership and management
                                in various areas of our governmental.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="container py-5">
                <div className="row m-3">
                    {/* News Grid Start */}
                    <div className="container">
                        <div className="">
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
                                                <div className="container ">
                                                    <div className="row m-4">
                                                        {/* <div className="col-12 text-center cursor-pointer">
                                                            <img src="template/img/img/economy.jpeg" className="img-fluid " style={{ height: "300px", width: "80%" }} alt="" />
                                                        </div> */}
                                                        <div className="col-12 ">
                                                            <h5 className="text-green pt-4">
                                                                <b>CERTIFICATE IN LEADERSHIP & GOVERNANCE</b>

                                                            </h5>
                                                            <p>
                                                                <b>Course Overview: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit veniam reprehenderit? Laboriosam, inventore quibusdam fugiat quo dolorum corporis eius totam enim illo et consequatur ipsam perferendis perspiciatis aliquam. Aliquid.
                                                            </p>
                                                            <p className="text-left">
                                                                <b className="text-left ">Modules: </b>
                                                                <ol >
                                                                    <li>Intruduction To Leadership</li>
                                                                    <li>Leadership and Management Skills</li>
                                                                    <li>Communication and Public Speaking</li>
                                                                    <li>Diplomacy and Negotiation</li>
                                                                    <li>Organizational Leadership and Governance</li>
                                                                    <li>Ethics and Professional Integrity</li>
                                                                    <li>Democratization, Governance and Leadership </li>
                                                                    <li>Public Administration, Law and the Constitution</li>
                                                                    <li>Global Governance and International Law</li>
                                                                    <li>Technology, Leadership and Governance</li>
                                                                </ol>
                                                            </p>
                                                            <p>
                                                                <b>Duration: </b> Three Days/ Three Weekends, Customised
                                                            </p>
                                                            <p>
                                                                <b>Mode of Delivery: </b> Face-to-face, Online, Weekdays, Weekends
                                                            </p>
                                                            <p>
                                                                <b>Cost: </b> $1000(face-to-face); $700(online)
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
                                <div className="col-md-6 mb-2  text-center"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-lg1">
                                    <div className="bg-light mb-4 border" style={{ cursor: "pointer" }}>
                                        <div className="position-relative">
                                            <img className="img-fluid w-100 " src="template/img/img/logo.jpg" style={{ height: "300px" }} alt="" />

                                        </div>
                                        <h5 className="text-green m-0 p-3">

                                            CERTIFICATE IN IN LEADERSHIP & GOVERNANCE
                                        </h5>
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
                                                        <div className="col-12 text-center">
                                                            {/* <img src="template/img/img/logo.jpeg" className="img-fluid" style={{ height: "300px", width: "80%" }} alt="" /> */}
                                                        </div>
                                                        <div className="col-12 ">
                                                            <h5 className="text-green pt-4">
                                                                <b>COURSE TITLE</b>

                                                            </h5>
                                                            <p className="text-left">
                                                                <b className="text-left ">Course Overview </b> 
                                                            </p>
                                                            <p>
                                                                <b>Modules </b>
                                                            </p>
                                                            <p>
                                                                <b>Duration: </b> 
                                                            </p>
                                                            <p>
                                                                <b>Mode of Delivery: </b> 
                                                            </p>
                                                            <p>
                                                                <b>Cost: </b> 
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
                                    <div className="bg-light mb-4" style={{ cursor: "pointer" }}>
                                        <div className="position-relative">
                                            <img className="img-fluid w-100" src="template/img/img/logo.jpeg" style={{ height: "300px" }} alt="" />

                                        </div>
                                        <h5 className="text-green m-0 p-3">

                                            SECOND COURSE
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4 mt-5 mt-lg-0">

                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Training;