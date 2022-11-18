import Footer from "./components/Footer";
import Header from "./components/Header";

function About() {
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
                <a className="btn text-white" href="">
                  Home
                </a>
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

          <h1 className="display-4 text-center ">Who We Are</h1>
          <div className=" mb-5">
            <h5>Our Purpose</h5>
            <p>
              The purpose of the Centre is to serve as a hub for providing cutting edge research
              and training in foreign and public policy analysis using multi-disciplinary perspectives,
              theoretical concepts and empirical evidence and contribute towards the design and
              implementation of
              effective policies on various aspects of Ghana’s foreign and diplomatic relations.
            </p>
          </div>
          <div className="mb-5">
            <h5>Our Vision</h5>
            <p>
              The vision of the Centre is to become the leading hub for research and training in foreign policy,
              diplomacy and Africa’s global relations, and to provide the intellectual space for a balanced dialogue
              and debate on global issues and in helping to provide an African input
              inshaping global affairs in order to help build a fairer and equitable global system.
            </p>
          </div>
          <div className="mb-5">
            <h5>Our Mission</h5>
            <p>
              The Centre is committed to advancing academic and professional excellence inforeign
              policy and diplomacy, through innovative research and advocacy, and preparing
              transformational leaders and policy makers who are dedicated to confronting the critical
              challenges of the changing global environment.
            </p>
          </div>

        </div>
      </div>
      {/* Working Process End */}
      {/* Features Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            {/* Working Process */}
          </h6>
          <h1 className="display-4 text-center ">What We Do</h1>
          <div className="mb-5">
            <h5>Global Relations</h5>
            <p>
              We make a well informed and independent input into Africa's global relations.
            </p>
          </div>
          <div className="mb-5">
            <h5>Public Policies</h5>
            <p>
              We undertake high level research on how current global issues intersect with Africa 
              and Ghana’s public policy issues.
            </p>
          </div>
          <div className="mb-5">
            <h5>International Programs</h5>
            <p>
              Developing alliances and joint programmes with international organizations and
              agencies within the West African sub-region, the African region and throughout the world.
            </p>
          </div>
          <div className="mb-5">
            <h5>Resource Center</h5>
            <p>
              Maintaining a resource centre and reference library for students and scholars of foreign policy and 
              diplomacy.</p>
          </div>
          <div className="mb-5">
            <h5>Conferences</h5>
            <p>
              Organizing conferences, seminars and speakers’ meetings on a wide range of
              topics addressed by prominent scholars, experts and practitioners from Ghana and abroad.
            </p>
          </div>
          <div className="mb-5">
            <h5>Training Programs</h5>
            <p>
              Encouraging an interest in foreign affairs and diplomatic relations among the youth through internship and 
              training programmes for current students and recent graduates.
            </p>
          </div>


        </div>
      </div>
      {/* Features End */}
      
      {/* Footer Start */}
      <Footer />
    </>

  );
}

export default About;