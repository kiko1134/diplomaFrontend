import React from "react";
import { useParams } from "react-router-dom";
import userService from "../API/UserService";
import { useState, useEffect } from "react";
import "../../assets/css/SearchResult.css";

function SearchRes(props) {
  let serviceId = useParams().serviceId;

  const [searchedService, setSearchedService] = useState(" ");
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    async function DidMount() {
      const workshops = await userService.getWorkshopServicesServiceId(
        serviceId
      );
      setWorkshops(workshops);

      const searchedService = await userService.getServiceNameById(serviceId);
      setSearchedService(searchedService);
    }

    DidMount();
  }, [serviceId]);


  function handleFavorites(event, currServiceId, currWorkshopId) {
    event.preventDefault();
    let obj = {
      workshop_id: currWorkshopId,
      service_id: currServiceId,
      user_id: sessionStorage.getItem("id"),
    };

    userService.addFavoriteService(obj);
  }

  return (
    <div className="" style={{ backgroundColor: "grey" , height: "100vh", overflow: "auto"}}>
      <div className="container" style={{ backgroundColor: "grey" }}>
        <h1 style={{ color: "white" }}>
          These are the result that we found for
        </h1>
        <h2
          style={{
            color: "var(--bs-warning)",
            fontWeight: "bold",
            marginBottom: "5rem",
          }}
        >
          {searchedService}
        </h2>
        {workshops ? (
          workshops.map((element) => (
            <div className="member-entry">
              <a href="#" className="member-img">
                <img
                  src={require("../../assets/img/car-garage-auto-repair-service-workshop-station-vector-32568954.jpg")}
                  className="img-rounded"
                  alt="..."
                />
              </a>
              <div className="member-details">
                <h3>Price: {element.price}lv</h3>
                <br />
                <div className="row info-list">
                  <div className="col-sm-4">
                    <i className="fa fa-briefcase"/>
                    <h5>Workshop</h5>
                  </div>
                  <div className="col-sm-4">
                    <i className="fa fa-envelope"/>
                    <h5>Email</h5>
                  </div>
                  <div className="col-sm-4">
                    <i className="fa fa-phone"/>
                    <h5>Phone</h5>
                  </div>
                  <div className="clear"/>
                  <div className="col-sm-4">
                    <h6>{element.workshop.account.name}</h6>
                  </div>
                  <div className="col-sm-4">
                    <h6>{element.workshop.account.email}</h6>
                  </div>
                  <div className="col-sm-4">
                    <h6>{element.workshop.phone_number}</h6>
                  </div>
                </div>
                <div className="col-sm-12 pt-5">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {handleFavorites(e,element.service.id,element.workshop.id)}}
                  > Add to favorites</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default SearchRes;
