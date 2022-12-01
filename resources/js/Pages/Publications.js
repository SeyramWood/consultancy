import { Link } from "@inertiajs/inertia-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticleOne from "./components/Articles/ArticleOne";
import ArticleThree from "./components/Articles/ArticleThree";
import ArticleTwo from "./components/Articles/ArticleFour";

import BookOne from "./components/Books/BookOne";
import BookTwo from "./components/Books/BookTwo";
import BookThree from "./components/Books/BookThree";
import ResearchOne from "./components/Research/ResearchOne";
import ResearchTwo from "./components/Research/ResearchTwo";
import ResearchThree from "./components/Research/ResearchThree";
import BookFour from "./components/Books/BookFour";



function Publication() {
  return (
    <>

      <Header />
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Publications</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn text-white" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-right text-white" />
                <a className="btn text-white disabled" target="_blank" href="">
                  Publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Detail Start */}
      <div className="container py-5">
        <div className="row">
          {/* Blog Detail Start */}
          <div className="col-lg-8">
            <div className="tab-content" id="v-pills-tabContent">
              {/* Articles content */}

              {/* Book content */}
              <div
                className="tab-pane fade show active"
                id="v-pills-book1"
                role="tabpanel"
                aria-labelledby="v-pills-book1-tab"
              >
                <BookOne />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-book2"
                role="tabpanel"
                aria-labelledby="v-pills-book2-tab"
              >
                <BookTwo />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-book3"
                role="tabpanel"
                aria-labelledby="v-pills-book3-tab"
              >
                <BookThree />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-book4"
                role="tabpanel"
                aria-labelledby="v-pills-book4-tab"
              >
                <BookFour />
              </div>

              {/* Research content */}
              <div
                className="tab-pane fade"
                id="v-pills-research1"
                role="tabpanel"
                aria-labelledby="v-pills-research1-tab"
              >
                <ResearchOne />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-research2"
                role="tabpanel"
                aria-labelledby="v-pills-reserch2-tab"
              >
                <ResearchTwo />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-research3"
                role="tabpanel"
                aria-labelledby="v-pills-research3-tab"
              >
                <ResearchThree />
              </div>

            </div>

          </div>
          {/* Blog Detail End */}
          {/* Sidebar Start */}
          <div className="col-lg-4 mt-5 mt-lg-0">

            {/* Category Start */}
            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Categories</h3>
              <ul className="list-group">
                {/* Articles */}

                {/* Books */}
                <a href="">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                      <div
                        // className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Books
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="v-pills-book1-tab"
                            data-toggle="pill"
                            href="#v-pills-book1"
                            role="tab"
                            aria-controls="v-pills-book1"
                            aria-selected="true"
                          >
                            Made In Ghana
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-book2-tab"
                            data-toggle="pill"
                            href="#v-pills-book2"
                            role="tab"
                            aria-controls="v-pills-book2"
                            aria-selected="false"
                          >
                            Reinventing Development
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-book3-tab"
                            data-toggle="pill"
                            href="#v-pills-book3"
                            role="tab"
                            aria-controls="v-pills-book3"
                            aria-selected="false"
                          >
                            African Time
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-book4-tab"
                            data-toggle="pill"
                            href="#v-pills-book4"
                            role="tab"
                            aria-controls="v-pills-book4"
                            aria-selected="false"
                          >
                            African Youth Cultures In a Globalized World
                          </a>

                        </div>
                      </div>
                    </div>
                  </li>
                </a>
                {/* Research */}
                <a href="">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                      <div
                        // className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Research
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link "
                            id="v-pills-research1-tab"
                            data-toggle="pill"
                            href="#v-pills-research1"
                            role="tab"
                            aria-controls="v-pills-research1"
                            aria-selected="true"
                          >
                            Economic Reform
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-research2-tab"
                            data-toggle="pill"
                            href="#v-pills-research2"
                            role="tab"
                            aria-controls="v-pills-research2"
                            aria-selected="false"
                          >
                            Liberal Democracy
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-research3-tab"
                            data-toggle="pill"
                            href="#v-pills-research3"
                            role="tab"
                            aria-controls="v-pills-research3"
                            aria-selected="false"
                          >
                            Traditional Authority In Ghana
                          </a>

                        </div>
                      </div>
                    </div>
                  </li>
                </a>
                <a href="">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                      <div
                        // className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Articles
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link "
                            target="_blank"
                            // id="v-pills-a1-tab"
                            // data-toggle="pill"
                            // href="#v-pills-a1"
                            href="https://newsghana.com.gh/ghana-needs-to-build-a-robust-local-economy-prof-mawuko-yevugah/?amp"
                          // role="tab"
                          // aria-controls="v-pills-a1"
                          // aria-selected="true"
                          >
                            A Robust Local Economy
                          </a>
                          <a
                            className="nav-link"
                            target="_blank"
                            // id="v-pills-a2-tab"
                            // data-toggle="pill"
                            // href="#v-pills-a2"
                            href="https://mobile.ghanaweb.com/GhanaHomePage/business/Cut-down-freebies-for-appointees-Prof-Yevugah-urges-government-1635488"
                          // role="tab"
                          // aria-controls="v-pills-a2"
                          // aria-selected="false"
                          >
                            Cut down freebies
                          </a>
                          <a
                            className="nav-link"
                            target="_blank"
                            // id="v-pills-a3-tab"
                            // data-toggle="pill"
                            // href="#v-pills-a3"
                            href="https://www.graphic.com.gh/news/politics/review-political-incentive-system-development-analyst.html"
                          // role="tab"
                          // aria-controls="v-pills-a3"
                          // aria-selected="false"
                          >
                            Review of the country’s incentive
                          </a>

                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              </ul>
            </div>

            {/* Image Start */}

          </div>
          {/* Sidebar End */}
        </div>
      </div>

      <Footer />
    </>


  );
}

export default Publication;