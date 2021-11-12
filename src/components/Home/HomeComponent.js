import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Drone from '../Drone/Drone';
import Zoom from "react-reveal/Zoom";

const HomeComponent = () => {
    const{drones}=useAuth();
    return (
        <div id="popular" className="my-5">
            <Container>
            <Zoom right cascade>
          <h2 className="text-center  mb-0"> Popular Drones</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Explore exciting Drones!
          </p>
        </Zoom>
        <Row>
          {drones?.slice(0,6)?.map((drone) => (
            <Drone drone={drone} key={drone.key}></Drone>
          ))}
        </Row>
            </Container>
        </div>
    );
    
};

export default HomeComponent;