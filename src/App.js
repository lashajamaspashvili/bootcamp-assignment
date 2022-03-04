import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './components/pages/Navbar';
import WelcomePage from './components/pages/WelcomePage'
// import AuthContext from './context/auth-context';

function App() {
  // const context = useContext(AuthContext);
  const [isStarted, setIsStarted] = useState(false);

  const startHandler = () => {
    setIsStarted(true);
  }

  return (
    <Container>
      <Router>
        {!isStarted && <WelcomePage onStart={startHandler} />}
        {isStarted && <AppRouter />}
        {isStarted && <Navbar />}
      </Router>
    </Container>
  );
}

export default App;
