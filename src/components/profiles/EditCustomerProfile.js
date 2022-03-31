import React from "react";
import userService from "../API/userService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: sessionStorage.getItem("email"),
    };

    this.changeEmail = this.changeEmail.bind(this);
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  saveUser = (e) => {
    e.preventDefault();
    var user = {
      email: this.state.email,
    };
    var id = sessionStorage.getItem("id");
    console.log("user =>" + JSON.stringify(user));

    userService.updateUser(id,user, () => this.props.navigate("/logged"));
    sessionStorage.setItem("email",this.state.email);
    // this.props.navigate("/logged");

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
                        value = {this.state.email}
                        onChange={this.changeEmail}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
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

function Edit(props){
  let navigate = useNavigate();
  return <EditProfile {...props} navigate={navigate} />
}

export default Edit;
