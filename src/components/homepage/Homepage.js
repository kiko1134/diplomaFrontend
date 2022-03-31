import React from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Newsletter-Subscription-Form.css";
import "../../assets/css/Registration-Form-with-Photo.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceId: "",
      services: [],
    };
  }

  setService = (event) => {
    this.setState({ serviceId: event.target.value });
  };

  handleSubmit = () => {toast.warning("You must login to search services")};

  handleWorkshops = () => {toast.warning("You must login to see workshops")};

  handleReviews = () => {toast.warning("You must login to see reviews")};

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-light navbar-expand-lg sticky-top navigation-clean-button"
          style={{
            color: "var(--bs-gray-dark)",
            background: "var(--bs-gray-800)",
          }}
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="/"
              style={{ color: "var(--bs-warning)" }}
            >
              CarsWorld
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-6"
              aria-controls="navbarSupportedContent-6"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              id="navbarSupportedContent-6"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="/"
                    style={{ color: "var(--bs-gray-100)" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick = {this.handleReviews}
                    style={{ color: "rgb(255,255,255)" }}
                  >
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "rgb(255,255,255)" }}
                    onClick = {this.handleWorkshops}
                  >
                    All Workshops
                  </a>
                </li>
              </ul>
              <span className="navbar-text actions">
                <Link
                  className="login"
                  to="/login"
                  style={{ color: "var(--bs-gray-100)" }}
                >
                  Log In
                </Link>
                <Link
                  className="btn btn-light action-button"
                  role="button"
                  to="/pre-register"
                  style={{ background: "var(--bs-warning)", color: "#000000" }}
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </nav>
        <section
          className="newsletter-subscribe"
          style={{ height: "800px", backgroundAttachment: "fixed" }}
        >
          <div className="container" style={{ padding: "50px" }}>
            <div className="intro">
              <h2
                className="text-center"
                style={{
                  color: "var(--bs-gray-100)",
                  fontFamily: "ABeeZee,sans-serif",
                  FontSize: "28px",
                }}
              >
                <strong>Find the best price for you</strong>
              </h2>
            </div>
            <p style={{ textAlign: "center", color: "var(--bs-gray-100)" }}>
              Search the service you desire and find it at the best price!
            </p>
            <form
              className="d-flex justify-content-center flex-wrap mt-4"
              method="post"
            >
              <Form.Select
                // style={{ width: "500px", height: "45px" }}
                style={{ width: "35rem", height: "2.8rem" }}
                aria-label="Default select example"
                onChange={this.setService}
              >
                <option>Select service</option>
              </Form.Select>
              <div className="mb-3"></div>
              <div className="mb-3">
                <Link to={{ pathname: "/" }}>
                  <button
                    // style={{color:"#0d6efd"}}
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Search
                  </button>
                </Link>
              </div>
            </form>
          </div>
          {/* <section></section> */}
        </section>
        <section className="article-list">
          <div className="container">
            <div className="intro">
              <h2
                className="text-center"
                style={{ marginTop: "30px", paddingTop: "100px" }}
              >
                Why CarsWorld?
              </h2>
              <p className="text-center" style={{ paddingBottom: "30px" }}>
                Behind the success of CarsWorld lie three simple but very import
                rules!
              </p>
            </div>
            <div
              className="row articles"
              style={{ marginBottom: "58px", paddingBottom: "150px" }}
            >
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/resposive_content.jpg")}
                    style={{ borderRadius: "5px", marginBottom: "22px" }}
                  />
                </a>
                <h3 className="name">Up To Date</h3>
                <p className="description">
                  <strong>
                    Information for every workshop is always up&nbsp; to date,
                    no matter what
                  </strong>
                </p>
                <a className="action" href="#"></a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/support.png")}
                    style={{ borderRadius: "5px" }}
                  />
                </a>
                <h3 className="name">24 Hour Support</h3>
                <p className="description">
                  <strong>
                    No matter the time CarsWorld has support option, which make
                    it easier for every user
                  </strong>
                </p>
                <a className="action" href="#"></a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/user_friendly.jpg")}
                    style={{
                      borderRadius: "5px",
                      marginBottom: "58px",
                      marginTop: "30px",
                    }}
                  />
                </a>
                <h3 className="name">User Friendly</h3>
                <p className="description">
                  <strong>
                    Information for every service is presented in an user
                    friendly way&nbsp;
                  </strong>
                </p>
                <a className="action" href="#"></a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="article-list"
          style={{ background: "var(--bs-gray-dark)", height: "600px" }}
        >
          <div
            className="container"
            style={{
              background: "var(--bs-gray-dark)",
              marginBottom: "30px",
              height: "600px",
            }}
          >
            <div className="intro">
              <h2
                className="text-center"
                style={{ color: "var(--bs-warning)" }}
              >
                News
              </h2>

              <Carousel fade>
                <Carousel.Item>
                  <img
                    style={{ width: "800px" }}
                    className="d-block w-100"
                    src={require("../../assets/img/kia_news.png")}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../../assets/img/Lambo_news.png")}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../../assets/img/ford_news.png")}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <p className="text-center"></p>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Homepage;
