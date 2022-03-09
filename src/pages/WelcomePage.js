import rocketmanImage from "../assets/rocketman.png";
import { Link } from "react-router-dom";
import classes from "./WelcomePage.module.css";

const WelcomePage = (props) => {
  return (
    <div className={classes.main}>
      <p className={classes.welcome}>Welcome Rocketeer !</p>
      <Link to="/personal-info" className={classes.start}>
        Start Questionnaire
      </Link>
      <Link to="/submitted-apps" className={classes.submitted}>
        Submitted Applications
      </Link>
      <img className={classes.rocketman} src={rocketmanImage} alt="rocketman" />
    </div>
  );
};

export default WelcomePage;
