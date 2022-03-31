import React from "react";
import {
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiLinkedin,
    FiMail,
} from "react-icons/fi";

const Footer = () => (
    <footer
        className="bg-light text-center text-white"
        style={{
            height: "100px",
            backgroundColor: "var(--bs-warning)",
            marginTop: "-30px",
        }}
    >
        <div className="container p-4 pb-0">
            <section className="mb-4">
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#3b5998"}}
                    href="https://www.facebook.com/Cars-World-100504635933350"
                    target="_blank"
                    role="button"
                >
                    <FiFacebook/>
                </a>

                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#55acee"}}
                    href="https://twitter.com/CarsWorld671"
                    target="_blank"
                    role="button"
                >
                    <FiTwitter/>
                </a>

                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#ac2bac"}}
                    href="https://www.instagram.com/carsworld671/"
                    target="_blank"
                    role="button"
                >
                    <FiInstagram/>
                </a>

                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#0082ca"}}
                    href="https://www.linkedin.com/in/cars-world-916993233/"
                    target="_blank"
                    role="button"
                >
                    <FiLinkedin/>
                </a>
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#dd4b39"}}
                    href="https://mail.google.com/mail/u/0/?fs=1&to=carsworld671@gmail.com&su=Questions from users&tf=cm"
                    target="_blank"
                    role="button"
                >
                    <FiMail/>
                </a>
            </section>
        </div>
    </footer>
);

export default Footer;
