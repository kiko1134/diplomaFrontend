import React from "react";
import userService from "../API/UserService";
import background from "../../assets/img/reg_back.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterWorkshop(props) {
  let navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    workshop_address: "",
    workshop_description: "",
  });

  function registerUser(event) {
    event.preventDefault();
    let user = {
      name: state.name,
      email: state.email,
      password: state.password,
      phone_number: state.phone_number,
      workshop_address: state.workshop_address,
      workshop_description: state.workshop_description,
      role: "WORKSHOP",
    };

    userService.registerWorkshop(user, () => navigate("/"));
  }

  function handleChange(event) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }

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
        />
        <form
          onSubmit={registerUser}
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
            name="name"
            placeholder="Name"
            style={{ marginBottom: "15px", borderRadius: "5px" }}
            value={state.name}
            onChange={handleChange}
            required=""
          />
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              style={{ borderRadius: "5px" }}
              value={state.email}
              onChange={handleChange}
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
              value={state.password}
              onChange={handleChange}
              required=""
            />
          </div>
          <input
            className="form-control"
            type="tel"
            placeholder="Phone"
            name="phone_number"
            style={{ marginBottom: "15px", borderRadius: "5px" }}
            value={state.phone_number}
            onChange={handleChange}
            required=""
          />
          <input
            className="form-control"
            type="text"
            placeholder="Address"
            name="workshop_address"
            style={{ marginBottom: "15px", borderRadius: "5px" }}
            value={state.workshop_address}
            onChange={handleChange}
            required=""
          />
          <div className="mb-3"/>
          <div className="mb-3">
            <button
              className="btn btn-primary d-block w-100"
              type="submit"
              style={{ borderRadius: "5px" }}
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

export default RegisterWorkshop;
