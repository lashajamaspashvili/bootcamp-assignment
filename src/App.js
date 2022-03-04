import { Container } from 'react-bootstrap';
// import PersonalInfoPage from './pages/PersonalInfoPage';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './pages/Navbar';
// import ThanksPage from './pages/ThanksPage';

function App() {
  return (
    <Router>
      <Container>
        <AppRouter />
        <Navbar />
      </Container>
    </Router>
  );
}

export default App;
