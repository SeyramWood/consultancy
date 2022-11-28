import { Link } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";


function About() {

  Inertia.on('success', (event) => {
    console.log(event.detail.page.url === "/about" && window.location.reload())
  })
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">About Us</h1>
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

          <h1 className="display-4 text-green border-bottom  text-center ">Who We Are</h1>
          <div className=" mb-5">
            <h4 className="" style={{ marginTop: "40px" }}> <b> Our Purpose</b></h4>
            <p>
              The purpose of the Centre is to serve as a hub for providing cutting edge research
              and training in foreign and public policy analysis using multi-disciplinary perspectives,
              theoretical concepts and empirical evidence and contribute towards the design and
              implementation of
              effective policies on various aspects of Ghana’s foreign and diplomatic relations.
            </p>
          </div>
          <div className="mb-5">
            <h4> <b>Our Vision</b> </h4>
            <p>
              The vision of the Centre is to become the leading hub for research and training in foreign policy,
              diplomacy and Africa’s global relations, and to provide the intellectual space for a balanced dialogue
              and debate on global issues and in helping to provide an African input
              inshaping global affairs in order to help build a fairer and equitable global system.
            </p>
          </div>
          <div className="mb-5">
            <h4> <b> Our Mission</b> </h4>
            <p>
              The Centre is committed to advancing academic and professional excellence inforeign
              policy and diplomacy, through innovative research and advocacy, and preparing
              transformational leaders and policy makers who are dedicated to confronting the critical
              challenges of the changing global environment.
            </p>
          </div>

        </div>
      </div>

      {/* What we do Start */}
      <div className="container-fluid py-5">

        <div className="container">
          <h1 className="display-4 text-green text-center border-bottom ">What We Do</h1>
          <div className="row m-2 align-items-center">
            <div className="col-lg-5 mt-5">
              <img className="img-fluid" src="template/img/img/gb1.jpg" style={{ height: 500, width: "100%" }} alt="" />
            </div>
            <div className="col-lg-7 mt-lg-0 pl-lg-5">
              <h4 className="mt-1">
                <b>Global Relations</b></h4>
              <p>
                We make a well informed and independent input into Africa's global relations.
              </p>
              <h4 className="pt-1"><b>Public Policies</b></h4>
              <p>
                We undertake high level research on how current global issues intersect with Africa
                and Ghana’s public policy issues.
              </p>
              <h4 className="pt-1"><b>International Programs</b></h4>
              <p>
                Developing alliances and joint programmes with international organizations and
                agencies within the West African sub-region, the African region and throughout the world.
              </p>
              <h4 className="pt-1"><b>Conferences</b> </h4>
              <p>
                Organizing conferences, seminars and speakers’ meetings on a wide range of
                topics addressed by prominent scholars, experts and practitioners from Ghana and abroad.
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
          <h1 className="display-4 text-green border-bottom text-center ">Our Goals</h1>

          <div className="mt-4 pt-3 mb-5">

            <p>
              The Centre aims to be an independent and autonomous national research hub
              and think-tank that
              provides scholarly and practical inputs into national and international
              agendas focused on all aspects of Ghana’s engagements with the world. The
              research will also be used to promote
              a robust response to the myriad of challenges of the 21st Century global
              environment. In doing so, the Centre will contribute to the development and
              promotion of policy options on any given issue of foreign and diplomatic
              relationships.
              Academic publications will be a core activity of the Centre to contribute to
              international
              scholarship on Ghana’s foreign and diplomatic relations. Conferences and
              symposia will enable the Centre to share and exchange its projects with a broader intellectual and policy communities in the broad areas of
              international relations, foreign policy and diplomacy, and security.
            </p>
          </div>
          <div className="mb-5">
            <p>
              The Centre will also provide avenues for internship and practical training
              for both
              current students and recent graduates as its contribution to the training and
              development of critical human resources for various Ministries, Agencies and
              Departments (MDAs). It will provide a resource centre for researchers and
              policy makers from the various MDAs to engage critically in policy debates
              and decisions. It will serve as an advisory body to public and private
              organisations in the field of foreign and diplomatic relations.
            </p>
          </div>
          <div className="mb-5">
            <p>
              The Centre will be dedicated to developing practical and accessible
              training resources for the wider Ghanaian public to draw on. The aim is to
              develop innovative approaches that
              challenge existing inefficiencies and ineffectiveness with a particular focus
              on promoting understanding and appreciation of the changing global context.
              Besides, the Centre will focus keenly on the business environment including the role of
              multinational corporations, foreign direct investment by conducting relevant research which
              will be useful for policy makers as well as other stakeholders both within and outside the country.
            </p>
          </div>
          <div className="mb-5">

            <p>
              The long-term focus of the Centre includes the mentoring of
              emerging scholars around foreign policy and diplomacy. Through this
              mentoring process, particular emphasis and value will be placed on
              bringing together traditional and emerging knowledge to create
              state of the art methodologies and practices designed to maximize impact.
              The mentoring of emerging researchers through the Centre will generate new
              knowledge, innovative solutions and position our country appropriately as
              a regional leader within the changing global political economy.
            </p>
          </div>

        </div>
      </div>




      {/* our consultants */}
      <div className="container-fluid py-5">
        <div className="container">

          <h1 className="display-4 text-green border-bottom text-center mb-5">Our Team</h1>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
              <img
                className="position-relative rounded-circle bg-white shadow mx-auto"
                src="template/img/img/at1.jpeg"
                style={{
                  width: 100,
                  height: 100,
                  padding: 12,
                  marginBottom: "-50px",
                  zIndex: 1
                }}
                alt=""
              />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Prof. Lord Mawuko-Yevugah </h5>
                <p className="text-muted font-italic">Independent Researcher</p>
                <p className="m-0">
                  Professor Lord Mawuko-Yevugah is the Lead Researcher for the
                  Center For African Diplomacy And Global Engagement.
                </p>
                <Link
                    className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/lord-mawuko-yevugah-7329341/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
              </div>
            </div>
            <div className="testimonial-item">
              <img
                className="position-relative rounded-circle bg-white shadow mx-auto"
                src="template/img/img/jasper.jpg"
                style={{
                  width: 100,
                  height: 100,
                  padding: 12,
                  marginBottom: "-50px",
                  zIndex: 1
                }}
                alt=""
              />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Prof. Jasper A. Ayelazuno </h5>
                <p className="text-muted font-italic">Snr. Research Fellow</p>
                <p className="m-0">
                  Professor Jasper A. Ayelazuno is a Senior Research Fellow at the
                  Center For African Diplomacy And Global Engagement.
                </p>
                <Link
                    className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/jasper-ayelazuno-b6bb323a/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
              </div>
            </div>
            <div className="testimonial-item">
              <img
                className="position-relative rounded-circle bg-white shadow mx-auto"
                src="template/img/img/paulugo.jpg"
                style={{
                  width: 100,
                  height: 100,
                  padding: 12,
                  marginBottom: "-50px",
                  zIndex: 1
                }}
                alt=""
              />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Prof. Paul Ugor </h5>
                <p className="text-muted font-italic">Snr. Research Fellow</p>
                <p className="m-0">
                  Professor Paul Ugor is a Senior Research Fellow at the
                  Center For African Diplomacy And Global Engagement.
                </p>
              
                  <Link
                    className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/paul-ugor-199634109/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
               

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
                  zIndex: 1
                }}
                alt=""
              />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Dr. Emefa Ansah   </h5>
                <p className="text-muted font-italic">Research Fellow</p>
                <p className="m-0">
                  Doctor Emefa Ansah is a Fellow Researcher at the
                  Center For African Diplomacy And Global Engagement.
                </p>
                <Link
                    className="btn btn-outline-dark rounded-circle text-center m-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://peoplepill.com/people/dr-emefa-aku-ansah"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
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