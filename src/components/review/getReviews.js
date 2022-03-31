import React, { useState } from "react";
import { useEffect } from "react";
import userService from "../API/userService";
import "../../assets/css/getReviews.css";
function GetServices() {
  const [reviews, setReviews] = useState([]);
  let imageURL = "";
  useEffect(() => {
    async function DidMount() {
      const reviews = await userService.getReviews();
      setReviews(reviews);
    }

    DidMount();
  }, []);

  function getImage(user, workshop) {
    if (user)
      return require("../../assets/img/144-1444687_customer-service-icons-customer-icon-flat-png.jpg");
    else
      return require("../../assets/img/illustration-automobile-got-fixed-car-service-mechanic-uniform-check-vehicle-repair-it-car-service-worker-check-accumulator_277904-4776.jpg");
  }

  return (
    <div
      className=""
      style={{ backgroundColor: "grey", height: "100vh", overflow: "auto" }}
    >
      <div className="container" style={{ backgroundColor: "grey" }}>
        {/* <div className="col-md-12" style = {{backgroundColor: "grey"}}> */}
        <div
          className="offer-dedicated-body-left"
          style={{ backgroundColor: "grey" }}
        >
          <div
            className="tab-content"
            id="pills-tabContent"
            style={{ backgroundColor: "grey" }}
          >
            {/* <div
                className="tab-pane fade"
                id="pills-order-online"
                role="tabpanel"
                aria-labelledby="pills-order-online-tab"
              ></div> */}

            <div
              className="tab-pane fade active show"
              id="pills-reviews"
              role="tabpanel"
              aria-labelledby="pills-reviews-tab"
            >
              <div className="p-4 mb-4">
                <h1 class="mb-1 mb-5 text-warning">Reviews</h1>
                {reviews ? (
                  reviews.map((element) => (
                    <div className="reviews-members pt-4 pb-4 mb-4 bg-white rounded">
                      <div className="media">
                        <a>
                          <img
                            alt="Generic placeholder image"
                            src={getImage(element.user, element.workshop)}
                            className="mr-3 rounded-pill"
                          />
                        </a>
                        <div className="media-body">
                          <div className="reviews-members-header">
                            <span className="star-rating float-right">
                              <a href="#">
                                <i className="icofont-ui-rating active"></i>
                              </a>
                            </span>
                            <h6 className="mb-1">
                              <a class="text-black">
                                {element.user
                                  ? element.user.account.name
                                  : element.workshop.account.name}
                              </a>
                            </h6>
                            <p className="text-gray">{}</p>
                          </div>
                          <div className="reviews-members-body">
                            <p>{element.content}</p>
                          </div>
                        </div>
                      </div>
                      {/* <hr /> */}
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetServices;
