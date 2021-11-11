import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { key } = useParams();
    const { drones } = useAuth();

    const selectedDrone = drones.find(drone => drone.key === Number(key));
    const selected = selectedDrone?.title;
    return (
        <div>
            <h1>
                {
                    selected ? <h1>{selectedDrone.title}</h1> : <h1>Nothing found</h1>
                }
            </h1>
        </div>
    );
};

export default Details;