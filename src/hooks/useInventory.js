import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((response) => response.json())
      .then((data) => setInventories(data));
  }, []);

  return [inventories, setInventories];
};
export default useInventory;
