import React from "react";
import userService from "../API/userService";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import "../../assets/css/WorkshopPage.css";
import { height } from "dom-helpers";

class WorkshopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
    };
  }

  async componentDidMount() {
    const workshops = await userService.getWorkshops();
    this.setState({ workshops });
  }

  render() {
    console.log(this.state.workshops);
    return (
      <div className="" style={{ backgroundColor: "grey" }}>
        <div className="container" style={{ backgroundColor: "grey" }}>
          <h1 style={{ marginBottom: "3rem", color: "var(--bs-warning)" }}>
            Workshops
          </h1>
          <div className="row ng-scope mx-auto">
            {this.state.workshops ? (
              this.state.workshops.map((element) => (
                <div className="col-md-9 col-md-pull-3 mx-auto mb-5">
                  <section className="search-result-item">
                    <a className="image-link" href="#">
                      <img
                        className="image"
                        src={require("../../assets/img/112307572-car-in-home-garage-background-flat-illustration-of-car-in-home-garage-vector-background-for-web-desi.jpg")}
                      />
                    </a>
                    <div className="search-result-item-body">
                      <div className="row">
                        <div className="col-sm-9">
                          <h4 className="search-result-item-heading">
                            <a>{element.account.name}</a>
                          </h4>
                          <p className="info">{element.workshop_address}</p>
                          <p className="description">
                            {element.workshop_description}
                          </p>
                        </div>
                        <div className="col-sm-3 text-align-center">
                          <p className="value3 mt-sm">{element.phone_number}</p>
                          <p className="fs-mini text-muted"></p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkshopPage;
