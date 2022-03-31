import React from "react";
import { useParams } from "react-router-dom";
import userService from "../API/userService";
import { useState, useEffect } from "react";
import "../../assets/css/SearchResult.css";

function SearchResWorkshop(props) {
  //   console.log(useParams());
  let serviceId = useParams().serviceId;
  //   console.log(serviceId);

  const [searchedService, setSearchedService] = useState(" ");
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    async function DidMount() {
      const workshops = await userService.getWorkshopServicesServiceId(
        serviceId
      );
      setWorkshops(workshops);
      console.log(workshops);

      const searchedService = await userService.getServiceNameById(serviceId);
      setSearchedService(searchedService);
    }

    DidMount();
  }, [serviceId]);

//   console.log(Object.values(searchedService).toString());

  return (
    <div className="" style={{  backgroundColor: "grey" , height: "100vh", overflow: "auto"}}>
      <div class="container" style={{ backgroundColor: "grey"}}>
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
            <div class="member-entry">
              <a href="#" class="member-img">
                <img
                  src={require("../../assets/img/car-garage-auto-repair-service-workshop-station-vector-32568954.jpg")}
                  class="img-rounded"
                />
              </a>
              <div class="member-details">
                <h3>Price: {element.price}lv</h3>
                <br />
                <div class="row info-list">
                  <div class="col-sm-4">
                    <i class="fa fa-briefcase"></i>
                    <h5>Workshop</h5>
                  </div>
                  <div class="col-sm-4">
                    <i class="fa fa-envelope"></i>
                    <h5>Email</h5>
                  </div>
                  <div class="col-sm-4">
                    <i class="fa fa-phone"></i>
                    <h5>Phone</h5>
                  </div>
                  <div class="clear"></div>
                  <div class="col-sm-4">
                    <h6>{element.workshop.account.name}</h6>
                  </div>
                  <div class="col-sm-4">
                    <h6>{element.workshop.account.email}</h6>
                  </div>
                  <div class="col-sm-4">
                    <h6>{element.workshop.phone_number}</h6>
                  </div>
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

export default SearchResWorkshop;
