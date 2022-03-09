import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

import useFormContext from "../hooks/useFormContext";

import Pagination from "./pagination/Pagination";

import classes from "./TechnicalIssuesFormikContainer.module.css";

const TechnicalIssuesFormikContainer = ({ fetchedData, pagination }) => {
  console.log({ fetchedData });
  const { mySkills, updateMySkillsHandler } = useFormContext();

  const initialValues = {
    skill: "",
    experience: "",
  };
  const onSubmit = (values) => console.log(values);

  const removeSkillHandler = (id) => {
    if (mySkills.length >= 2) {
      const updatedSkills = mySkills.filter((skill) => skill.id !== id);
      updateMySkillsHandler(updatedSkills);
    } else {
      return;
    }
  };

  const addSkillHandler = (selectedSkillId, experience) => {
    console.log({ selectedSkillId, fetchedData, mySkills });
    const desiredSkill = fetchedData.find(
      (skill) => skill.id === +selectedSkillId
    );
    console.log({ desiredSkill });
    const skillExists = mySkills.find((skill) => +skill.id === desiredSkill.id);

    if (skillExists) {
      const updatedSkills = mySkills.map((skill) =>
        +skill.id === desiredSkill.id
          ? { ...skill, experience: experience }
          : skill
      );
      updateMySkillsHandler(updatedSkills);
    } else {
      console.log("here");
      console.log({ selectedSkillId, experience });
      updateMySkillsHandler(
        mySkills.concat({ experience, id: desiredSkill.id })
      );
    }
  };

  const validationSchema = Yup.object({
    skill: Yup.string().required("Required email!"),
    experience: Yup.number().required("Required experience years number!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          {console.log("Formik values", formik.values)}
          <FormikControl
            control="select"
            type="select"
            placeholder="Select skills"
            name="skill"
            options={fetchedData}
          />
          <FormikControl
            control="input"
            type="text"
            placeholder="Experience Duration in Years"
            name="experience"
          />
          <button
            className={classes.button}
            type="button"
            onClick={() =>
              addSkillHandler(formik.values.skill, formik.values.experience)
            }
          >
            Add Programming Language
          </button>
          <div className={classes.skillsContainer}>
            {mySkills?.map((skill) => {
              return (
                <div className={classes.skill} key={skill.id}>
                  <span className={classes.language}>
                    {
                      fetchedData.find(
                        (fetchedSkill) => fetchedSkill.id === skill.id
                      )?.title
                    }
                  </span>
                  <span className={classes.years}>
                    Years of Experience: {skill.experience}
                  </span>
                  <button
                    className={classes.remove}
                    type="button"
                    onClick={() => removeSkillHandler(skill.id)}
                  ></button>
                </div>
              );
            })}
          </div>
          {pagination ? <Pagination /> : null}
        </Form>
      )}
    </Formik>
  );
};

export default TechnicalIssuesFormikContainer;
