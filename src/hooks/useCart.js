import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid, displayName, email, photoURL } = user;
  const [foundedDrone, setFoundedDrone] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${uid}`)
      .then(res => res.json())
      .then(data => {
        if (data.length) {
          setFoundedDrone(data);
        }
      })

  }, [uid]);


  function addToCart(drone) {
    const isExist = foundedDrone.find((selected) => selected._id === drone._id);

    delete drone._id;
    drone.uid = uid;
    drone.name = displayName;
    drone.email = email;
    drone.photo = photoURL
    drone.status = "pending";

    if (isExist) {
      alert("Already Added")
    }
    else {
      fetch('http://localhost:5000/drone/add', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(drone),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            const newSelected = [...foundedDrone, drone];
            setFoundedDrone(newSelected)
          }
        })
    }
  }

  function removeItem(id) {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount === 1) {
          const selectionAfterRemove = foundedDrone.filter((drone) => drone._id !== id);
          setFoundedDrone(selectionAfterRemove);
        }
        else {
          alert("Something Wrong!")
        }
      })
  }


  return { addToCart, foundedDrone, removeItem, setFoundedDrone }
};

export default useCart;