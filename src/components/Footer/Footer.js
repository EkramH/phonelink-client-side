import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://facebook.com/" className="me-4 text-reset">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://google.com/" className="me-4 text-reset">
              <FaGoogle></FaGoogle>
            </a>
            <a href="https://instagram.com/" className="me-4 text-reset">
              <FaInstagram></FaInstagram>
            </a>
            <a href="https://linkedin.com/" className="me-4 text-reset">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://github.com/" className="me-4 text-reset">
              <FaGithub></FaGithub>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Phone Link
                </h6>
                <p>
                  Phone Link is a internation warehouse for phone. It have all
                  the phone from different brands. It delivery all over the
                  world.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    iPhone
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Samsung
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sony
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nokia
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Dhanmondi, Dhaka, BD
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@phonelink.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 bg-secondary bg-gradient bg-opacity-25 ">
          © 2021 Copyright: <b>PhoneLink</b>
        </div>
      </footer>
    </>
  );
};

export default Footer;
