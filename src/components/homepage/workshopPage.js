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
    // userService.getWorkshops().then(workshops => this.setState({workshops}));
    const workshops = await userService.getWorkshops();
    this.setState({ workshops });
  }

  render() {
    console.log(this.state.workshops);
    return (
<div className="" style = {{backgroundColor:"grey"}}>
      <div className="container"style = {{backgroundColor:"grey"}}>
        <h1 style = {{marginBottom:"3rem", color:"var(--bs-warning)"}}>Workshops</h1>
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
                    {/* <a >
                    {element.account.email}
                    </a> */}
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


      // <section className="vh-100 bg-secondary">
      //   <div className="container">
      //</div>     {this.state.workshops ? (
      //       this.state.workshops.map((element) => (
      //         <div
      //           className="card mx-auto bg-secondary"
      //           style={{ width: "60rem", marginBottom: "10rem" }}
      //         >
      //           <img
      //             className="card-img-top"
      //             src={require("../../assets/img/workshop_1.jpg")}
      //             alt="Card image cap"
      //           />
      //           <div className="card-body">
      //             <h5 className="card-title">{element.account.name}</h5>
      //             <p className="card-text">{element.workshop_description}</p>
      //             <a href="#" className="btn btn-primary">
      //               See services price
      //             </a>
      //           </div>
      //         </div>
      //       ))
      //     ) : (
      //       <></>
      //     )}
      //   </div>
      // </section>
    );
  }
}

export default WorkshopPage;
