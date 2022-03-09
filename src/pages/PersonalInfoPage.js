import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import useFormContext from "../hooks/useFormContext";

import PersonalInfoFormikContainerntainer from "../components/PersonalInfoFormikContainer";

const header = `Hey, Rocketeer, what are your coordinates?`;

const historyTitle = `Redberry Origins`;

const history = `You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he
answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇`;

const PersonalInfoPage = () => {
  const { updated, resetUpdate } = useFormContext();
  const [safeToNavigate, setSafeToNavigate] = useState(false);
  const [path, setPath] = useState("");
  const navigate = useNavigate();

  const updatePath = (newPath) => setPath(newPath);

  console.log({ updated, path });

  useEffect(() => {
    resetUpdate();
  }, []);

  useEffect(() => {
    console.log({ updated });
    if (updated) {
      setSafeToNavigate(true);
    }
  }, [updated]);

  useEffect(() => {
    if (updated && safeToNavigate && path) {
      navigate(path);
    }
  }, [updated, safeToNavigate, path, navigate]);

  return (
    <>
      {console.log("Rendering")}
      <Layout
        pageHeader={header}
        formControl={
          <PersonalInfoFormikContainerntainer
            onPathUpdate={updatePath}
            pagination={true}
          />
        }
        historyHeader={historyTitle}
        briefHistory={history}
      />
    </>
  );
};

export default PersonalInfoPage;
