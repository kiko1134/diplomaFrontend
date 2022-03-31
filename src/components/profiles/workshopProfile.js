import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function WorkshopProfile(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/services-from-workshop");
  }

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  let { sub } = parseJwt(sessionStorage.getItem("token"));
  console.log(sub);
  function handleReview() {
    navigate("/reviews/create");
  }

  return (
    <section
      className="vh-100 bg-secondary"
      style={{ backgroundColor: "#f4f5f7" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom text-center text-black"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: "80px" }}
                  />
                  <h5>{sub}</h5>
                  <p>Workshop</p>
                  <Link to="/edit-workshop">
                    <FiEdit />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">
                          {sessionStorage.getItem("email")}
                        </p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">
                          {sessionStorage.getItem("phone_number")}
                        </p>
                      </div>
                    </div>
                    <div className="row pt-1">
                      <div className="col-6 mb-3 mx-auto">
                        <h6>Workshop Address</h6>
                        <p className="text-muted">
                          {sessionStorage.getItem("workshop_address")}
                        </p>
                      </div>
                    </div>
                    <h6>Overall</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3 mx-auto">
                        <h6>Likes</h6>
                        <p className="text-muted">4</p>
                      </div>
                    </div>
                    <h6>Services</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3 mx-auto">
                        <a href="/add-service" className="btn btn-primary">
                          Add service
                        </a>
                      </div>
                      <div className="col-6 mb-3 mx-auto">
                        <button
                          href="/see-workshop-services"
                          className="btn btn-primary"
                          onClick={handleClick}
                        >
                          See services
                        </button>
                      </div>
                      <div className="col-6 mb-3 mx-auto">
                        <button
                          className="btn btn-primary"
                          onClick={handleReview}
                        >
                          Create review for CarsWorld
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkshopProfile;
