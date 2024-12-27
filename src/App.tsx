import React from 'react';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import OurCompany from './pages/OurCompany';
import Guides from './pages/Guides';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';

// Layout
import Layout from './components/layout/LayoutComponent';

// Styles
import './index.css';

const App: React.FC = () => {
  return (
    <div className='mx-auto flex flex-col h-screen'>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}></Route>
            <Route
              path='/solutions'
              element={<Solutions />}></Route>
            <Route
              path='/our-company'
              element={<OurCompany />}></Route>
            <Route
              path='/guides'
              element={<Guides />}></Route>
            <Route
              path='/contact-us'
              element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
