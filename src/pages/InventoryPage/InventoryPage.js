import React from "react";
import { useParams } from "react-router-dom";

const InventoryPage = () => {
  const { inventoryId } = useParams();
  return (
    <div>
      <h1>Details {inventoryId}</h1>
    </div>
  );
};

export default InventoryPage;
