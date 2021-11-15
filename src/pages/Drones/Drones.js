import useAuth from '../../hooks/useAuth';
import { Container, Row } from 'react-bootstrap';
import Drone from '../../components/Drone/Drone';
import Zoom from "react-reveal/Zoom";

const Drones = () => {
  const { drones, totalPage, currentPage, setCurrentPage } = useAuth();

  function pageHandeler(number) {
    setCurrentPage(number);
  }

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
            <Drone drone={drone} key={drone._id}></Drone>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          {
            [...Array(totalPage).keys()].map((number) => (<button onClick={() => pageHandeler(number)}
              key={number} className={number === currentPage ? 'btn btn-primary rounded-0  border  ' : 'btn btn-secondary rounded-0  border  '}>
              {number + 1}
            </button>))
          }
        </div>
      </Container>
    </div>
  );
};

export default Drones;