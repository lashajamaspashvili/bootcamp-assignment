import { useState, createContext } from "react";

export const FormContext = createContext({
  personalInfo: {},
  updated: "false",
});

const FormContextProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [updated, setUpdated] = useState(false);

  const updatePersonalInfoHandler = (data) => {
    setPersonalInfo({ ...data });
    setUpdated(true);
  };

  const resetUpdate = () => {
    console.log("Reset");
    setUpdated(false);
  };

  const value = {
    personalInfo,
    updated,
    resetUpdate,
    updatePersonalInfoHandler,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
