import React from "react";
import img from "../../assets/img/main-banner.png";
import icon1 from "../../assets/icon/icon-1.png";
import icon2 from "../../assets/icon/icon-2.png";
import icon3 from "../../assets/icon/icon-3.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="banner-section py-5">
        <div className="container">
          <div className="d-flex justify-content-around main-container">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="display-3 text-color">Deal With Best</h1>
            </div>
            <div>
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Policy section */}
      <div className="policy-section">
        <div className="container">
          <div className="policy-container d-flex text-center">
            <div className="policy-wrapper px-3">
              <img className="img-fluid my-3 policy-icon" src={icon1} alt="" />
              <div className="policy-details">
                <h5 className="text-color">WORLDWIDE DELIVERY</h5>
                <p>
                  We work with the biggest delivery networks. It doesn't matter
                  where in the world you are.
                </p>
              </div>
            </div>
            <div className="policy-wrapper px-3">
              <img className="img-fluid my-3 policy-icon" src={icon2} alt="" />
              <div className="policy-details">
                <h5 className="text-color">WORLDWIDE DELIVERY</h5>
                <p>
                  We work with the biggest delivery networks. It doesn't matter
                  where in the world you are.
                </p>
              </div>
            </div>
            <div className="policy-wrapper px-3">
              <img className="img-fluid my-3 policy-icon" src={icon3} alt="" />
              <div className="policy-details">
                <h5 className="text-color">WORLDWIDE DELIVERY</h5>
                <p>
                  We work with the biggest delivery networks. It doesn't matter
                  where in the world you are.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Home;
