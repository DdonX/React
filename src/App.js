import Navbar from './Navbar';
import Home from './Home';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
