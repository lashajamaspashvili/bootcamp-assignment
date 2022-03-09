import classes from "./TextError.module.css";

const TextError = ({ children }) => {
  return <div className={classes.error}>{children}</div>;
};

export default TextError;
