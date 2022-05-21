import React from "react";
import "../../assets/css/Article-List.css";
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Newsletter-Subscription-Form.css";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
import AuthService from "../API/AuthService";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import userService from "../API/UserService";
import { useState, useEffect } from "react";

function Logged(props) {
  let navigate = useNavigate();

  const [serviceId, setServiceId] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function DidMount() {
      const services = await userService.getServices();
      setServices(services);
    }

    DidMount();
  }, [serviceId]);

  function handleChange(event) {
    setServiceId({ serviceId: event.target.value });
  }

  function logoutUser(event) {
    event.preventDefault();
    AuthService.logout();
    navigate("/");
  }

  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

  let {sub} =  parseJwt(sessionStorage.getItem("token"));
  function handleReviews() {
    navigate("/reviews");
  }

  function handleSearch(e){
    e.preventDefault();
    if(sessionStorage.getItem("authorities") === "USER"){
        navigate(`/search-service/${Object.values(
            serviceId
          ).toString()}`)
    }else{
        navigate(`/search-service/workshop/${Object.values(
            serviceId
          ).toString()}`)
    }
  }

  function chooseProfile() {
    let role = sessionStorage.getItem("authorities");
    if (role === "USER") {
      navigate("/customer-profile");
    } else {
      navigate("/workshop-profile");
    }
  }

  return (
    <div>
      {" "}
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
                  href="/logged"
                  style={{ color: "var(--bs-gray-100)" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "rgb(255,255,255)" }}
                  onClick={handleReviews}
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/workshops"
                  style={{ color: "rgb(255,255,255)" }}
                >
                  All Workshops
                </a>
              </li>
            </ul>
            <span className="navbar-text actions">
              <button
                className="btn btn-primary.text-nowrap"
                onClick={chooseProfile}
                style={{ color: "var(--bs-warning)", fontWeight: "bold" }}
              >
                Hi, {sub}
              </button>
              <button
                className="btn btn-light action-button"
                role="button"
                onClick={logoutUser}
                style={{ background: "var(--bs-warning)", color: "#000000" }}
              >
                Logout
              </button>
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
                fontSize: "28px",
              }}
            >
              <strong>Find the best price for you</strong>
            </h2>
          </div>
          <p style={{ textAlign: "center", color: "var(--bs-gray-100)" }}>
            Search the service you desire and find it at the best price!
          </p>
          <form
            className="d-flex justify-content-center flex-wrap"
            method="post"
          >
            <Form.Select
              // style={{ width: "500px", height: "45px" }}
              style={{ width: "35rem", height: "2.8rem" }}
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option>Select service</option>
              {services ? (
                services.map((element) => (
                  <option value={element.id}>{element.name}</option>
                ))
              ) : (
                <> </>
              )}
            </Form.Select>
            <div className="mb-3"/>
            <div className="mb-3">
              {/* <Link
                to={{
                  pathname: `/search-service/${Object.values(
                    serviceId
                  ).toString()}`,
                }}
              > */}
                <button
                  // style={{color:"#0d6efd"}}
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleSearch}
                >
                  Search
                </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
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
                  alt=""
                />
              </a>
              <h3 className="name">Up To Date</h3>
              <p className="description">
                <strong>
                  Information for every workshop is always up&nbsp; to date, no
                  matter what
                </strong>
              </p>
              <a className="action" href="#"/>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../../assets/img/support.png")}
                  style={{ borderRadius: "5px" }}
                  alt=""
                />
              </a>
              <h3 className="name">24 Hour Support</h3>
              <p className="description">
                <strong>
                  No matter the time CarsWorld has support option, which make it
                  easier for every user
                </strong>
              </p>
              <a className="action" href="#"/>
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
                  alt=""
                />
              </a>
              <h3 className="name">User Friendly</h3>
              <p className="description">
                <strong>
                  Information for every service is presented in an user friendly
                  way&nbsp;
                </strong>
              </p>
              <a className="action" href="#"/>
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
            <h2 className="text-center" style={{ color: "var(--bs-warning)" }}>
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
          <p className="text-center"/>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Logged;
