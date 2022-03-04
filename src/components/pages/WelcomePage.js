import rocketmanImage from '../../assets/rocketman.png';
import classes from './WelcomePage.module.css';

const WelcomePage = (props) => {
    return (
        <div className={classes.main}>
            <p className={classes.welcome}>Welcome Rocketeer !</p>
            <button onClick={props.onStart} className={classes.start}>Start Questionnaire</button>
            <a href="#">Submitted Applications</a>
            <img className={classes.rocketman} src={rocketmanImage} alt="rocketman" />
        </div>
    )
};

export default WelcomePage;