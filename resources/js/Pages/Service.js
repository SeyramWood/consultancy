import Footer from "./components/Footer";
import Header from "./components/Header";

function Service() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Our Services</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white" href="">
                  Home
                </a>
                <i className="fas fa-angle-right text-white" />
                <a className="btn text-white disabled" href="">
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Services Start */}
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            Our Services
          </h6>
          <h1 className="display-4 text-center mb-5">What We Offer</h1>
          <div className="row">
            <div className="mb-4">
              <h3>Research and Publication Unit</h3>
            <p>
              
              The Centre’s research unit will promote the generation of scientific evidence and
              information on foreign policy and diplomacy in relation to Ghana and the rest of the
              African continent as well as the sharing and application of evidence based foreign policy
              analysis to tackling complex global policy issues using a multidisciplinary approach. 
              The primary goal
              of the Unit will be to assist in improving the quality of foreign policy design and
              implementation by Ghana’s foreign and public policy actors. The Unit will bring together
              scholars and practitioners with broad expertise in international relations, diplomacy, 
              political science,
              economics, policy analysis, development administration, industrial policy, trade, 
              and investment to produce
              high quality research, discussions and analysis of current global policy issues.
            </p>
            </div>
            <div className="mb-4">
              <h3>Training and Mentorship Unit</h3>
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
            <div className="mb-4">
              <h3>Annual Lecture on Foreign Policy and Diplomacy</h3>
            <p>
              
              As part of its outreach and in putting issues of foreign and diplomatic relations on the national agenda, 
              the Centre through its
              Advocacy and Communication Unit will organize periodic public for seminars. An Annual Lecture on a topical foreign policy
              and diplomatic issue to be delivered by a noted scholar or practitioner will also be delivered.
               Such lectures could be named after a
              distinguished Ghanaian in the area of foreignserviceand diplomacy such as Alex Quaison-Sackey 
              (Former Ambassador and Minister for
              Foreign Affairs and the first Ghanaian/African to Head the UN General Assembly); Kenneth Dadzie(Former Ambassador and First African Secretary
              General of United Nations Conferenceon Trade and Development); Robert Gardiner (Former UN Under-Secretary General and Executive Secretary of
              the UN Economic Commission for Africa); Kofi Annan (Former UN Secretary General), etc. Such a lecture will not only be an opportunity for deep
              and intellectual engagement on key issues of global importance but by naming it after such distinguished Ghanaians will provide an opportunity to
              recognize and celebrate them as role-models for
              current and future generations of Ghanaian diplomats.
            </p>
            </div>
            <div className="mb-4">
              <h3>Advocacy and Communication Unit</h3>
            <p>
              
              This Unit will be responsible for providing platform to share Centre’s research and other
              activities and to critically engage key stakeholders, including parliamentarians, ministers of state,
              senior public servants, members of the diplomatic corps, academia, and civil society organizations. The Unit will also be
              responsible for putting together policy briefs and alerts, working papers and other research publications aimed at
              helping to educate and inform
              stakeholders. The Unit’s work will also help to identify areas for policy intervention and help to develop
              policy briefs that could provide basis for legislative proposals for policy-makers and other stakeholders.
            </p>
            </div>
            
          </div>
          
        </div>
      </div>
      {/* Services End */}
      {/* Testimonial Start */}
     
      {/* Testimonial End */}
      <Footer />
    </>

  );
}

export default Service;