import { useContext } from "react";
import { FormContext } from "../context/FormContextProvider";

const useFormContext = () => {
  const {
    personalInfo,
    mySkills,
    covid,
    companyInternal,
    removePath,

    updatePersonalInfoHandler,
    updateMySkillsHandler,
    updated,
    resetUpdate,
  } = useContext(FormContext);

  return {
    personalInfo,
    mySkills,
    updateMySkillsHandler,
    covid,
    companyInternal,
    removePath,
    updated,
    resetUpdate,
    updatePersonalInfoHandler,
  };
};

export default useFormContext;
