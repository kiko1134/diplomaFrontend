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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };

    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeUserName = (event) => {
    this.setState({ name: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  loginUser = (e) => {
    e.preventDefault();
    var loginUser = {
      name: this.state.name,
      password: this.state.password,
    };
    console.log("LoginUser =>" + JSON.stringify(loginUser));

    userService.loginUser(loginUser);
  };

  render() {
    return (
      <div>
        <section className="login-dark">
          <form
            action=""
            method="post"
            style={{
              color: "var(--bs-yellow)",
              background: "var(--bs-gray-dark)",
              borderRadius: "5px",
            }}
          >
            <h2 className="visually-hidden">Login Form</h2>
            <h1 style={{ textAlign: "center" }}>Log In</h1>
            <div className="illustration">
              <i className="icon ion-ios-locked-outline"></i>
            </div>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Username"
              value={this.state.name}
              onChange={this.changeUserName}
              required=""
              style={{ marginBottom: "12px" }}
            />
            <input
              className="form-control"
              type="hidden"
              name="role"
              required=""
              value=""
              style={{ marginBottom: "12px" }}
            />
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.changePassword}
                required=""
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                onClick={this.loginUser}
                style={{ borderRadius: "5px" }}
              >
                Log In
              </button>
            </div>
            <a className="forgot" href="#">
              Forgot your email or password?
            </a>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
