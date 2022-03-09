import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import classes from "./Select.module.css";

const Select = ({ name, options, ...rest }) => {
  return (
    <div>
      <Field
        className={classes.select}
        as="select"
        name={name}
        id={name}
        {...rest}
      >
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
