import { Link } from "@inertiajs/inertia-react";
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
                <Link className="btn text-white" href="/">
                  Home
                </Link>
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
          
          <h1 className="display-4 text-green border-bottom text-center mb-5">What We Offer</h1>
          <div className="row">
            <div className="mb-4">
              <h3>Research and Publication</h3>
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
              <h3>Training and Mentorship</h3>
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
              distinguished Ghanaian in the area of foreign service and diplomacy such as Alex Quaison-Sackey 
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
              <h3>Advocacy and Communication</h3>
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

      {/* service images  */}
      <div className="container  text-center">
       <div className="row p-3">
       
        <div className="col-lg-6 mb-5 col-sm-12 ">
          <div className="border">
           <img src="template/img/img/pub.jpg" className="img-fluid" style={{width:"100%",height:350}}  alt="lectures" />
          </div>
          <div className="p-3 border">
             <h3 className="text-left">Publications</h3>
          </div>
        </div>
        <div className="col-lg-6 mb-5 col-sm-12  ">
        <div className="border">
        <img src="template/img/img/africanLectures.jpg" className="img-fluid" style={{width:"100%",height:350}}  alt="mps" />
          </div>
          <div className="p-3 border">
             <h3 className="text-left">Training</h3>
          </div>
        </div>
        <div className="col-lg-6 mb-5 col-sm-12  ">
        <div className="border">
        <img src="template/img/img/lectures.jpg" className="img-fluid" style={{width:"100%",height:350}}  alt="mps" />
          </div>
          <div className="p-3 border">
             <h3 className="text-left">Communication</h3>
          </div>
        </div>
        <div className="col-lg-6 mb-5 col-sm-12  ">
        <div className="border">
        <img src="template/img/img/mps.jpg" className="img-fluid" style={{width:"100%",height:350}}  alt="mps" />
          </div>
          <div className="p-3 border">
             <h3 className="text-left">Communication</h3>
          </div>
        </div>
        

       </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="p-4">
            <h1 className="text-green border-bottom text-center">
            THE BASIS FOR THE CENTRE
            </h1>
            <p className="pt-4 mt-4">
            Ghana has established itself not only as a pacesetter in Africa’s 
            post-colonial foreign policy but also as a leader in the continent’s 
            recent renaissance in democratic governance and economic stability. 
            Thus, since the attainment of political independence, Ghana has served
             as initiator and driver of Africa’s post-independence strategies for 
             engaging the rest of the world. This historic role has crystallized 
             in the form of a strong Pan-Africanist foreign policy agenda and 
            commitment to multilateralism through relevant global institutions. 
            The country has also contributed its fair share of human resources in 
            the form of a generation of distinguished Ghanaian diplomats and 
            international public servants. Centre Foreign Policy and Diplomacy 
            (CFPD) was conceived and envisioned as an independent, 
            non-governmental, non-profit think-tank whose vision is to become 
            the leading African voice on global affairs and Africa’s diplomatic 
            relations through research, advocacy and public debate.
            </p>
            <p>
            The establishment of the Centre will therefore provide the needed 
            space not only for scholars and practitioners of foreign affairs and 
            diplomacy to interact but more importantly it will help provide a 
            much-needed intellectual base for shaping our country’s foreign 
            policy agenda and diplomatic engagements in an increasingly complex 
            global environment. Combining cutting edge research with training and 
            advocacy, the Centre aims to become a regional hub for international 
            relations, foreign policy studies, diplomacy and negotiation, 
            international development, strategic and security studies, 
            international law and
             international political economy. Our ultimate aim is to position 
             ourselves as a leading think-tank presenting Ghanaian and African 
             perspective on global affairs and in training the next generation of 
             African experts in global affairs and diplomacy. Having played host to 
             some of the major global events of the 20th century, Ghana and the 
             historic city of Accra are poised, through the activities of the 
             Centre to once again, showcase the ‘African Genius’ which 
             Nkrumah had envisioned at the dawn of African liberation.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Start */}
     
      {/* Testimonial End */}
      <Footer />
    </>

  );
}

export default Service;