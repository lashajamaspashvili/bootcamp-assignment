import { Row, Col } from "react-bootstrap";

const Layout = ({ formControl, briefHistory }) => {
  return (
    <>
      <Row className="my-5">
        <Col>{formControl}</Col>
        <Col>{briefHistory}</Col>
      </Row>
    </>
  );
};

export default Layout;
