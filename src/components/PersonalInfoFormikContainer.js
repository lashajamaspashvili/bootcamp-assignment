import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

import useFormContext from "../hooks/useFormContext";

import Pagination from "./pagination/Pagination";

const PersonalInfoFormikContainer = ({ pagination = false, onPathUpdate }) => {
  const {
    updatePersonalInfoHandler,
    personalInfo: { first_name, last_name, email, phone },
  } = useFormContext();

  const initialValues = {
    first_name,
    last_name,
    email,
    phone,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required first_name"),
    last_name: Yup.string().required("Required last_name"),
    email: Yup.string().required("Required email!"),
    phone: Yup.number().required("Required number!"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    updatePersonalInfoHandler(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="text"
            placeholder="firstname"
            name="first_name"
          />
          <FormikControl
            control="input"
            type="text"
            placeholder="lastname"
            name="last_name"
          />
          <FormikControl
            control="input"
            type="email"
            placeholder="email"
            name="email"
          />
          <FormikControl
            control="input"
            type="number"
            placeholder="phone"
            name="phone"
          />
          {pagination ? (
            <Pagination values={formik.values} onPathUpdate={onPathUpdate} />
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoFormikContainer;
