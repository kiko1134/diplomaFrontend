import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CustomerProfile(props) {
  let navigate = useNavigate();

  // function handleClickFavorites() {
  //   navigate(
  //     `/customer-profile/favorite-services}`
  //   );
  // }

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }


  function handleClickReview() {
    navigate("/reviews/create");
  }

  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  let {sub} = parseJwt(sessionStorage.getItem("token"));

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
                  <p>User</p>
                  <Link to="/edit-customer">
                    <FiEdit />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3 mx-auto">
                        <h6>Email</h6>
                        <p className="text-muted">
                          {sessionStorage.getItem("email")}
                        </p>
                      </div>
                    </div>
                    <h6>Activity</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <Link to="/customer-profile/favorite-services">
                          <button
                            href="/see-workshop-services"
                            className="btn btn-primary"
                            // onClick={handleClickFavorites}
                          >
                            See favorite services
                          </button>
                        </Link>
                      </div>
                      <div className="col-6 mb-3">
                        <button
                          href="/see-workshop-services"
                          className="btn btn-primary"
                          onClick={handleClickReview}
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

export default CustomerProfile;
