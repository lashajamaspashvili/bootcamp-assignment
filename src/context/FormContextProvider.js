import { useState, createContext } from "react";

export const FormContext = createContext({
  personalInfo: {},
  mySkills: [],
  newPath: "",
  updated: "false",
});

const FormContextProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [mySkills, setMySkills] = useState([]);

  const [updated, setUpdated] = useState(false);

  const updatePersonalInfoHandler = (data) => {
    setPersonalInfo({ ...data });
    setUpdated(true);
  };

  const updateMySkillsHandler = (skillsArr) => setMySkills(skillsArr);

  const resetUpdate = () => {
    console.log("Reset");
    setUpdated(false);
  };

  const value = {
    personalInfo,
    mySkills,
    updateMySkillsHandler,
    updated,
    resetUpdate,
    updatePersonalInfoHandler,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
