import React from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/ionicons.min.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Login-Form-Dark.css";
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Newsletter-Subscription-Form.css";
import "../../assets/css/Registration-Form-with-Photo.css";
import "../../assets/css/Simple-Slider.css";
// import userService from "../API/userService";
import AuthService from "../API/AuthService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  let navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  function loginUser(event) {
    event.preventDefault();

    let user = {
      name: state.name,
      password: state.password,
    };

    AuthService.login(state.name, state.password,() => navigate("/logged"));

  }

  function handleChange(event) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }

  return (
    <section className="login-dark">
      <form
        style={{
          color: "var(--bs-yellow)",
          background: "var(--bs-gray-dark)",
          borderRadius: "5px",
        }}
      >
        <h2 className="visually-hidden">Login Form</h2>
        <h1 style={{ textAlign: "center" }}>Log In</h1>
        <div className="illustration">
          <i className="icon ion-ios-locked-outline"/>
        </div>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Username"
          value={state.name}
          onChange={handleChange}
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
            value={state.password}
            onChange={handleChange}
            required=""
          />
        </div>
        <div className="mb-3 pt-2">
          <button
            className="btn btn-primary d-block w-100"
            style={{ borderRadius: "5px" }}
            onClick={loginUser}
          >
            Log In
          </button>
        </div>
        {/* <a className="forgot" href="#">
          Forgot your email or password?
        </a> */}
      </form>
    </section>
  );
}

export default Login;
