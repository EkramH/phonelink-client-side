import React, { useContext } from "react";
import { InventoryContext } from "../../App";
import InventoryDetails from "./InventoryDetails";

const Inventory = () => {
  const inventories = useContext(InventoryContext);
  return (
    <>
      <div className="container">
        <h3 className="text-center my-5 display-5 main-color">Inventory</h3>
        <div className="mb-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {inventories.map((inventory) => (
              <InventoryDetails
                key={inventory._id}
                inventory={inventory}
              ></InventoryDetails>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
