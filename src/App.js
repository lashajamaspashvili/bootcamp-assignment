import { BrowserRouter as Router } from "react-router-dom";

import FormContextProvider from "./context/FormContextProvider";
import AppRouter from "./router";
import { Container } from "react-bootstrap";

function App() {
  return (
    <FormContextProvider>
      <Container>
        <Router>
          <AppRouter />
        </Router>
      </Container>
    </FormContextProvider>
  );
}

export default App;
