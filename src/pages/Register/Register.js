import React, { useRef } from "react";
import "./Register.css";
import img from "../../assets/img/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRegister = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/inventory");
  }
  return (
    <>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 my-5">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleRegister}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  ref={nameRef}
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
                  ref={emailRef}
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
                  ref={passwordRef}
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
                <button type="submit" className="btn btn-primary btn-lg">
                  Register
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
