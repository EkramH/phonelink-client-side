import React from "react";
import { Link } from "react-router-dom";
import "./inventory.css";

const inventoryDetails = ({ inventory }) => {
  const { name, img, price, details, quantity, supplier } = inventory;
  return (
    <>
      <div className="col">
        <div className="card card-sizing inventory-card">
          <img
            src={img}
            className="pt-3 card-img-top card-img d-flex"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title fw-bolder">{name}</h4>
            <h5>Price: {price}</h5>
            <small className="bold">Supplier: {supplier}</small>
            <p className="card-text">{details}</p>
            <h6>Quantity: {quantity}</h6>
          </div>
          <div className="mx-auto mb-3">
            <Link to="/checkout">
              <button type="button" className="btn btn-appointment">
                Manage Item
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default inventoryDetails;
