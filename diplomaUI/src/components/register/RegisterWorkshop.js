import React from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/ionicons.min.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Login-Form-Dark.css";
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Newsletter-Subscription-Form.css";
import "../../assets/css/Registration-Form-with-Photo.css";
import "../../assets/css/Simple-Slider.css";
import userService from "../API/userService";
import background from "../../assets/img/reg_back.jpg"

class RegisterWorkshop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      phone_number: "",
      workshop_address: "",
      workshop_description: "",
    };

    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveWorkshop = this.saveWorkshop.bind(this);
  }

  changeUserName = (event) => {
    this.setState({ name: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  changePhone = (event) => {
    this.setState({ phone_number: event.target.value });
  };

  changeAddress = (event) => {
    this.setState({ workshop_address: event.target.value });
  };
  saveWorkshop = (e) => {
    e.preventDefault();
    var workshop = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number,
      workshop_address: this.state.workshop_address,
      workshop_description: this.state.workshop_description,
      role: "WORKSHOP"
    };
    console.log("workshop =>" + JSON.stringify(workshop));

    userService.registerWorkshop(workshop);
  };

  render() {
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    return (
      <section
        className="register-photo"
        style={{
          background: "var(--bs-gray-900)",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="form-container" style={{ marginTop: "80px" }}>
          <div
            className="image-holder"
            style={{
              background: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderTopLeftRadius: "17px",
              borderBottomLeftRadius: "17px",
            }}
          ></div>
          <form
            method="post"
            style={{
              borderTopRightRadius: "17px",
              borderBottomRightRadius: "17px",
              background: "var(--bs-yellow)",
            }}
          >
            <h2 className="text-center">
              <strong>Register</strong> your workshop.
            </h2>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              style={{ marginBottom: "15px", borderRadius: "5px" }}
              value={this.state.name}
              onChange={this.changeUserName}
              required=""
            />
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                style={{ borderRadius: "5px" }}
                value={this.state.email}
                onChange={this.changeEmail}
                required=""
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                style={{ borderRadius: "5px" }}
                value={this.state.password}
                onChange={this.changePassword}
                required=""
              />
            </div>
            <input
              className="form-control"
              type="tel"
              placeholder="Phone"
              required=""
              style={{ marginBottom: "15px", borderRadius: "5px" }}
              value={this.state.phone_number}
              onChange={this.changePhone}
              required=""
            />
            <input
              className="form-control"
              type="text"
              placeholder="Address"
              style={{ marginBottom: "15px", borderRadius: "5px" }}
              value={this.state.workshop_address}
              onChange={this.changeAddress}
              required=""
            />
            <div className="mb-3"></div>
            <div className="mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required=""
                  />
                  I agree to the license terms.
                </label>
              </div>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{ borderRadius: "5px" }}
                onClick={this.saveWorkshop}
              >
                Sign Up
              </button>
            </div>
            <a className="already" href="/login">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </section>
    );
  }
}

export default RegisterWorkshop;
