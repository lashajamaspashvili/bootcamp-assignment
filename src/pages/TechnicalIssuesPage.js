import { Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import TechnicalIssuesFormikContainer from "../components/TechnicalIssuesFormikContainer";

import { useTechnicalSkills } from "../hooks/useApi";

const header = `Tell us about your skills`;

const historyTitle = `A bit about our battles`;

const history = `As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.`;

const spinner = <Spinner animation="border" variant="warning" />;

const TechnicalIssuesPage = () => {
  const { isLoading, data } = useTechnicalSkills();

  return (
    <Layout
      pageHeader={header}
      formControl={
        isLoading ? (
          spinner
        ) : (
          <TechnicalIssuesFormikContainer
            pagination={true}
            fetchedData={data}
          />
        )
      }
      historyHeader={historyTitle}
      briefHistory={history}
    />
  );
};

export default TechnicalIssuesPage;
