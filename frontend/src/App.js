import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import './index.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Register from './components/Register';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './components/Services';
import CadetProgram from './components/Program';
import FAQ from './components/FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';


const Home = () => (
  <div>
    <Carousel />
    <CadetProgram />
    <Services />
    <Footer />
  </div>
);

const FAQPage = () => (
  <div>
    <div className='flex justify-center'><NavBar /></div>
    <FAQ />
    <Footer/>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App bg-black">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          {/* Add other routes here as needed */}
          <Route path='/faqs' element={<FAQPage/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
