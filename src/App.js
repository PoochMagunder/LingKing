import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation';
import Footer from './components/Footer'
import './assets/css/App.css';
import Homepage from '../src/pages/Homepage';


function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route
        path='/'
        element={<Homepage />}
      />
        <Route
        path='/footer'
        element={<Homepage />}
      />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
