import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

import Footer from "./components/Footer";
import Header from "./components/Header";

function About() {
    Inertia.on("success", (event) => {
        event.detail.page.url === "/about" && window.location.reload();
    });
    return (
        <>
            <Header />
            {/* Page Header Start */}
            <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
                <div className="container py-5">
                    <div className="row align-items-center py-4">
                        <div className="col-md-6 text-center text-md-left">
                            <h1 className="mb-4 mb-md-0 text-white">
                                About Us
                            </h1>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <div className="d-inline-flex align-items-center">
                                <Link className="btn text-white" href="/">
                                    Home
                                </Link>
                                <i className="fas fa-angle-right text-white" />
                                <a className="btn text-white disabled" href="">
                                    About Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header Start */}

            {/* About Start */}
            {/* <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" src="template/img/about.jpg" alt="" />
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
              <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
                Learn About Us
              </h6>
              <h1 className="mb-4">We Are Quality Laundry Provider In Your City</h1>
              <h5 className="font-weight-medium font-italic mb-4">
                Clita sit et ipsum sed. Volup duo sea dolor rebum ea rebum kasd
                stet. Dolor at duo dolor sit stet.
              </h5>
              <p className="mb-2">
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
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
      </div> */}
            {/* About End */}
            {/* Who we are Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <h1 className="display-4 text-green border-bottom  text-center ">
                        Who We Are
                    </h1>
                    <div className=" mb-5">
                        <h4 className="" style={{ marginTop: "40px" }}>
                            {" "}
                            <b> Our Purpose</b>
                        </h4>
                        <p>
                            The purpose of the Centre is to serve as a hub for
                            providing cutting edge research and training in
                            foreign and public policy analysis using
                            multi-disciplinary perspectives, theoretical
                            concepts and empirical evidence and contribute
                            towards the design and implementation of effective
                            policies on various aspects of Africa’s foreign and
                            diplomatic relations.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4>
                            {" "}
                            <b>Our Vision</b>{" "}
                        </h4>
                        <p>
                            The vision of the Centre is to become the leading
                            hub for research and training in foreign policy,
                            diplomacy, and Africa’s global relations, and to
                            provide the intellectual space for a balanced
                            dialogue and debate on global issues and in helping
                            to provide an African input in shaping global
                            affairs to help build a fairer and equitable global
                            system.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4>
                            {" "}
                            <b> Our Mission</b>{" "}
                        </h4>
                        <p>
                            The Centre is committed to advancing academic and
                            professional excellence in foreign policy and
                            diplomacy, through innovative research and advocacy,
                            and preparing transformational leaders and policy
                            makers who are dedicated to confronting the critical
                            challenges of the changing global environment.
                        </p>
                    </div>
                </div>
            </div>

            {/* What we do Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <h1 className="display-4 text-green text-center border-bottom ">
                        What We Do
                    </h1>
                    <div className="row m-2 align-items-center">
                        <div className="col-lg-5 mt-5">
                            <img
                                className="img-fluid"
                                src="template/img/img/gb1.jpg"
                                style={{ height: 500, width: "100%" }}
                                alt=""
                            />
                        </div>

                        {/* What we do Start */}
                        <div className="container-fluid py-5">
                            <div className="container">
                                <h1 className="display-4 text-green text-center border-bottom ">
                                    What We Do
                                </h1>
                                <div className="row m-2 align-items-center">
                                    <div className="col-lg-5 mt-5">
                                        <img
                                            className="img-fluid"
                                            src="template/img/img/gb1.jpg"
                                            style={{
                                                height: 500,
                                                width: "100%",
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-lg-7 mt-lg-0 pl-lg-5">
                                        <h4 className="mt-1">
                                            <b>Global Relations</b>
                                        </h4>
                                        <p>
                                            We make a well informed and
                                            independent input into Africa's
                                            global relations.
                                        </p>
                                        <h4 className="pt-1">
                                            <b>Public Policies</b>
                                        </h4>
                                        <p>
                                            We undertake high level research on
                                            how current global issues intersect
                                            with Africa and Ghana’s public
                                            policy issues.
                                        </p>
                                        <h4 className="pt-1">
                                            <b>International Programs</b>
                                        </h4>
                                        <p>
                                            Developing alliances and joint
                                            programmes with international
                                            organizations and agencies within
                                            the West African sub-region, the
                                            African region and throughout the
                                            world.
                                        </p>
                                        <h4 className="pt-1">
                                            <b>Conferences</b>{" "}
                                        </h4>
                                        <p>
                                            Organizing conferences, seminars and
                                            speakers’ meetings on a wide range
                                            of topics addressed by prominent
                                            scholars, experts and practitioners
                                            from Ghana and abroad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features End */}

                        {/* start goals */}

                        {/* end goals */}
                        <div className="container-fluid ">
                            <div className="container">
                                <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
                                    {/* Working Process */}
                                </h6>
                                <h1 className="display-4 text-green border-bottom text-center ">
                                    Our Goals
                                </h1>

                                <div className="mt-4 pt-3 mb-5">
                                    <p>
                                        The Centre aims to serve as a hub in
                                        providing cutting edge scholarly
                                        research and training, as well as
                                        promote public engagement on global
                                        policy issues using multidisciplinary
                                        perspectives and approaches to
                                        contribute towards the implementation of
                                        effective policies on various aspects of
                                        Africa’s global and diplomatic
                                        relations. In so doing, the Centre will
                                        aim to build networks across Africa,
                                        focusing on key countries such as Ghana,
                                        Nigeria, South Africa, Kenya, Egypt, and
                                        organizations such as AU, Ecowas, and
                                        the UN. It will Identify areas of common
                                        Africa interest in relations to the rest
                                        of the world, and position Africa as a
                                        place of new and exciting opportunities
                                        for business and investment. The Centre
                                        will also offer practical training to
                                        public and private sector agencies in
                                        diplomacy, negotiation and contracts.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p>
                                        The Centre is committed to:
                                        <p>
                                            <b>•</b> Promoting diplomacy as the
                                            best approach to solving global
                                            problems,
                                        </p>
                                        <p>
                                            <b>•</b> Promoting global
                                            citizenship by mobilizing public
                                            support through public
                                            intellectualism, activism, and
                                            research in solving global problems,
                                        </p>
                                        <p>
                                            <b>•</b> Promoting global
                                            citizenship and global activism in
                                            support of global initiatives such
                                            as the SDGs,
                                        </p>
                                        <p>
                                            <b>•</b> Promoting the values of our
                                            common humanity by highlighting
                                            areas of discrimination and abuse to
                                            help devise global solutions,
                                            encouraging global equality, human
                                            rights, cosmopolitanism, and
                                            multilateralism as the basis for
                                            demanding for reforms of global
                                            governance institutions and
                                            processes.
                                        </p>
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p>
                                        To achieve the above, the Centre will
                                        deploy research to promote a robust
                                        response to the myriad of challenges of
                                        the 21st Century global environment. In
                                        doing so, the Centre will contribute to
                                        the development and promotion of policy
                                        options on any given issue of foreign
                                        and diplomatic relationships. Academic
                                        publications will be a core activity of
                                        the Centre to contribute to
                                        international scholarship on Africa’s
                                        global and diplomatic relations.
                                        Conferences and symposia will enable the
                                        Centre to share and exchange its
                                        projects with broader intellectual and
                                        policy communities in the broad areas of
                                        international relations, foreign policy
                                        and diplomacy, and security.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p>
                                        The Centre will also provide avenues for
                                        internship and practical training for
                                        both current students and recent
                                        graduates as its contribution to the
                                        training and development of critical
                                        human resources for various Ministries,
                                        Agencies and Departments (MDAs) across
                                        Africa. It will provide a resource
                                        Centre for researchers and policy makers
                                        across the African continent to engage
                                        critically in policy debates and
                                        decisions. It will serve as an advisory
                                        body to public and private organizations
                                        in the field of global and diplomatic
                                        relations.
                                    </p>
                                    <p>
                                        The Centre will be dedicated to
                                        developing practical and accessible
                                        training resources for the wider African
                                        publics to draw on. The aim is to
                                        develop innovative approaches that
                                        challenge existing inefficiencies and
                                        ineffectiveness with a particular focus
                                        on promoting understanding and
                                        appreciation of the changing global
                                        context. Besides, the Centre will focus
                                        keenly on the business environment
                                        including the role of multinational
                                        corporations, foreign direct investment
                                        by conducting relevant research which
                                        will be useful for policy makers as well
                                        as other stakeholders both within and
                                        outside the African continent.
                                    </p>
                                    <p>
                                        The long-term focus of the Centre
                                        includes the mentoring of emerging
                                        scholars around foreign policy and
                                        diplomacy. Through this mentoring
                                        process, particular emphasis and value
                                        will be placed on bringing together
                                        traditional and emerging knowledge to
                                        create state of the art methodologies
                                        and practices designed to maximize
                                        impact. The mentoring of emerging
                                        researchers through the Centre will
                                        generate new knowledge, innovative
                                        solutions and position our country
                                        appropriately as a regional leader
                                        within the changing global political
                                        economy.
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 mb-5">
                                    <p>
                                        The Centre aims to serve as a hub in
                                        providing cutting edge scholarly
                                        research and training, as well as
                                        promote public engagement on global
                                        policy issues using multidisciplinary
                                        perspectives and approaches to
                                        contribute towards the implementation of
                                        effective policies on various aspects of
                                        Africa’s global and diplomatic
                                        relations. In so doing, the Centre will
                                        aim to build networks across Africa,
                                        focusing on key countries such as Ghana,
                                        Nigeria, South Africa, Kenya, Egypt, and
                                        organizations such as AU, Ecowas, and
                                        the UN. It will Identify areas of common
                                        Africa interest in relations to the rest
                                        of the world, and position Africa as a
                                        place of new and exciting opportunities
                                        for business and investment. The Centre
                                        will also offer practical training to
                                        public and private sector agencies in
                                        diplomacy, negotiation and contracts.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p>
                                        The Centre is committed to:
                                        <p>
                                            <b>•</b> Promoting diplomacy as the
                                            best approach to solving global
                                            problems,
                                        </p>
                                        <p>
                                            <b>•</b> Promoting global
                                            citizenship by mobilizing public
                                            support through public
                                            intellectualism, activism, and
                                            research in solving global problems,
                                        </p>
                                        <p>
                                            <b>•</b> Promoting global
                                            citizenship and global activism in
                                            support of global initiatives such
                                            as the SDGs,
                                        </p>
                                        <p>
                                            <b>•</b>promoting the values of our
                                            common humanity by highlighting
                                            areas of discrimination and abuse to
                                            help devise global solutions,
                                            encouraging global equality, human
                                            rights, cosmopolitanism, and
                                            multilateralism as the basis for
                                            demanding for reforms of global
                                            governance institutions and
                                            processes.
                                        </p>
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p>
                                        To achieve the above, the Centre will
                                        deploy research to promote a robust
                                        response to the myriad of challenges of
                                        the 21st Century global environment. In
                                        doing so, the Centre will contribute to
                                        the development and promotion of policy
                                        options on any given issue of foreign
                                        and diplomatic relationships. Academic
                                        publications will be a core activity of
                                        the Centre to contribute to
                                        international scholarship on Africa’s
                                        global and diplomatic relations.
                                        Conferences and symposia will enable the
                                        Centre to share and exchange its
                                        projects with broader intellectual and
                                        policy communities in the broad areas of
                                        international relations, foreign policy
                                        and diplomacy, and security.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p>
                                        The Centre will also provide avenues for
                                        internship and practical training for
                                        both current students and recent
                                        graduates as its contribution to the
                                        training and development of critical
                                        human resources for various Ministries,
                                        Agencies and Departments (MDAs) across
                                        Africa. It will provide a resource
                                        Centre for researchers and policy makers
                                        across the African continent to engage
                                        critically in policy debates and
                                        decisions. It will serve as an advisory
                                        body to public and private organizations
                                        in the field of global and diplomatic
                                        relations.
                                    </p>
                                    <p>
                                        The Centre will be dedicated to
                                        developing practical and accessible
                                        training resources for the wider African
                                        publics to draw on. The aim is to
                                        develop innovative approaches that
                                        challenge existing inefficiencies and
                                        ineffectiveness with a particular focus
                                        on promoting understanding and
                                        appreciation of the changing global
                                        context. Besides, the Centre will focus
                                        keenly on the business environment
                                        including the role of multinational
                                        corporations, foreign direct investment
                                        by conducting relevant research which
                                        will be useful for policy makers as well
                                        as other stakeholders both within and
                                        outside the African continent.
                                    </p>
                                    <p>
                                        The long-term focus of the Centre
                                        includes the mentoring of emerging
                                        scholars around foreign policy and
                                        diplomacy. Through this mentoring
                                        process, particular emphasis and value
                                        will be placed on bringing together
                                        traditional and emerging knowledge to
                                        create state of the art methodologies
                                        and practices designed to maximize
                                        impact. The mentoring of emerging
                                        researchers through the Centre will
                                        generate new knowledge, innovative
                                        solutions and position our country
                                        appropriately as a regional leader
                                        within the changing global political
                                        economy.
                                    </p>
                                </div>

                                {/* funding */}
                            </div>
                        </div>

                        {/* our consultants */}
                        <div className="">
                            <div className="container">
                                <h1 className="display-4 text-green border-bottom text-center mb-5">
                                    Our Team
                                </h1>
                                <div className="owl-carousel testimonial-carousel">
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/mawuko.jpeg"
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
                                                Prof. Lord Mawuko-Yevugah{" "}
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Executive Director &amp; Lead
                                                Researcher{" "}
                                            </p>
                                            <p className="m-0">
                                                Professor Lord Mawuko-Yevugah is
                                                the Executive Director &amp;
                                                Lead Researcher for the Centre
                                                For African Diplomacy And Global
                                                Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href="https://www.linkedin.com/in/lord-mawuko-yevugah-7329341/"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/lawrence.jpeg"
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
                                                Dr. Lawrence Boakye{" "}
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Head of Operations &amp; Senior
                                                Fellow
                                            </p>
                                            <p className="m-0">
                                                Dr. Lawrence Boakye is a Head of
                                                Operations &amp; Senior Fellow
                                                at the Centre For African
                                                Diplomacy And Global Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href="https://www.linkedin.com/in/dr-lawrence-boakye-20310220/"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/ismeal.jpeg"
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
                                                Dr. Ismael Hlovor{" "}
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Head of Advocacy &amp; Research
                                                Fellow
                                            </p>
                                            <p className="m-0">
                                                Dr. Ismael Hlovor is a Head of
                                                Advocacy &amp; Research Fellow
                                                at the Centre For African
                                                Diplomacy And Global Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href="https://www.linkedin.com/in/dr-ishmael-jason-hlovor-775225ab/"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* bernard */}
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/boss.jpg"
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
                                                Ing. Bernard Okpattah
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Head of Administration &amp; IT
                                                & Research Fellow{" "}
                                            </p>
                                            <p className="m-0">
                                                Ing. Bernard Okpattah is the
                                                Head of Administration &amp; IT
                                                & Research Fellow at the Centre
                                                For African Diplomacy And Global
                                                Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href="https://www.linkedin.com/in/bernard-okpattah/"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/kope.jpeg"
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
                                                Mama Kope II
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Head of Administration &amp;
                                                Communication
                                            </p>
                                            <p className="m-0">
                                                Mama Kope II is the Head of
                                                Administration &amp;
                                                Communicationat the Centre For
                                                African Diplomacy And Global
                                                Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href=""
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/lana.jpeg"
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
                                                Ms. Lana Osea
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Executive Secretary &amp;
                                                Research Associate{" "}
                                            </p>
                                            <p className="m-0">
                                                Ms. Lana Osea is a Executive
                                                Secretary &amp; Research
                                                Associate at the Centre For
                                                African Diplomacy And Global
                                                Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href=""
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/woode.jpeg"
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
                                                Mr. Shadrack Woode{" "}
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Logistics &amp; Publications
                                            </p>
                                            <p className="m-0">
                                                Mr. Shadrack Woode is a
                                                Logistics &amp; Publications
                                                Fellow at the Centre For African
                                                Diplomacy And Global Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href=""
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/soga.jpeg"
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
                                                Mr. Blessed Sogah{" "}
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Associate Fellow For Media &amp;
                                                Strategic Communications
                                            </p>
                                            <p className="m-0">
                                                Mr. Blessed Sogah is an
                                                Associate Fellow for Media &amp;
                                                Strategic Communications at the
                                                Centre For African Diplomacy And
                                                Global Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href=""
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="testimonial-item">
                                        <img
                                            className="position-relative rounded-circle bg-white shadow mx-auto"
                                            src="template/img/img/jasper.jpg"
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
                                                Prof. Jasper A. Ayelazuno{" "}
                                            </h5>
                                            <p className="text-muted font-italic">
                                                Snr. Research Fellow
                                            </p>
                                            <p className="m-0">
                                                Professor Jasper A. Ayelazuno is
                                                a Senior Research Fellow at the
                                                Centre For African Diplomacy And
                                                Global Engagement.
                                            </p>
                                            <a
                                                target="_blank"
                                                className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                                style={{
                                                    width: 38,
                                                    height: 38,
                                                }}
                                                href="https://www.linkedin.com/in/jasper-ayelazuno-b6bb323a/"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>

                                    <a
                                        className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                        style={{ width: 38, height: 38 }}
                                        target="_blank"
                                        href="https://www.linkedin.com/in/paul-ugor-199634109/"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <img
                                    className="position-relative rounded-circle bg-white shadow mx-auto"
                                    src="template/img/img/deaa.jpg"
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
                                        Dr. Emefa Ansah{" "}
                                    </h5>
                                    <p className="text-muted font-italic">
                                        Research Fellow
                                    </p>
                                    <p className="m-0">
                                        Doctor Emefa Ansah is a Fellow
                                        Researcher at the Centre For African
                                        Diplomacy And Global Engagement.
                                    </p>
                                    <a
                                        className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                                        style={{ width: 38, height: 38 }}
                                        target="_blank"
                                        href="https://peoplepill.com/people/dr-emefa-aku-ansah"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Start */}
            <Footer />
        </>
    );
}

export default About;
