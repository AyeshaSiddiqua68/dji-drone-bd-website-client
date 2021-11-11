import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, Row } from 'react-bootstrap';
import Drone from '../../components/Drone/Drone';
import Zoom from "react-reveal/Zoom";
import useDrones from '../../hooks/useDrones';

const Drones = () => {
    const { drones } = useDrones();

    return (
        <div className="my-5">
            <Container>
            <Zoom right cascade>
          <h2 className="text-center  mb-0"> All Drones</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Explore exciting Drones!
          </p>
        </Zoom>
        <Row>
          {drones?.map((drone) => (
            <Drone drone={drone} key={drone.key}></Drone>
          ))}
        </Row>
            </Container>
        </div>
    );
};

export default Drones;