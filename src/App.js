import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configurestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import By from './pages/by';
import Contact from './pages/contact';
import Sell from './pages/sell';
import AutoCredit from './pages/autoCredit';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NotFound from './pages/notFound';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<By />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/autocredit" element={<AutoCredit />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
