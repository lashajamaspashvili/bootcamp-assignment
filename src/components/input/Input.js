import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

import classes from "./Input.module.css";

const Input = ({ name, ...rest }) => {
  return (
    <div>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field className={classes.input} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
