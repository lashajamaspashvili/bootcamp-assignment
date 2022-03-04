// import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './pages/Navbar';
// import AuthContext from './context/auth-context';

function App() {
  // const context = useContext(AuthContext);

  return (
    <Container>
      <Router>
        <AppRouter />
        <Navbar />
      </Router>
    </Container>
  );
}

export default App;
