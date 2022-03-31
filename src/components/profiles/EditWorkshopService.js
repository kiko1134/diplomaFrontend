import React from "react";
import userService from "../API/userService";
import { useNavigate } from "react-router-dom";

class EditWorkshopProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      service: sessionStorage.getItem("serviceName"),
      price: sessionStorage.getItem("price"),
    };

    this.changePrice = this.changePrice.bind(this);
  }

  changePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  saveUser = (e) => {
    e.preventDefault();
    var user = {
      workshop_id: sessionStorage.getItem("id"),
      service_name: this.state.service,
      price: this.state.price,
    };

    userService.editServiceToWorkshop(user, () =>
      this.props.navigate("/services-from-workshop")
    );
    sessionStorage.removeItem("serviceName");
    sessionStorage.removeItem("price");
  };

  render() {
    return (
      <section className="vh-100 gradient-custom bg-secondary">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-warning text-secondary"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Update Service
                    </h2>
                    <br />
                    <br />

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={this.state.price}
                        onChange={this.changePrice}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        New price
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-secondary btn-lg px-5"
                      type="submit"
                      onClick={this.saveUser}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function EditWorkshopProf(props) {
  let navigate = useNavigate();
  return <EditWorkshopProfile {...props} navigate={navigate} />;
}

export default EditWorkshopProf;
