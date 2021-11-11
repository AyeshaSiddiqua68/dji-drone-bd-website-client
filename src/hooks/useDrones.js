import React, { useEffect, useState } from 'react';

const useDrones = () => {
    const[drones, setDrones]=useState([]);
    useEffect(()=>{
        fetch('/drones.json')
        .then(res=>res.json())
        .then(data=>setDrones(data))
    },[])
    return {drones, setDrones}
};

export default useDrones;