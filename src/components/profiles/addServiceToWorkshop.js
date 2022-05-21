import React from "react";
import {useNavigate} from "react-router-dom";
import userService from "../API/UserService";
import {Form} from "react-bootstrap";

class AddServiceToWorkshop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            service: "",
            services: [],
            serviceId: "",
            price: ""
        };

        this.setService = this.setService.bind(this);
        this.setPrice = this.setPrice.bind(this);
    }

    async componentDidMount() {
        const services = await userService.getServices();
        this.setState({services});
    }

    setService = (event) => {
        this.setState({service: event.target.value});
    };

    setPrice = (event) => {
        this.setState({price: event.target.value});
    }


    saveService = (event) => {
        event.preventDefault();

        let servicesInfo = {
            workshop_id: sessionStorage.getItem("id"),
            service_name: this.state.service,
            price: this.state.price
        }

        userService.addServiceToWorkshop(servicesInfo, this.props.navigate("/workshop-profile"));
    }

    render() {
        return (
            <section className="vh-100 gradient-custom bg-secondary">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-warning text-secondary"
                                style={{borderRadius: "1rem"}}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-1">
                                        <h2 className="fw-bold mb-2 text-uppercase">Add Service</h2>
                                        <br/>
                                        <br/>
                                        <Form.Select
                                            aria-label="Default select example"
                                            onChange={this.setService}
                                        >
                                            <option>Select service</option>
                                            {this.state.services ? (
                                                this.state.services.map((element) => (
                                                    <option value={element.name}>{element.name}</option>
                                                ))
                                            ) : (<> </>)}
                                        </Form.Select>

                                        <div className="form-outline form-white mt-5">
                                            <input
                                                type="text"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={this.state.price}
                                                onChange={this.setPrice}
                                            />
                                            <label className="form-label" htmlFor="typeEmailX">
                                                Price(in lv)
                                            </label>
                                        </div>
                                        <button
                                            className="btn btn-outline-secondary btn-lg px-5 mt-5"
                                            type="submit"
                                            onClick={this.saveService}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function AddService(props) {
    let navigate = useNavigate();
    return <AddServiceToWorkshop {...props} navigate={navigate}/>;
}

export default AddService;
