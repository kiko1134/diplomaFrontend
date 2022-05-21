import React from "react";
import userService from "../API/UserService";
import background from "../../assets/img/user_reg.jpg";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function RegisterCustomer(props){

  let navigate = useNavigate();

  const [state,setState] = useState(
    {
      username:"",
      email:"",
      password:"",
    }
  )

  function registerUser(event){
    event.preventDefault();
    var user = {
            name: state.username,
            email: state.email,
            password: state.password,
            role: "USER"
          };
      
          userService.registerUser(user,() => navigate("/"));
  }

  function handleChange(event){
    const value = event.target.value;
    setState({...state,[event.target.name]:value})
  }

  return(
    <section
        className="register-photo"
        style={{
          background: "var(--bs-gray-900)",
          borderRadius: "0px",
          paddingTop: "120px",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="form-container" style={{ marginTop: "51px" }}>
          <div
            className="image-holder"
            style={{
              backgroundImage: `url(${background})`,
              borderTopLeftRadius: "17px",
              borderBottomLeftRadius: "17px",
            }}
          />
          <form
            onSubmit={registerUser}
            method="post"
            style={{
              borderRadius: "0px",
              borderTopRightRadius: "17px",
              borderBottomRightRadius: "17px",
              background: "var(--bs-yellow)",
            }}
          >
            <h2 className="text-center">
              <strong>Register</strong>&nbsp;your account.
            </h2>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                style={{ borderRadius: "5px" }}
                value={state.username}
                onChange={handleChange}
                required=""
              />
            </div>
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
                multiple
                onChange={handleChange}
                required=""
              />
            </div>
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
  )

  

}
export default RegisterCustomer;
