import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import BrowseFundraisers from "./pages/BrowseFundraisers";
import HowItWorks from "./pages/HowItWorks";
import StartFundraising from './pages/StartFundraising';
import Auth from './pages/Auth';
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-fundraisers" element={<BrowseFundraisers />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/start-fundraising" element={<StartFundraising />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
