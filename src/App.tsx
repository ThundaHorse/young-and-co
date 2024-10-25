import React from 'react';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

// Layout
import Layout from './components/layout/LayoutComponent';

// Styles
import './index.css';

const App: React.FC = () => {
  return (
    <div className='container mx-auto flex flex-col h-screen'>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}></Route>
            <Route
              path='/about'
              element={<About />}></Route>
            <Route
              path='/services'
              element={<Services />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
