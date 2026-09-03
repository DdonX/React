import Navbar from './Navbar';
import Home from './Home';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Weather from './Weather';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
