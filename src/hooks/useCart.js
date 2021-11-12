import { useState } from "react";

const useCart = () => {
  const [foundedDrone, setFoundedDrone] = useState([])

  function addToCart(drone) {
    const isExist = foundedDrone.find(selected => selected.key === drone.key);
    if (isExist) {
      alert("Already Added")
    }
    else {
      const newSelected = [...foundedDrone, drone];
      setFoundedDrone(newSelected)
    }

  }
  return { addToCart, foundedDrone }
};

export default useCart;