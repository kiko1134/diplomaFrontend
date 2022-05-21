import React, { useState } from "react";
import userService from "../API/UserService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ServicesFromWorkshops(props) {
  let navigate = useNavigate();
  const [workshopServices, setWorkshopServices] = useState([]);

  function parseJwt(token) {
    if (!token) { return;}
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  let {sub} = parseJwt(sessionStorage.getItem("token"));

  useEffect(() => {
    async function DidMount() {
      const workshopServices = await userService.getWorkshopServices(
        sub
      );
      setWorkshopServices(workshopServices);
    }

    DidMount();
  }, [workshopServices.length]);

  function handleEdit(event, serviceName,price){
    event.preventDefault();

    sessionStorage.setItem("serviceName", serviceName);
    sessionStorage.setItem("price",price);
    navigate("/update-workshop-service");
  }
  return (
    <section className="vh-100 bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-3">
                  {sub}
                </h2>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Price(лв.)
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Edit Service
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshopServices ? (
                      workshopServices.sort((a, b) => a.service.name.localeCompare(b.service.name)).map((element) => (
                        <tr>
                          <td>
                            <h5 className="font-medium mb-0">
                              {element.service.name}
                            </h5>
                          </td>
                          <td>
                            <h5 className="text-medium mb-0">
                              {element.price}
                            </h5>
                            <br />
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                              onClick={(e) => {
                                handleEdit(
                                  e,
                                  element.service.name,
                                  element.price
                                );
                              }}
                            >
                              <i className="fa fa-edit"/>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <> </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesFromWorkshops;
