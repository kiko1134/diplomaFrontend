import React from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/ionicons.min.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Login-Form-Dark.css";
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Newsletter-Subscription-Form.css";
import "../../assets/css/Registration-Form-with-Photo.css";
import "../../assets/css/Simple-Slider.css";
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/img/dark_back.jpg";


const Preregister = () => {
  const history = useNavigate();
  const redirect = () => {
    history("/");
  };
  return (
    <div
      className="inner"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <a className = "btn btn-warning position-absolute top-0 start-0" 
      style = {{textAlign: "left", marginBottom:"10px"}}
      onClick={redirect}><h1><FiArrowLeftCircle/></h1>
      </a> */}
      <h1
        style={{
          textAlign: "center",
          color: "var(--bs-white)",
          fontFamily: "ABeeZee, sans-serif",
          paddingTop: "110px",
        }}
      >
        Select your role?
      </h1>
      <div className="container" style={{ width: "1050px" }}>
        <div
          className="row"
          style={{
            padding: "0px",
            margin: "0px",
            marginTop: "100px",
            width: "1050px",
          }}
        >
          <div
            className="col-md-6"
            style={{
              background: "var(--bs-gray)",
              borderRadius: "17px",
              textAlign: "center",
              height: "400px",
              marginRight: "0px",
              width: "480px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "var(--bs-yellow)",
                fontFamily: "ABeeZee, sans-serif",
              }}
            >
              Customer
            </h1>
            <Link to="/register-customer">
              <img
                src={require("../../assets/img/customer.jpg")}
                style={{ width: "400px", borderRadius: "15px" }}
              />
            </Link>
          </div>
          <div
            className="col-md-6"
            style={{
              color: "var(--bs-gray)",
              background: "var(--bs-gray)",
              textAlign: "center",
              borderRadius: "17px",
              width: "480px",
              marginLeft: "50px",
            }}
          >
            <h1
              style={{
                color: "var(--bs-yellow)",
                textAlign: "center",
                fontFamily: "ABeeZee, sans-serif",
              }}
            >
              Workshop
            </h1>
            <Link to="/register-workshop">
              <img
                style={{
                  textAlign: "center",
                  width: "400px",
                  height: "323.5px",
                  borderRadius: "15px",
                }}
                src={require("../../assets/img/workshop_back1.jpg")}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preregister;
