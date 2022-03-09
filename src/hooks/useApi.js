import axios from "axios";
import { useState, useEffect } from "react";

export const useTechnicalSkills = (
  url = "https://bootcamp-2022.devtest.ge/api/skills"
) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getSkills();
  }, []);

  return { isLoading, data };
};
