import { useEffect, useState } from "react";

const useCart = () => {
  const [foundedDrone, setFoundedDrone] = useState([]);

  useEffect(() => {
    const cart = haveCart();
    setFoundedDrone(cart);
  }, []);

  function haveCart() {
    let cart;
    const isHave = localStorage.getItem("cart");
    if (isHave) {
      cart = JSON.parse(isHave);
    }
    else {
      cart = [];
    }
    return cart;
  }

  function addToCart(drone) {
    const isExist = foundedDrone.find(selected => selected.key === drone.key);
    if (isExist) {
      alert("Already Added")
    }
    else {
      const newSelected = [...foundedDrone, drone];
      localStorage.setItem('cart', JSON.stringify(newSelected));
      setFoundedDrone(newSelected)
    }

  }

  function removeItem(key) {
    const selectionAfterRemove = foundedDrone.filter(drone => drone.key !== key);
    localStorage.setItem('cart', JSON.stringify(selectionAfterRemove));
    setFoundedDrone(selectionAfterRemove);
  }


  return { addToCart, foundedDrone, removeItem, setFoundedDrone }
};

export default useCart;