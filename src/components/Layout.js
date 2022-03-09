import { Row, Col } from "react-bootstrap";
import classes from "./Layout.module.css";

const Layout = ({ pageHeader, formControl, historyHeader, briefHistory }) => {
  return (
    <>
      <Row className={classes.main}>
        <Col className={classes.left}>
          <div className={classes.leftHeader}>{pageHeader}</div>
          <div className={classes.leftContent}>{formControl}</div>
        </Col>
        <Col className={classes.right}>
          <div className={classes.rightHeader}>{historyHeader}</div>
          <div className={classes.rightContent}>{briefHistory}</div>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
