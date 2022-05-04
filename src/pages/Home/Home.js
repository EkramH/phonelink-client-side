import React, { useContext } from "react";
import img from "../../assets/img/main-banner.png";
import icon1 from "../../assets/icon/icon-1.png";
import icon2 from "../../assets/icon/icon-2.png";
import icon3 from "../../assets/icon/icon-3.png";
import "./Home.css";
import { InventoryContext } from "../../App";
import InventoryDetails from "../Inventory/InventoryDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const inventories = useContext(InventoryContext);
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
          <h1 className="text-center mb-3">Policy</h1>
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
      {/* Inventory section */}
      <div className="container position-relative">
        <h3 className="text-center my-5 display-5 main-color">Inventory</h3>
        <div className="">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {inventories.slice(0, 6).map((inventory) => (
              <InventoryDetails
                key={inventory._id}
                inventory={inventory}
              ></InventoryDetails>
            ))}
          </div>
        </div>
        <div className="d-inline-flex w-100 justify-content-center">
          <Link to="/inventory">
            <button className="inventory-btn my-5">View All</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
