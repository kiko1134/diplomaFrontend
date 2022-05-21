import React from "react";
import userService from "../API/UserService";
import {useNavigate} from "react-router-dom";


class EditWorkshopProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: sessionStorage.getItem("email"),
      phone_number: sessionStorage.getItem("phone_number"),
      workshop_address: sessionStorage.getItem("workshop_address"),
      workshop_description: sessionStorage.getItem("workshop_description"),
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.saveWorkshop = this.saveWorkshop.bind(this);
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changePhone = (event) => {
    this.setState({ phone_number: event.target.value });
  };

  changeAddress = (event) => {
    this.setState({ workshop_address: event.target.value });
  };

  changeDescription = (event) => {
    this.setState({ workshop_description: event.target.value });
  };

  saveWorkshop = (e) => {
    e.preventDefault();
    let workshop = {
      email: this.state.email,
      phone_number: this.state.phone_number,
      workshop_address: this.state.workshop_address,
      workshop_description: this.state.workshop_description,
    };
    let id = sessionStorage.getItem("id");

    userService.updateWorkshop(id, workshop, () => this.props.navigate("/logged"));

    sessionStorage.setItem("email",this.state.email);
    sessionStorage.setItem("phone_number",this.state.phone_number);
    sessionStorage.setItem("workshop_address",this.state.workshop_address);
    sessionStorage.setItem("workshop_description",this.state.workshop_description);

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
                      Update Profile
                    </h2>
                    <br />
                    <br />
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={this.state.email}
                        onChange={this.changeEmail}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="tel"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={this.state.phone_number}
                        onChange={this.changePhone}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Phone Number
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={this.state.workshop_address}
                        onChange={this.changeAddress}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Workshop Address
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <textarea
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={this.state.workshop_description}
                        onChange={this.changeDescription}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Workshop Description
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-secondary btn-lg px-5"
                      type="submit"
                      onClick={this.saveWorkshop}
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

function EditWorkshop(props) {
    let navigate = useNavigate();
    return<EditWorkshopProfile {...props} navigate={navigate} />
}

export default EditWorkshop;
