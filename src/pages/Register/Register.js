import React from "react";
import "./Register.css";
import img from "../../assets/img/login.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 my-5">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Your Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  required
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Accepts terms and conditions.
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link className="text-decoration-none" to={"/login"}>
                    <span
                      className="text-danger mx-2 cursor-pointer "
                      style={{ cursor: "pointer" }}
                    >
                      Login here.
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
