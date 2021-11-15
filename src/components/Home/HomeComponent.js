import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Drone from '../Drone/Drone';
import Zoom from "react-reveal/Zoom";

const HomeComponent = () => {
  const { drones } = useAuth();
  return (
    <div id="popular" className="my-5">
      <Container>
        <Zoom right cascade>
          <h2 className="text-center  bold  mb-0" style={{ color: "darkRed" }}>EXPLORE DJI PRODUCTS IN DIFFERENT FIELDS</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Creativity is at the heart of every dream. Every idea, every groundbreaking leap that changes our world starts with the vision of talented creators. At DJI, we give these creators the tools they need to bring their ideas to life.
          </p>
        </Zoom>
        <Row>
          {drones?.slice(0, 6)?.map((drone) => (
            <Drone drone={drone} key={drone.key}></Drone>
          ))}
        </Row>
      </Container>
    </div>
  );

};

export default HomeComponent;