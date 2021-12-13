import React from 'react';
import Button from '@material-ui/core/Button';

import Header from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import By from './pages/by';
import Contact from './pages/contact';
import Sell from './pages/sell';
import AutoCredit from './pages/autoCredit';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/by" element={<By />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/autocredit" element={<AutoCredit />} />
        </Routes>
        <Button variant="contained" color="primary" disableElevation>
          Disable elevation
        </Button>
      </Router>
    </div>
  );
}

export default App;
