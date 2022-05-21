import React, {useState} from "react";
import userService from "../API/UserService";
import {useNavigate} from "react-router-dom";

function CreateReview() {
    let navigate = useNavigate();
    const [content, setContent] = useState("");

    function handleContent(event) {
        setContent({content: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        let obj = {
            id: sessionStorage.getItem("id"),
            role: sessionStorage.getItem("authorities"),
            content: Object.values(content).toString()
        };
        userService.createReview(obj, () => navigate('/logged'));
    }

    return (
        <section className="vh-100 gradient-custom bg-secondary">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div
                        className="col-12 col-md-8 col-lg-6 col-xl-5"
                        style={{width: "1000px"}}
                    >
                        <div
                            className="card bg-warning text-secondary"
                            style={{borderRadius: "1rem", width: "1000px"}}
                        >
                            <div className="card-body text-center" style={{borderRadius: "2rem"}}>
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase">Add review</h2>
                                    <br/>

                                    <div className="form-outline form-white mb-4">
                    <textarea
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={handleContent}
                        required> </textarea>
                                        <label className="form-label p-3" htmlFor="typeEmailX">
                                            Review content
                                        </label>
                                    </div>

                                    <button
                                        className="btn btn-outline-secondary btn-lg px-5"
                                        type="submit"
                                        onClick={handleSubmit}
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

export default CreateReview;
